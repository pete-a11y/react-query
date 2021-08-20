import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  () => ({
    buttons: {
      display: 'flex',
      '& > button': {
        flexGrow: 1,
      },
    },
    revert: {
      transform: 'rotate(180deg)',
    },
  }),
  { name: 'TodoListFilter' }
);
