# genshin-gacha-analyzer


- 创建项目
```
npm init vite my-vue-app --template vue-ts
```

### 问题

- 更换图标不显示
```js
import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';
```

```html
  <a-button type="primary">
    // 能正常显示
    <UploadOutlined /> 
    // 不能正常显示
    <!-- <InboxOutlined /> -->
  </a-button>
```

艹啊，原来是我没安装，那问题又来了为什么有些图标又能用
```
$ npm install --save @ant-design/icons-vue
```
- 引入类型错误
https://github.com/vuejs/vue-next/issues/4294
https://github.com/wheatjs/vite-plugin-vue-type-imports

