# 下载

## blob 下载

```js
import { blobDown } from "j4tools";

blobDown(blob, "xxx.docx");
```

## form 下载

```js
import { formDown } from "j4tools";

formDown({
  action: "http://127.0.0.1:9001/file",
  method: "GET",
});
```

::: tip
利用表单提交进行文件下载，
服务端响应的 response 属性 Content-Disposition:attachment;filename=file.pdf
更多属性
:::

| 参数    | 说明     | 类型   | 可选值                                                                       | 默认值 | 是否必填 |
| ------- | -------- | ------ | ---------------------------------------------------------------------------- | ------ | -------- |
| name    | 名称     | string | -                                                                            | -      | N        |
| enctype | 提交类型 | string | application/x-www-form-urlencoded <br/> multipart/form-data <br/> text/plain | -      | N        |
| action  | 提交地址 | string | -                                                                            | -      | Y        |
| method  | 方法类型 | string | GET \| POST                                                                  | -      | Y        |
| target  | 目标行为 | string | \_self \| \_blank \| \_parent \| \_top                                       | -      | N        |
| data    | 参数     | object | -                                                                            | -      | N        |
