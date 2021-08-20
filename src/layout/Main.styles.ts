import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    wrapper: {
      width: '100%',
      minHeight: '100vh',
      background: `linear-gradient(14.62deg, ${theme.palette.grey[100]} 0, ${theme.palette.grey[500]} 100%);`,
    },
    container: {
      position: 'relative',
      background: theme.palette.common.white,
      borderRadius: 8,
      boxShadow: theme.shadows[4],
      transition: '.6s',
      transform: `translateY(${-theme.spacing(0.1)}px)`,

      '&:hover': {
        boxShadow: theme.shadows[1],
        transform: `translateY(0)`,
      },
    },
  }),
  { name: 'Main' }
);
