import {hydrate} from 'react-dom';
import {withStyles} from './mui';

export default (app: Element<*>, {styles, sideEffect, idStyle}) => {
  hydrate(
    withStyles({app, styles})
    ,
    document.querySelector('#root'),
  );
  sideEffect && typeof(sideEffect) === 'function' && sideEffect(idStyle);
};
