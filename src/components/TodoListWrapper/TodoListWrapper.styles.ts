import { makeStyles, alpha } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    container: {
      minHeight: 200,
      maxHeight: 700,
      height: '70vh',
      overflow: 'auto',
      position: 'relative',
    },
    progress: {
      maxHeight: '100%',
      minHeight: 'calc(100% - 4px)',
      '&:after': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: alpha(theme.palette.common.white, 0.5),
      },
    },
  }),
  { name: 'TodoListWrapper' }
);
