import React, {
  Suspense,
  createContext,
  memo,
  useEffect,
  useMemo,
  useState,
  useCallback,
  useContext,
} from 'react';

import { Drawer, Grid, IconButton, CircularProgress } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import { useStyles } from './OverlayProvider.styles';
import { OverlaysNames, OverlayProviderContext, DrawerProps } from './OverlayProvider.types';
import { overlayComponents, overlayNames } from './overlays';

export const OverlayContext = createContext<OverlayProviderContext>({
  changeOverlayName: () => {
    throw new Error('error in OverlayProvider with changeOverlayName');
  },
  openOverlay: () => {
    throw new Error('error in OverlayProvider with openOverlay');
  },
});

export const useOverlays = (): OverlayProviderContext => useContext(OverlayContext);

const drawerProps: DrawerProps = { variant: 'persistent', anchor: 'left', paperStyle: '' };

const OverlayProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [overlayName, setOverlayName] = useState<OverlaysNames>('NULL');
  const [{ variant, anchor, paperStyle }, setDrawerProps] =
    useState<Partial<DrawerProps>>(drawerProps);

  useEffect(() => {
    setOverlayName(overlayNames?.[pathname] ?? 'NULL');
    setOpenDrawer(false);
  }, [pathname]);

  const closeOverlay = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const OverlayComponent = overlayComponents[overlayName];

  const overlayContext = useMemo(
    () => ({
      openOverlay: (customDrawerProps?: Partial<DrawerProps>) => {
        setOpenDrawer(true);

        setDrawerProps(customDrawerProps ? { ...drawerProps, ...customDrawerProps } : drawerProps);
      },
      changeOverlayName: (name: OverlaysNames) => {
        setOverlayName(name);
      },
    }),
    []
  );

  return (
    <OverlayContext.Provider value={overlayContext}>
      <Drawer
        open={openDrawer}
        variant={variant}
        anchor={anchor}
        onClose={closeOverlay}
        PaperProps={{ classes: { root: clsx(classes.paper, paperStyle) } }}
      >
        <Grid container alignItems="flex-start" className={classes.container}>
          <Grid container justifyContent="flex-end" item xs={12}>
            <IconButton onClick={closeOverlay}>
              <Close />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Suspense
              fallback={
                <Grid container justifyContent="center">
                  <CircularProgress />
                </Grid>
              }
            >
              <>{OverlayComponent && <OverlayComponent />}</>
            </Suspense>
          </Grid>
        </Grid>
      </Drawer>
      {children}
    </OverlayContext.Provider>
  );
};

export default memo(OverlayProvider);
