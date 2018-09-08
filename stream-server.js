import {getDataFromTree} from 'react-apollo';
import {renderToNodeStream} from 'react-dom/server';
import {withStyles} from './mui';

export default (app, {styles, idStyle}) => {
  function renderToStreamWithData(component) {
    return getDataFromTree(component).then(() => renderToNodeStream(component));
  };

  const string_stream = require('string-to-stream');
  const multi_stream = require('multistream');

  return renderToStreamWithData(withStyles({app, styles})).then(stream => {    
    const css = styles.sheetsRegistry.toString();
    const header = string_stream(`<div id="root">`);
    const footer = string_stream(`</div>
      <style id="${idStyle}">${css}</style>
    `);
    return multi_stream([
      header,
      stream,
      footer,
    ]);
  });
};
