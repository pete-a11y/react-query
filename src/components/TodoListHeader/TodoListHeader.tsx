import React, { memo } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Box,
  Tooltip,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { FilterList, Search } from '@material-ui/icons';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import { useStyles } from './TodoListHeader.styles';
import { TodoListHeaderProps } from './TodoListHeader.types';

const TodoListHeader: React.FC<TodoListHeaderProps> = ({
  hideDataPicker,
  date,
  title,
  onChange,
  onChangeDate,
  onOpenFilters,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <Toolbar disableGutters>
        <Grid container wrap="nowrap" component={Box} p={3} spacing={2}>
          <Grid item xs={1} container alignItems="center" justifyContent="center">
            <Tooltip title={t('tooltips:filter') as string} arrow>
              <IconButton
                onClick={onOpenFilters}
                edge="start"
                color="inherit"
                aria-label={t('tooltips:filter')}
              >
                <FilterList />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={hideDataPicker ? 11 : 7}>
            <TextField
              variant="outlined"
              name="title"
              fullWidth
              placeholder={t('placeholders:search')}
              value={title}
              onChange={onChange}
              className={classes.input}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {!hideDataPicker && (
            <Grid container alignItems="center" item xs={4}>
              <DatePicker
                animateYearScrolling
                inputVariant="outlined"
                format="MMMM Do YYYY"
                value={moment(date)}
                onChange={onChangeDate}
                disableToolbar
                TextFieldComponent={props => <TextField {...props} className={classes.input} />}
              />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default memo(TodoListHeader);
