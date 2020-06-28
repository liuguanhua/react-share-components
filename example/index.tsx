import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactShareComponents from '../.';
import '../dist/react-share-components.css';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <ReactShareComponents
        sites={[
          'qzone',
          'weibo',
          'wechat',
          'google',
          'twitter',
          'qq',
          'douban',
          'linkedin',
          'facebook',
        ]}
        url="https://github.com/liuguanhua/react-share-components"
        title="react-share-components"
        description="一键分享到各社交网站"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
