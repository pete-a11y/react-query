import React from 'react';

import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import AppLogger from 'containers/AppLogger';
import MainLayout from 'layout/Main';
import ApiProvider from 'providers/ApiProvider';
import OverlayProvider from 'providers/OverlayProvider';
import SnackbarProvider from 'providers/SnackbarProvider';
import TodoListFiltersProvider from 'providers/TodoListFiltersProvider';
import AppRouter from 'router/AppRouter/AppRouter';

import 'locales/init';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <ApiProvider>
            <SnackbarProvider>
              <TodoListFiltersProvider>
                <OverlayProvider>
                  <MainLayout>
                    <AppLogger />
                    <AppRouter />
                  </MainLayout>
                </OverlayProvider>
              </TodoListFiltersProvider>
            </SnackbarProvider>
          </ApiProvider>
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
