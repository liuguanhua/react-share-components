import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactShareComponents from '../.';
import '../dist/react-share-components.css';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <ReactShareComponents />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
