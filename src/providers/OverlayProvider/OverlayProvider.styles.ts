import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    paper: {
      width: '100%',
      maxWidth: 460,
      minHeight: '100vh',
      backgroundColor: theme.palette.grey[100],
    },
    container: {
      padding: '8px 16px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 1,
    },
  }),
  { name: 'OverlayProvider' }
);
