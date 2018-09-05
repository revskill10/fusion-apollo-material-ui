import {renderToStringWithData} from 'react-apollo';
import {withStyles, renderFullPage} from './mui';

export default (app, {styles}, idStyle) => {
  return renderToStringWithData(withStyles({app, styles})).then(content => {
    const css = styles.sheetsRegistry.toString();
    return renderFullPage(content, css, idStyle);
  });
}
