# Broswer

## 判断浏览器

```js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");

isBrowser(); // node=>false
isBrowser(); // browser=>true
```

## 判断设备

```js
const deviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

deviceType(); // 'Mobile' or 'Desktop'
```

## 获取 url 参数

```js
const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

getURLParameters("google.com"); // {}
getURLParameters("http://google.com/page?name=knox&surname=zhang");

// {name: 'knox', surname: 'zhang'}
```

## 创建 Dom 节点

```js
const createElement = (str) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);
console.log(el.className); // 'container'
```

## 复制到剪切板

```js
const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

copyToClipboard("Knox zhang"); // 'Knox zhang' copied to clipboard.
```

## 解析 cookie

```js
const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

parseCookie("foo=zhang; name=knox"); // {"foo":zhang,"name":"knox"}
```
