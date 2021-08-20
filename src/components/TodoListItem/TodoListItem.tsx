import React, { memo } from 'react';

import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Tooltip,
  CircularProgress,
  Typography,
  Badge,
  Grid,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import clsx from 'clsx';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { useStyles } from './TodoListItem.styles';
import { TodoListItemProps } from './TodoListItem.types';

const TodoListItem: React.FC<TodoListItemProps> = ({
  isDeleteLoading,
  onCheckboxClick,
  onDelete,
  ...todo
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { _id, title, description, done, date } = todo;

  const isAfter = moment().isAfter(date, 'days');

  const handleDelete = () => {
    onDelete(_id);
  };

  const handleCheckboxClick = () => {
    onCheckboxClick({ ...todo, done: !done });
  };

  return (
    <>
      <ListItem dense className={clsx({ [classes.todoItem]: done })}>
        <ListItemIcon>
          <Checkbox
            onClick={handleCheckboxClick}
            disabled={isAfter}
            checked={done}
            edge="start"
            color="primary"
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Badge
              color={todo.priority === 'critical' ? 'secondary' : 'primary'}
              badgeContent={t(`todoItem:${todo.priority}`)}
              invisible={todo.priority === 'common'}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Grid container className={classes.container} wrap="nowrap" alignItems="center">
                <Typography className={classes.title} variant="subtitle1">
                  {title}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  {moment(date).format('YYYY MMMM D')}
                </Typography>
              </Grid>
            </Badge>
          }
          secondary={
            <Typography color="textSecondary" variant="body1">
              {description}
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <Tooltip title={t('tooltips:edit') as string} aria-label={t('tooltips:edit')}>
            <IconButton
              color="primary"
              component={NavLink}
              to={`todo/edit/${_id}`}
              disabled={done || isDeleteLoading}
              edge="end"
              className={classes.button}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title={t('tooltips:delete') as string} aria-label={t('tooltips:delete')}>
            <IconButton
              color="primary"
              disabled={isDeleteLoading}
              edge="end"
              onClick={handleDelete}
            >
              {isDeleteLoading ? <CircularProgress color="inherit" size={20} /> : <Delete />}
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>

      <Divider variant="inset" component="li" className={classes.divider} />
    </>
  );
};

export default memo(TodoListItem);
