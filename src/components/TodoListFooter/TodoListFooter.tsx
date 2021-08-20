import React, { memo } from 'react';

import { Fab, Grid, Tooltip } from '@material-ui/core';
import { Add, Create } from '@material-ui/icons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { useStyles } from './TodoListFooter.styles';
import { TodoListFooterProps } from './TodoListFooter.types';

const TodoListFooter: React.FC<TodoListFooterProps> = ({ mode, onClick, disabled }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container alignItems="center" justifyContent="center">
      {mode === 'add' && (
        <Tooltip title={t('tooltips:add') as string} arrow>
          <Fab
            className={classes.fab}
            size="large"
            color="primary"
            aria-label={t('tooltips:add')}
            component={NavLink}
            to="/todo/create"
            disabled={disabled}
          >
            <Add />
          </Fab>
        </Tooltip>
      )}

      {mode === 'create' && (
        <Tooltip title={t('tooltips:create') as string} arrow>
          <Fab
            className={clsx(classes.fab, classes.fabGreen)}
            onClick={onClick}
            size="large"
            color="inherit"
            aria-label={t('tooltips:create')}
            disabled={disabled}
          >
            <Create />
          </Fab>
        </Tooltip>
      )}
    </Grid>
  );
};

export default memo(TodoListFooter);
