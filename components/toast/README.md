Toast
------------
参考 [zanui-webapp](https://github.com/youzan/zanui-weapp/)

#### 使用方法
json 中引入组件
```
"usingComponents": {
    "toast": "../../components/toast/toast"
  }
``` 
在 wxml 页面
```
<toast id="toast"></toast>
```

js 里调用 Toast(options)
```
import Toast from '../../components/toast/bToast'

Toast({
    message: 'blablabla',
    selector: '#toast'
}
```

##### options 具体参数如下

| 名称 | 类型 | 必须 | 默认 | 描述 |
|-----|-----|------|-----|-----|
|message|String|false|空|toast 文字|
|duration|Number|false|3000|显示时间,若小于0则会一直显示,可手动调用 Toast.clear() 清除|


