import { DrawerProps as MUIDrawerProps } from '@material-ui/core';

export type OverlaysNames = 'NULL' | 'TODO_FILTER';

export interface DrawerProps extends Pick<MUIDrawerProps, 'variant' | 'anchor'> {
  paperStyle: string;
}

export interface OverlayProviderContext {
  changeOverlayName: (name: OverlaysNames) => void;
  openOverlay: (customDrawerProps?: Partial<DrawerProps>) => void;
}
