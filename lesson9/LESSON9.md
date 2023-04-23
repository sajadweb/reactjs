### Import antd
### Now we install `antd` from yarn or npm.
```sh
$ yarn add antd
$ npm install --save antd
```
#### Below is the default directory structure.
```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```

#### Modify `src/App.js`, import Button component from `antd`.
```ts
import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```
#### Test with Jest
`create-react-app` comes with `jest` built in. Jest does not support `esm` modules, and Ant Design uses them. In order to test your Ant Design application with Jest you have to add the following to your `package.json` :
```json
"jest": {
  "transformIgnorePatterns": [
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$"
  ]
}

```
## Advanced Guides
In the real world, we usually have to modify default webpack config for custom needs such as themes. We can achieve that by using [`craco`](https://github.com/gsoft-inc/craco) which is one of create-react-app's custom config solutions.

Install craco and modify the `scripts` field in `package.json`.



## Advanced Guides
1. Install
```sh
yarn add @craco/craco
```
2. 
```json
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```
3. Then create a `craco.config.js` at root directory of your project for further overriding.
```js
/* craco.config.js */
module.exports = {
  // ...
};
```
4. Customize Theme
```js

import React from 'react';
import { ConfigProvider } from 'antd';

export default () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <MyApp />
  </ConfigProvider>
);
```
## Link
https://ant.design/docs/react/recommendation
https://ahooks.js.org/hooks/use-local-storage-state