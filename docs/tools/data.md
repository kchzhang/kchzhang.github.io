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

uniqBy([{ a: 1 }, { a: 1 }], 'a'); // [{ a: 1 }]
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
