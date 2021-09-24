# Cookie

## 使用

```js
import { Cookies } from "j4tools";

const Cookies1 = new Cookies();
```

## 设置 cookie

```js
Cookies1.set("A", "1");
Cookies1.set("B", "2");
```

## 获取所有 cookie

```js
Cookies1.get(); // {"A":"1","B":"2"}
```

## 获取某个 cookie

```js
Cookies1.get("A"); // 1
```

## 删除 cookie

```js
// 默认path:"/"
Cookies1.set("A", "1");
Cookies1.remove("A");

// 如果设置带有path属性，那么删除也必须带上path属性
Cookies1.set("A", "1", { path: "/static" });
Cookies1.remove("A", { path: "/static" });
```

## 更多用法

```js
const Cookies1 = new Cookies({ path: "/", expires: 7 });
const Cookies2 = new Cookies({
  path: "/static",
  expires: new Date("2022-01-01"),
});
```
