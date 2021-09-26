# 快速上手

## 安装

```bash
$ npm install j4tools --save

# or
$ yarn add j4tools

```

## Browser

```js
import { cloneDeep } from "j4tools";

cloneDeep(["hello world"]);

// ["hello world"]

// or

// <script src="j4tools.js"></script>

j4tools.cloneDeep(["hello world"]);
```

## Node

```js
const j4tools = require("j4tools");
```

## 兼容

| IE / Edge        | Firefox         | Chrome          | Safari          | Opera           | Electron        |
| ---------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| Edge (polyfills) | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |
