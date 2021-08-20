import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    appBar: {
      overflow: 'hidden',
      borderRadius: '8px 8px 0 0',
    },
    input: {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'transparent',
        },
        '&:hover fieldset': {
          borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'transparent',
        },
      },
    },
    title: {
      padding: theme.spacing(),
    },
    searchIcon: {
      marginRight: theme.spacing(),
      color: theme.palette.common.white,
    },
  }),
  { name: 'TodoListHeader' }
);
