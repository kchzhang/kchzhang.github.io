# 基础数据

## 深拷贝

```js
import { cloneDeep } from "j4tools";

cloneDeep([1, 2, 3]); // [1, 2, 3]
```

## 去重

```js
import { uniq } from "j4tools";

uniq([1, 2, 2]); // [1, 2]
```

::: tip
只有第一次出现的元素才会被保留
:::

## 属性去重

```js
import { uniqBy } from "j4tools";

uniqBy([{ a: 1 }, { a: 1 }], "a"); // [{ a: 1 }]
```

## 判断为空

```js
import { isEmpty } from "j4tools";

isEmpty([]); // true

isEmpty(1); // true

isEmpty([1, 2, 3]); // false
```

::: tip
没有可枚举属性的对象为空
:::

## 判断浏览器

```js
import { isBrowser } from "j4tools";

isBrowser(); // true or false
```

## 判断设备

```js
import { deviceType } from "j4tools";

deviceType(); // Mobile or Desktop
```

## 获取 url 参数

```js
import { getURLParams } from "j4tools";

getURLParams("google.com"); // {}

getURLParams("http://google.com/page?name=knox&surname=zhang");

// {name: 'knox', surname: 'zhang'}
```

## 通过属性查找路径

```js
import { getNodePath } from "j4tools";

const data = [
  {
    id: 1,
    children: [
      { id: 2, parentId: "1111" },
      { id: 3, parentId: "1111" },
    ],
  },
];

getNodePath(data, "3");
// [
//   { id: '1111', children: [ [Object], [Object] ] },
//   { id: 2, parentId: '1111' }
// ]
```

## 自定义属性查找路径

```js
import { getNodePath } from "j4tools";

const data = [
  {
    kid: 1,

    children: [
      { kid: 2, parentId: "1111" },
      { kid: 3, parentId: "1111" },
    ],
  },
];

getNodePath(data, "3", {
  idKey: "kid",
  parentIdKey: "parentId",
  childrenKey: "children",
});
// [
//   { kid: '1111', children: [ [Object], [Object] ] },
//   { kid: 2, parentId: '1111' }
// ]
```

## 集合转树结构

```js
import { listToTree } from "j4tools";

const data = [
  { id: 1, parentId: 0 },
  { id: 2, parentId: 1 },
];

listToTree(data, {
  idKey: "id",
  parentIdKey: "parentId",
  childrenKey: "children",
});
// [ { id: 1, parentId: 0, children: [ [Object] ] } ]
```

## 树转集合结构

```js
import { treeToList } from "j4tools";

const data = {
  id: 1,
  parentId: null,
  children: [
    {
      id: 2,
      parentId: 1,
      children: [
        {
          id: 3,
          parentId: 2,
          children: [],
        },
      ],
    },
  ],
};

treeToList(data, "children");
// 处理 children字段下的子节点

// [
//   {
//     id: 1, parentId: null, children: [{
//       id: 2,
//       parentId: 1,
//       children: [
//         {
//           id: 3,
//           parentId: 2,
//           children: [
//           ]
//         }
//       ]
//     }]
//   },
//   {
//     id: 2, parentId: 1, children: [{
//       id: 3,
//       parentId: 2,
//       children: []
//     }]
//   },
//   { id: 3, parentId: 2, children: [] }
// ]
```
