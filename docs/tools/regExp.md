# 正则校验

## 手机号

```js
import { regPhone } from "j4tools";

regPhone("1"); // false
regPhone("13112345678"); // true
```

## 邮箱

```js
import { regMail } from "j4tools";

regMail("1"); // false
regMail("knox.zhang@xx.com"); // true
```

## 非新能源

```js
import { regCardNum } from "j4tools";

regCardNum("粤A12345"); // true
```

## 新能源

```js
import { regCardNumGreen } from "j4tools";

regCardNumGreen("粤AF12345"); // true
```

## 统一社会信用代码

```js
import { regSocialCreditCode } from "j4tools";

regSocialCreditCode("111111"); // false
```
