import React from 'react';

import { Container, Grid } from '@material-ui/core';

import { useStyles } from './Main.styles';
import { MainLayoutProps } from './Main.types';

const MainLayout: React.FC<MainLayoutProps> = ({ header, footer, children }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justifyContent="center" className={classes.wrapper}>
      <Container maxWidth="sm" disableGutters className={classes.container}>
        {header}
        <main>{children}</main>
        {footer}
      </Container>
    </Grid>
  );
};

export default MainLayout;
