import React, { useMemo } from 'react';

import {
  Grid,
  TextField,
  Box,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  FormControlLabel,
  Checkbox,
  Divider,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Sort } from '@material-ui/icons';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { TodoListFilterForm } from 'providers/TodoListFiltersProvider/TodoListFiltersProvider.types';

import { useStyles } from './TodoListFilter.styles';
import { TodoListFilterProps } from './TodoListFilter.types';

const TodoListFilter: React.FC<TodoListFilterProps> = ({
  onChangeVariant,
  onChangeSortProperty,
  onChangeSortVariant,
  handleChange: onChange,
  values: { variant, priority, title, description, done, sortVariant, sortProperty },
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const options: Array<{ value: TodoListFilterForm['priority']; label: string }> = useMemo(
    () => [
      { value: 'all', label: t('todoFilters:priorityAll') },
      { value: 'common', label: t('todoFilters:priorityCommon') },
      { value: 'urgent', label: t('todoFilters:priorityUrgent') },
      { value: 'critical', label: t('todoFilters:priorityCritical') },
    ],
    [t]
  );

  return (
    <Grid container spacing={2} component={Box} pt={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle1">
          {t('todoFilters:sort')}
        </Typography>
      </Grid>
      <Grid container wrap="nowrap" item xs={12}>
        <Grid item xs={9}>
          <ToggleButtonGroup
            className={classes.buttons}
            size="medium"
            value={sortProperty}
            exclusive
            onChange={onChangeSortProperty}
          >
            <ToggleButton value="title">{t('todoFilters:title')}</ToggleButton>
            <ToggleButton value="description">{t('todoFilters:description')}</ToggleButton>
            <ToggleButton value="date">{t('todoFilters:date')}</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid container justifyContent="center" item xs={3}>
          <IconButton onClick={onChangeSortVariant}>
            <Sort className={clsx({ [classes.revert]: sortVariant === 'ASC' })} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle1">
          {t('todoFilters:filters')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ToggleButtonGroup
          className={classes.buttons}
          size="medium"
          value={variant}
          exclusive
          onChange={onChangeVariant}
        >
          <ToggleButton value="all">{t('todoFilters:all')}</ToggleButton>
          <ToggleButton value="byDate">{t('todoFilters:byDate')}</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={t('todoFilters:title')}
          name="title"
          value={title}
          onChange={onChange}
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={t('todoFilters:description')}
          name="description"
          value={description}
          onChange={onChange}
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          label={t('todoFilters:done')}
          control={<Checkbox checked={done} onChange={onChange} name="done" color="primary" />}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="priority">{t('todoFilters:priority')}</InputLabel>
          <Select
            name="priority"
            value={priority}
            onChange={onChange}
            labelId="priority"
            label={t('todoFilters:priority')}
          >
            {options.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default TodoListFilter;
