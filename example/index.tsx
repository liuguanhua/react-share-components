import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactShareComponents from '../.';
import '../dist/react-share-components.css';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <h2>react-share-components</h2>
      <ReactShareComponents
        sites={[
          'weibo',
          'qq',
          'wechat',
          'douban',
          'qzone',
          'linkedin',
          'facebook',
          'twitter',
          'google',
        ]}
        url="https://github.com/liuguanhua/react-share-components"
        title="react-share-components"
        description="一键分享到各社交平台"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
