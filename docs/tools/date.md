# 时间格式

## 时间戳

```js
import { dateToMs } from "j4tools";

dateToMs(new Date()); // 当前时间戳
dateToMs("2021-01-01"); // 1609459200000
dateToMs("2021-01-01 08:12:12"); // 1609459932000
```

## 时间格式

```js
import { formatDate } from "j4tools";

formatDate(new Date()); // 2021-09-14 10:29:43
formatDate(new Date(), "yyyy"); // 2021
formatDate(new Date(), "yyyy-MM"); // 2021-09
formatDate(new Date(), "yyyy-MM-dd"); // 2021-09-14
formatDate(new Date(), "yyyy-MM-dd hh:mm"); // 2021-09-14 10:29
formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"); // 2021-09-14 10:29:43
```
