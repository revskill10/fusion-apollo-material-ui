## Usage

```js

// @flow
import App, {ApolloClientToken} from './plugins/fusion-apollo';
import React from 'react';
import Router from 'fusion-plugin-react-router';
import {Route, Switch} from 'fusion-plugin-react-router';
import Root from './root.js';
import {FetchToken} from 'fusion-tokens';

import ApolloClient, {
  ApolloClientEndpointToken
} from 'fusion-apollo-universal-client';

import unfetch from 'unfetch';

export default () => {
  const Wrapped = (
    <Switch>
      <Route path="/" component={Root} />
    </Switch>
  )
  const app = new App(Wrapped);
  app.register(Router);
  app.register(ApolloClientToken, ApolloClient);
  app.register(ApolloClientEndpointToken, '...');
  __NODE__ && app.register(FetchToken, unfetch);
  __BROWSER__ && app.register(FetchToken, window.fetch);
  
  return app;
};


```