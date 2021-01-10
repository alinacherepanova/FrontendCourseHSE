import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App } from './components/App/App';
import helpCenterReducer from './reducers/articlesReducer';

const helpCenter = createStore(helpCenterReducer);

ReactDOM.render(<Provider store={helpCenter}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
