import React from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import type {Element} from 'react';

export const withStyles = ({app, styles: {sheetsRegistry, classNames, theme, sheetsManager}}) =>
  <JssProvider registry={sheetsRegistry} generateClassName={classNames}>
    <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
      {app}
    </MuiThemeProvider>
  </JssProvider>

export const defaultThemeOptions = {
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
}

export const generateStyles = (themeOptions = defaultThemeOptions) => {
  const classNames = createGenerateClassName({
    dangerouslyUseGlobalCSS: true,
    productionPrefix: 'c',
  });
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const theme = createMuiTheme(themeOptions);

  return {sheetsRegistry, classNames, theme, sheetsManager};
};
