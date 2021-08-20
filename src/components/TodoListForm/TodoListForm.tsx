import React, { useMemo } from 'react';

import {
  Grid,
  Box,
  IconButton,
  TextField,
  Typography,
  Tooltip,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { DatePicker } from '@material-ui/pickers';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { Priority } from 'service/types/todos.types';

import { TodoListFormProps } from './TodoListForm.types';

const TodoListForm: React.FC<TodoListFormProps> = ({
  onChange,
  onChangeDate,
  date,
  title,
  description,
  priority,
  disabled,
  isEdit,
}) => {
  const { t } = useTranslation();

  const options: Array<{ value: Priority; label: string }> = useMemo(
    () => [
      { value: 'common', label: t('todoForm:priorityCommon') },
      { value: 'urgent', label: t('todoForm:priorityUrgent') },
      { value: 'critical', label: t('todoForm:priorityCritical') },
    ],
    [t]
  );

  return (
    <>
      <Box position="absolute" top={8} left={8} zIndex={1}>
        <Tooltip title={t('tooltips:back') as string} arrow>
          <IconButton component={NavLink} to="/todos" aria-label={t('tooltips:back')}>
            <ArrowBack />
          </IconButton>
        </Tooltip>
      </Box>
      <Grid container spacing={2} component={Box} p={4}>
        <Grid item xs={12} component={Box} position="relative">
          <Typography gutterBottom align="center" variant="h4">
            {t(`todoForm:${isEdit ? 'edit' : 'create'}`)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="title"
            value={title}
            onChange={onChange}
            label={t('todoForm:title')}
            fullWidth
            variant="outlined"
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            value={description}
            onChange={onChange}
            label={t('todoForm:description')}
            fullWidth
            maxRows={8}
            multiline
            variant="outlined"
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="priority">{t('todoForm:priority')}</InputLabel>
            <Select
              name="priority"
              value={priority}
              onChange={onChange}
              labelId="priority"
              label={t('todoForm:priority')}
              disabled={disabled}
            >
              {options.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            value={date}
            onChange={onChangeDate}
            animateYearScrolling
            inputVariant="outlined"
            format="MMMM Do YYYY"
            disablePast
            disableToolbar
            fullWidth
            disabled={disabled}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TodoListForm;
