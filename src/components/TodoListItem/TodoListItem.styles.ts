import { makeStyles, alpha } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    container: {
      paddingTop: theme.spacing(1),
    },
    title: {
      marginRight: theme.spacing(1),
    },
    button: {
      marginRight: theme.spacing(0.5),
    },
    todoItem: {
      backgroundColor: alpha(theme.palette.primary.light, 0.1),
    },
    divider: {
      margin: theme.spacing(0.5),
    },
  }),
  { name: 'TodoListItem' }
);
