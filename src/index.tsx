import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.less';

// TODO MÅ fjernes
import './mocking/mock';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
