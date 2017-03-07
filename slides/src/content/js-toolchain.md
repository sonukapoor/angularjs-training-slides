# JS Toolchain

- GIT
- Node.js
- NPM
- GULP

---

## GIT

- Distributed Version System for source code
- Collaborate to the same codebase without overwriting anybodys changes

```bash
git clone https://github.com/rangle/ngcourse.git
cd ngcourse
```

---

## Node.js

- `node.js` allows you execute javascript from the console
- Originally developed for writing server side code
- Very popular for front-end developers i.e: to run automation tasks
- Very easy to setup as a web server

---

## Express Webserver

```js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
```

---

## NPM - Node Package manager

- Comes with `node.js`
- Allows you to manage the dependencies for your front-end / back-end application
- `npm` gives you access to a variety of 3rd-party JavaScript modules / libraries
- Module dependencies are defined in the `package.json`
- `npm install` will install all dependencies from the `package.json`

---

## GULP

- Task runner similar to `ant` or `make`
- Gulp tasks are defined in the `gulpfile.js`
- Gulp modules are installed via `npm`
- A variety of gulp modules are available to front-end developers 
- i.e: minify javascript code, compress images, compile css, run unit tests, start back end services etc..