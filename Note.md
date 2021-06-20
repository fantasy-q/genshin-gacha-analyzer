想了一下还是稍微记录下需求和解决办法，不然隔一段时间都忘了

包括一些解决了，和一些没解决但暂时用其他方法替代了的

不见得是最好的，但至少有效果，说不定后面能找到更好的
- [已解决](#已解决)
  - [在 disabled 的 v-btn 显示 v-tooltip](#在-disabled-的-v-btn-显示-v-tooltip)
  - [清除默认 :hover 等的背景色样式](#清除默认-hover-等的背景色样式)
  - [v-deep 相关](#v-deep-相关)
  - [合并文件页面上传同一个文件时，发现没有反应](#合并文件页面上传同一个文件时发现没有反应)
  - [如何切换页面，不改变 url](#如何切换页面不改变-url)
  - [为什么要用 Vuex](#为什么要用-vuex)
- [未解决](#未解决)
  - [1](#1)
  - [2](#2)
  - [3](#3)
  - [4](#4)

## 已解决

### 在 disabled 的 v-btn 显示 v-tooltip
(Display Vuetify tooltip on disabled button)[https://stackoverflow.com/questions/56370021/display-vuetify-tooltip-on-disabled-button]

### 清除默认 :hover 等的背景色样式
包括但不限于 v-btn 等可点击组件
(How to remove v-btn background in vuetify?)[https://stackoverflow.com/questions/60550006/how-to-remove-v-btn-background-in-vuetify]
顺便也是找这个的问题中，发现那个点击效果叫 ripple，也可以关掉
```css
.v-btn::before {
  background-color: transparent;
}
.v-card::before {
  background-color: transparent;
}
```

### v-deep 相关
本来是想将 v-alert 的字改成黑色，但背景又是 info 色
v-deep 这个还没怎么看，反正这样弄样式生效了 
(How to override vuetify styles?)[https://stackoverflow.com/questions/52310060/how-to-override-vuetify-styles]
```css
.v-alert >>> .v-alert__content {
  color: black;
  text-align: center;
  font-size: 0.875rem;
}
```

### 合并文件页面上传同一个文件时，发现没有反应
这个调试了一段时间，才反应过来是因为没触发 onchange

```js
this.$refs.mergeUpload.value = null
```

### 如何切换页面，不改变 url
首先有这个需求因为原项目就是这样，想尽量复现；其次其他页面都是要上传文件以后才有意义，确实这样比较好

查了半天，看到一个回答，不改变 URL 切换页面就不是 Router 该干的事，也对哦，然后发现可以 v-if 实现这个效果

### 为什么要用 Vuex
组件之间传递文件相关的信息时，发现一层层传太麻烦了，想知道有什么方法可以方便点

有让用 $attrs $listener 的，但 v-bind= 我有其他用处，最后还是决定用 Vuex

当初看视频学没太能体会到 Vuex 的用处，还是完全自己写比较有体会，至少体会到了一个

## 未解决

### 1
需求：用 v-alert 来表示每个文件，因为 v-alert 有个自带属性 dissmissible，点击删除图标，v-alert DOM 和 store 的文件一并删除
方法：在 v-alert 上绑定 click 事件，使用 dispatch 进行文件删除
问题：但点击删除按钮，对应文件删除，但 v-alert 被删了两个
解决无效：不使用 dismissible，再在 alert 里面创建按钮绑定 click 进行操作
原因：因为用 v-for 绑定 state 已经相当于将数据和 DOM 绑定了，所以 click 事件只需 dispatch 即可
补充：查到一个类似的问题，好像真正的原因和 key 绑定为 index 有关。(StackOverflow)[https://stackoverflow.com/questions/64467929/vuetify-v-alert-incorrectly-dismissing-sibling-when-transition-is-applied]，在 `store.js` 的 Mutation 中给每个 File 对象增加一个 UniqueID，确实解决了

### 2
需求：各个方面想少些点代码，想在 data 中调用 computed
方法：查了一下就是不可以，要用生命周期实现类似效果，(Bind vuex state to this in data()?)[https://stackoverflow.com/questions/43375447/bind-vuex-state-to-this-in-data]
未解决：了解下生命周期

### 3
需求：少写代码，想让代码好看点（凭个人感觉）
方法：在 data 中用一个对象来控制 vuetify 的 API
问题：
- v-bind= 只能有一个（好像可以用一个数组绑定多个
- html 里有 :class 对象里的 class 会失效
- 想在对象里实现下面类似的效果（和问题 2 有关
```js
  data: () => ({
      vBtnProps: {
        outlined: true,
        disabled: files.length < 2
      }
    })
  },
```
未解决：找了一圈，没看到有谁这样做，怕不是这样有什么问题，或者有更好的方法

### 4
问题：`FileList.vue` 中按钮不知为何字间距特别大
方法：暂时先这样解决
```html
<span style="letter-spacing: normal">
  合并生成新文件
</span>
```