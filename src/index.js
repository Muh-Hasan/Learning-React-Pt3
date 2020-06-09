import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import New from './App';

ReactDOM.render(
    <div>
      <New name="Muhammad Hasan" age= "16" />
    </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
