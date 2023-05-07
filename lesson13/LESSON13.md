## React TODO Dom
```sh
npm install axios
```
```js
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
```
```js
todo:1 Access to XMLHttpRequest at 'http://localhost:8000/' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
## backend
```sh
 npm install express
 npm install body-parser
 npm install cors
 npm install nodemon
```
```json
  "scripts": {
    "backend": "nodemon server/app.js",
     ....
  },
```
