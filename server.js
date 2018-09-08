/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
import {renderToStringWithData} from 'react-apollo';
import {withStyles} from './mui';

export default (app, {styles, idStyle}) => {
  return renderToStringWithData(withStyles({app, styles})).then(content => {
    const css = styles.sheetsRegistry.toString();
    const header = `<div id="root">`;
    const footer = `
      </div>
      <style id="${idStyle}">${css}</style>
    `;
    return `
      ${header}
      ${content}
      ${footer}
    `;
  });
};

