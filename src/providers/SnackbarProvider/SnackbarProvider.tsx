import React, { useRef } from 'react';

import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';

const SnackbarProvider: React.FC = ({ children }) => {
  const notistackRef = useRef<any>(null);

  const makeHandleClickDismiss = key => () => {
    notistackRef.current?.closeSnackbar(key);
  };

  return (
    <NotistackSnackbarProvider
      ref={notistackRef}
      dense
      classes={{ root: `whiteSpace: pre-wrap` }}
      maxSnack={8}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      action={key => (
        <IconButton onClick={makeHandleClickDismiss(key)}>
          <Close />
        </IconButton>
      )}
    >
      {children}
    </NotistackSnackbarProvider>
  );
};

export default SnackbarProvider;
