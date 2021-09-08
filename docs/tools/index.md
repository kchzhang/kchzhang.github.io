# 快速上手

## 安装

```bash
$ npm install j4Tools --save

# or
$ yarn add j4Tools

```

## Browser

```js
import { hello } from "j4Tools";

hello("hello world");

// hello world

// or

// <script src="j4Tools.js"></script>

j4Tools.hello("hello world");
```

## Node

```js
const j4Tools = require("j4Tools");
```

## 兼容

| IE / Edge        | Firefox         | Chrome          | Safari          | Opera           | Electron        |
| ---------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| Edge (polyfills) | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |
