import React, { useEffect } from 'react';

import { useSnackbar } from 'notistack';
import { setLogger } from 'react-query';

const AppLogger: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLogger({
      // eslint-disable-next-line
      log: () => {},
      // eslint-disable-next-line
      warn: () => {},
      error: error => {
        if (error.response?.data?.error) {
          error.response.data.error.split(',').forEach(message => {
            enqueueSnackbar(message, { variant: 'error' });
          });
        }
      },
    });
  }, [enqueueSnackbar]);

  return null;
};

export default AppLogger;
