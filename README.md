<h1 align="center">react-share-components 👋</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## 📖 介绍

一键分享到各社交网站。将原[share.js](https://github.com/overtrue/share.js)包装成了一个 react 版本，感谢原作者！

## 🏠 主页

[在线预览](https://liuguanhua.github.io/react-share-components/)

![demo](https://s1.ax1x.com/2020/06/27/Nc1Cbq.png)

## ✨ 安装

```sh
yarn add react-share-components

or

npm install react-share-components
```

## 💻 使用

```sh
import ReactShareComponents from 'react-share-components';

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
```

````
参数：
  属性 | 类型 | 默认值
  ---|---|---
  url | string  | window.location.href
  title | string  | ```读取head标签<meta name="title" content="react-share-components" />或document.title的内容```
  description | string  | ```读取head标签<meta name="description" content="一键分享到各社交网站" />的内容```
  source | string  | ```读取head标签<meta name="site" content="https://github.com/liuguanhua/react-share-components" />的内容```
  image | string  | 读取第一个img标签地址
  sites | ```("qzone" | "weibo" | "wechat" | "google" | "twitter" | "qq" | "douban" | "linkedin" | "facebook")[]```  | ```["qzone","weibo","wechat", "google","twitter","qq","douban","linkedin" , "facebook"]```
  disabled | ```("qzone" | "weibo" | "wechat" | "google" | "twitter" | "qq" | "douban" | "linkedin" | "facebook")[]```  | []
  wechatQrcodeTitle | React.ReactNode | 微信扫一扫：分享
  wechatQrcodeHelper | React.ReactNode | ```<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>```
  wechatQrcodeProps | [QRCode](https://github.com/zpao/qrcode.react#available-props) | ```{size:100}```
````

```
下载：git clone https://github.com/liuguanhua/react-share-components.git

开发：
    cd react-share-components
    yarn install
    yarn start

预览：
    cd example
    yarn install
    yarn start
    http://localhost:1234
```

## 😊 鸣谢

[share.js](https://github.com/overtrue/share.js)

## 👤 作者

- 个人主页: [liuguanhua.github.io](https://liuguanhua.github.io)
- Github:[@liuguanhua](https://github.com/liguanhua)

## 🤝 支持

有什么好的想法、建议、问题和功能需求，欢迎 👋 提出。如果觉得这个项目不错或者对您有帮助，👏 赞一 个 ⭐️❤️！
