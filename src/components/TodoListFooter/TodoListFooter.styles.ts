import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    fab: {
      transform: `translateY(50%)`,
      boxShadow: theme.shadows[4],

      '&:hover': {
        boxShadow: theme.shadows[1],
      },
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[600],
      },
    },
  }),
  { name: 'TodoListHeader' }
);
