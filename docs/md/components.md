# 微信小程序组件库kai-ui文档

## 快速入门指南

### 使用场景

该版本基于微信小程序环境、`wepy` 框架。
`wepy-cli` 版本要求 `^1.7.3`,
低于 `1.7.3` 版本的可以直接把 `src/component` 下的资源文件拷贝到自己项目 `component` 下

### 如何在项目中使用kai-ui

kai-ui的安装和更新是通过`npm`操作的。

**全局安装或更新kai-ui命令行工具**

```bash
npm i kai-ui -g
```

## 组件

### 布局

#### Layout 布局

- **概述**

&emsp;&emsp;适用于一维布局

- **使用指南**

&emsp;&emsp;app页面中引入样式
```css
@import '../node_modules/kai-ui/src/less/index';
```

&emsp;&emsp;template添加
```template
<template>
  <view class="layout layout-list">
    <view class="col col-4">4</view>
    <view class="col col-4 col-offset-4">4 4</view>
    <view class="col col-8 col-offset-4">4 8</view>
  </view>
</template>
```

#### Grid 宫格

- **概述**

&emsp;&emsp;适用于二维布局（例如九宫格，十六宫格）

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Grid from 'kai-ui/Grid'
```

&emsp;&emsp;组件添加
```javascript
components = {
  grid: Grid
}
```

&emsp;&emsp;template添加
```template
<template>
  <grid col="9" @tap="onClick">
    <repeat for="{{arr9}}" index="index" item="item" key="key">
      <griditem>
        <view slot="content" class="custom-icon">
          <icon :type.sync="iconArr[index]"/>
          <view class="content">{{iconArr[index]}}</view>
        </view>
      </griditem>
    </repeat>
  </grid>
</template>
```

&emsp;&emsp;对应参数：

API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| col | 宫格列数 | `Number` | `9` `16`  | `9` |

Slot

| 名称 | 说明 |
|-----------|-----------|
| content | 宫格自定义内容 |

外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

&emsp;&emsp;案例
```wpy
<style lang="less">
.title {
	font-size: 16px;
	margin-bottom: 10px;
	text-align: center;
}
.content {
	font-size: 12px;
	text-align: center;
}
.custom-icon{
	font-size: 30px !important;
	text-align:center;
}
</style>
<template>
  <view class="kai-content" style="width: 100%">
    <panel class="no-padding">
      <view slot="title" class="title">9宫格</view>
      <view class="panel">
        <grid col="9" @tap="onClick">
          <repeat for="{{arr9}}" index="index" item="item" key="key">
            <griditem>
              <view slot="content" class="custom-icon">
                <icon :type.sync="iconArr[index]"/>
                <view class="content">{{iconArr[index]}}</view>
              </view>
            </griditem>
          </repeat>
        </grid>
      </view>
    </panel>
    <panel class="no-padding">
      <view slot="title" class="title">16宫格</view>
      <view class="panel">
        <grid1 col="16" @tap="onClick">
          <repeat for="{{arr16}}" index="index" item="item" key="key">
            <griditem1 width="25%">
              <view slot="content">
                <view class="title">标题</view>
                <view class="content">内容</view>
              </view>
            </griditem1>
          </repeat>
        </grid1>
      </view>
    </panel>
  </view>
</template>

<script>
import wepy from 'wepy'
import grid from 'kai-ui/Grid'
import gridItem from 'kai-ui/GridItem'
import panel from 'kai-ui/Panel'
import icon from 'kai-ui/Icon'

export default class Grid extends wepy.page {
  config = {
    navigationBarTitleText: 'Grid 宫格'
  }

  components = {
    grid: grid,
    grid1: grid,
    griditem: gridItem,
    griditem1: gridItem,
    panel: panel,
    icon: icon
  }

  data = {
    arr9: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    arr16: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    iconArr: [
  		'calendar', 'camera', 'cart', 'comment', 'edit', 'gear', 'image', 'mail',
      'map'
  	],
    itemWidth: '33.333333%'
  }

  computed = {}

  methods = {
    onClick () {
      console.log('点击宫格')
    }
  }

  events = {
  }

  onLoad() {
  }
}
</script>

```

#### Cell 列表

- **概述**

&emsp;&emsp;适用于列表展示

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Cell from 'kai-ui/Cell'
```

&emsp;&emsp;组件添加
```javascript
components = {
  cell: Cell
}
```

&emsp;&emsp;template添加
```template
<template>
  <panel custom-class="panel-container">
    <view slot="title" class="title">{{item.panelTitle}}</view>
    <cellgroup custom-class="single-cellgroup">
      <block>
        <cell :title="item.title" :subtitle="item.subtitle" :arrow="item.arrow" :access="item.access"></cell>
      </block>
    </cellgroup>
  </panel>
</template>
```

&emsp;&emsp;回调
```javascript
  events = {
    'item-tap': (item) => {
      console.log(item)
    }
  }
```

&emsp;&emsp;对应参数：

API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 列表显示的标题 | `String` | ` ` |
| detail | 列表右边显示内容 | `String` | ` ` |
| subtitle | 左边显示的内容 | `String` | ` ` |
| access | 是否显示右箭头 | `Boolean` | `false` |
| arrow | 是否显示右边模块 | `Boolean` | `false` |

Slot

| 名称 | 说明 |
|-----------|-----------|
| title | 列表标题插槽 |
| detail | 列表右边内容插槽 |

外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

&emsp;&emsp;案例
```wpy
<style lang="less">
.single-cellgroup {
 margin-bottom: 10px;
}

.single-cellgroup .cell-class > view:last-of-type{
  font-size: 10px;
}
.title-new{
  display: inline-block;
  margin-right: 5px;
}
.title-text{
  color: red;
}
.icon{
	display: inline-block;
	margin-right: 5px;
}
</style>
<template>
  <view class="kai-content">
    <repeat for="{{cellData}}" index="i" item="item" key="row-{{index}}">
      <panel custom-class="panel-container">
        <view slot="title" class="title">{{item.panelTitle}}</view>
        <cellgroup custom-class="single-cellgroup">
          <block>
            <cell :title="item.title" :detail="item.detail" :arrow="item.arrow" :access="item.access"></cell>
            <cell :title="item.title" :subtitle="item.subtitle" :arrow="item.arrow" :access="item.access"></cell>
          </block>
        </cellgroup>
      </panel>
    </repeat>

    <panel custom-class="panel-container">
      <view slot="title" class="title">高级用法</view>
      <cellgroup1 custom-class="single-cellgroup">
        <block>
        <cell1 detail="自定义内容" :access="arrow" :arrow="arrow">
          <view slot="title">
            <icon type="location" class="icon"/>
            <view class="title-new">搜索</view>
            <tag type="danger" custom-class="single-tag">标签</tag>
          </view>
        </cell1>
        <cell2 title="单元格" arrow="{{ true }}">
          <view slot="detail">
            <switch-type
              :switchItem.sync="switchItem"
              @onChange.user="change"/>
          </view>
        </cell2>
        <cell3 title="标题" custom-class="cell-class" detail="自定义内容样式" :arrow="arrow" :access="arrow"></cell3>
      </block>
      </cellgroup1>
    </panel>
  </view>
</template>

<script>
import wepy from 'wepy'
import cellGroup from 'kai-ui/CellGroup'
import cell from 'kai-ui/Cell'
import panel from 'kai-ui/Panel'
import Switch from 'kai-ui/Switch'
import icon from 'kai-ui/Icon'
import tag from 'kai-ui/Tag'

export default class Cell extends wepy.page {
  config = {
    navigationBarTitleText: 'Cell 列表'
  }

  components = {
    cell: cell,
    cell1: cell,
    cell2: cell,
    cell3: cell,
    panel: panel,
    cellgroup: cellGroup,
    cellgroup1: cellGroup,
    'switch-type': Switch,
    icon: icon,
    tag: tag
  }

  data = {
    arrow: true,
    cellData: [
      {
        panelTitle: '基础用法',
        title: '标题',
        subtitle: '自定义内容',
        arrow: true,
        detail: '内容'
      },
      {
        panelTitle: '带图标用法',
        title: '标题',
        subtitle: '自定义内容',
        arrow: true,
        detail: '内容',
        access: true
      },
      {
        panelTitle: '带箭头用法',
        title: '标题',
        subtitle: '自定义内容',
        arrow: true,
        detail: '内容',
        access: true
      }
    ],
    switchItem: {
      checked: true,
      disabled: false,
      componentId: 'switch1'
    }
  }

  computed = {}

  methods = {
    change (e) {
      console.log(e)
      console.log(e)
      this.switchItem.checked = e.checked
      this.$apply()
    }
  }

  events = {
    'item-tap': (item) => {
      console.log(item)
    }
  }

  onLoad() {
  }
}
</script>
```

#### Panel 面板

- **概述**

&emsp;&emsp;适用于统一面板

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Panel from 'kai-ui/Panel'
```

&emsp;&emsp;组件添加
```javascript
components = {
  panel: Panel
}
```

&emsp;&emsp;template添加
```template
<template>
  <panel class="padding-10">
    <view>我是默认的panel</view>
  </panel>
  <panel class="padding-10">
    <view slot="title" class="title">无边框</view>
    <view>我是一个没有边框的panel</view>
  </panel>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 默认  | 描述 |
| --- | --- | --- | --- |
| border | `String` | `false` | 0 | panel边框宽度，例如border-width: 1px 0 1px 0; |


#### Folder 折叠面板

- **概述**

&emsp;&emsp;适用于折叠/展开面板内容

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Folder from 'kai-ui/Folder'
```

&emsp;&emsp;组件添加
```javascript
components = {
  folder: Folder
}
```

&emsp;&emsp;template添加
```template
<template>
  <folder title="会员信息" componentId="0">
    <view slot="content">
      <view>客户来源：微信公众号</view>
      <view>昵称：江南</view>
      <view>下单数：132</view>
      <view>退款数：2</view>
      <view>购买均价：100</view>
    </view>
  </folder>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 是否必传 | 默认  | 描述 |
| --- | ---- | ------- | ---- | ---- |
| title | `String` | 是 | - | 标题 |
| componentId | `String`,`Number` | 是 | - | 组件id，与该页面中其他折叠面板组件id不重复 |
| content | `slot` | 是 | - | 内容 |

&emsp;&emsp;案例：
```wpy
<template>
  <view class="kai-content">
    <view class="padding-10">
      <folder1 title="会员信息" componentId="0">
        <view slot="content">
          <view>客户来源：微信公众号</view>
          <view>昵称：江南</view>
          <view>下单数：132</view>
          <view>退款数：2</view>
          <view>购买均价：100</view>
        </view>
      </folder1>
      <view class="padding-10"></view>
      <folder2 title="订单信息" componentId="1">
        <view slot="content">
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
        </view>
      </folder2>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Folder from 'kai-ui/Folder'

export default class FolderPage extends wepy.page {
  components = {
    folder1: Folder,
    folder2: Folder
  }
}
</script>

```

### 基础组件

#### Button 按钮

- **概述**

&emsp;&emsp;常用按钮样式统一

- **使用指南**

&emsp;&emsp;app页面中引入全局样式
```javascript
@import '../node_modules/kai-ui/src/less/index';
```

&emsp;&emsp;案例
```wpy
<style lang="less" src="../less/font.less"></style>
<style lang="less">

</style>
<template>
  <view class="kai-content">
    <view class="padding-10">
      <button class="btn btn-min">按钮</button>
      <button class="btn btn-min btn-kai">微信支付</button>
      <button class="btn btn-min btn-empty btn-success">微信支付</button>
    </view>
    <view class="padding-10">
      <button class="btn btn-small">按钮</button>
      <button class="btn btn-small btn-success">支付宝支付</button>
      <button class="btn btn-small btn-kai">微信支付</button>
      <button class="btn btn-small btn-danger btn-empty">京东支付</button>
    </view>
    <view class="padding-10">
      <button class="btn ">按钮</button>
      <button class="btn btn-success">按钮</button>
      <button class="btn btn-kai">按钮</button>
      <button class="btn btn-warn btn-empty">按钮</button>
    </view>
    <view class="padding-10">
      <button class="btn btn-large">按钮</button>
      <button class="btn btn-large btn-success">按钮</button>
      <button class="btn btn-large btn-kai">按钮</button>
      <button class="btn btn-large btn-warn btn-empty">按钮</button>
    </view>
    <view class="padding-10">
      <button class="btn btn-small btn-success btn-loading">
       <view class="kai-iconfont kai-icon-loading"></view>
       按钮
     </button>
     <button class="btn btn-large btn-kai btn-loading">
       <view class="kai-iconfont kai-icon-loading"></view>
       按钮
     </button>
     <button class="btn btn-large btn-warn btn-empty btn-loading">
       <view class="kai-iconfont kai-icon-loading"></view>
       按钮
     </button>
   </view>
   <view class="padding-10">
    <button class="btn btn-min" disabled>按钮</button>
    <button class="btn btn-small btn-success btn-empty" disabled>按钮</button>
    <button class="btn btn-kai" disabled>按钮</button>
    <button class="btn btn-large btn-warn" disabled>按钮</button>
  </view>
</view>
</template>

<script>
import wepy from 'wepy'

export default class Button extends wepy.page {
  config = {
    navigationBarTitleText: '按钮'
  }
  components = {}

  data = {}

  computed = {}

  methods = {}

  events = {}

  onLoad() {}
}
</script>
```

#### Icon 图标

- **概述**

&emsp;&emsp;提供了一套常用的图标集合

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Icon from 'kai-ui/Icon'
```

&emsp;&emsp;组件添加
```javascript
components = {
  icon: Icon
}
```

&emsp;&emsp;template添加
```template
<template>
  <icon :type="item" :event="index % 2 ? 'icon-tap' : ''"></icon>
</template>
```

&emsp;&emsp;方法触法调用
```javascript
  events = {
    'icon-tap': function () {
      console.log('点击事件回调')
    }
  }
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
|  type   | `String` | `true`  | '' | 图标的kai-iconfont(例如: 类名为kai-icon-plus type就为plus) |
| event | `String` | `true`  | '' |  事件回调   |

&emsp;&emsp;案例
```wpy
  <style lang="less" src="../less/font.less"></style>
  <style lang="less">
  .icon-container{
    background-color:#fff;
  }
  .icon-block{
    background-color:#fff;
    padding: 20px 0;
    .kai-iconfont {
      font-size:30px;
      margin-bottom:20px;
      color:#999;
    }
    .icon-title{
      font-size:12px;
      color:#999;
      text-align: center;
    }
    > view{
      width:100%;
      display:flex;
      align-items:center;
      justify-content: center;
    }
  }
  </style>
  <template>
    <view class="kai-content icon-container layout">
      <repeat for="{{list}}" index="index" item="item" key="key">
        <view class="col col-6 icon-block" >
          <view>
            <icon :type="item" :event="index % 2 ? 'icon-tap' : ''"></icon>
          </view>
          <view>
            <text class="icon-title">{{item}}</text>
          </view>
        </view>
      </repeat>
    </view>
  </template>

  <script>
  import wepy from 'wepy'
  import Icon from 'kai-ui/Icon'

  export default class Icon extends wepy.page {
    config = {
      navigationBarTitleText: '字体库'
    }
    components = {
      icon: icon
    }

    data = {
      list: [
        'error', 'tick', 'broadcast', 'back', 'calendar', 'camera', 'cart', 'close', 'comment', 'success', 'date', 'display', 'down', 'edit', 'flag', 'forward', 'gear', 'hide', 'home', 'image', 'info', 'laud', 'left', 'like', 'location', 'lock', 'mail', 'map', 'menu', 'minus', 'mobile', 'more', 'my', 'paper', 'pencil', 'phone', 'plus', 'question', 'recovery', 'right', 'search', 'share', 'star', 'top', 'trash', 'unlock', 'video', 'closebg'
      ]
    }

    computed = {}

    methods = {}

    events = {
      'icon-tap': function () {
        console.log(111)
      }
    }

    onLoad() {}
  }
  </script>
```

#### Loadmore 加载

- **概述**

&emsp;&emsp;加载更多

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Loadmore from 'kai-ui/Loadmore'
```

&emsp;&emsp;组件添加
```javascript
components = {
  loadmore: Loadmore
}
```

&emsp;&emsp;template添加
```template
<template>
  <loadmore :more.sync="more"></loadmore>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
|  more  | `Object` | `true`   | {} | 加载更多数据配置，包括支持类型、加载中文案、加载完成文案 |

&emsp;&emsp;more配置：

| 参数 | 类型 | 可选值 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| type | `Boolean` | true/false | `false`  |  true: 加载中, false: 加载完成 |
| loading | `String` | - | `加载中`  |  加载中文案   |
| loaded | `String` | - | `加载完成`  |  加载完成文案   |

&emsp;&emsp;案例
```wpy
  <style lang="less">
  .title {
    font-size: 12px;
  }
  </style>
  <template>
    <view class="kai-content">
      <view class="title padding-10">加载中</view>
      <loadmore1 :more.sync="more1"></loadmore1>
      <view class="title padding-10">加载完成</view>
      <loadmore2 :more.sync="more2"></loadmore2>
    </view>
  </template>

  <script>
  import wepy from 'wepy'
  import Loadmore from 'kai-ui/Loadmore'

  export default class Loadmore extends wepy.page {
    config = {
      navigationBarTitleText: 'loadmore'
    }

    components = {
      loadmore1: loadmore,
      loadmore2: loadmore
    }

    data = {
      more1: {
        type: true,
        loading: 'loading',
        loaded: '加载完成'
      },
      more2: {
        type: false,
        loading: '加载中',
        loaded: '我们是有底线的'
      }
    }

    computed = {}

    methods = {
    }

    events = {
    }

    onLoad() {
    }
  }
  </script>
```

#### Loading 加载中

- **概述**

&emsp;&emsp;适用于加载中图案

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Loading from 'kai-ui/Loading'
```

&emsp;&emsp;组件添加
```javascript
components = {
  loading: Loading
}
```

&emsp;&emsp;template添加
```template
<template>
  <loading type="circle" size="big"/>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 可选值 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| type | `String` | ` circle ` ` circular ` | `circle`  |  ` circle ` : 圆形图案, ` circular `: 菊花图案 |
| size | `String` | ` small ` ` big ` | `small`  |  加载图案尺寸   |
| class | `String` | - | -  |  自定义样式   |

&emsp;&emsp;案例
```wpy
  <style lang="less"></style>
  <template>
    <view class="kai-content">
      <view class="padding-10">
        <loading type="circle" size="big"/>
      </view>
    </view>
  </template>

  <script>
  import wepy from 'wepy'
  import Loading from 'kai-ui/Loading'

  export default class Loading extends wepy.page {
    config = {
      navigationBarTitleText: 'Loading 加载中'
    }

    components = {
      Loading: Loading
    }
  }
  </script>
```

#### Tag 标记

- **概述**

&emsp;&emsp;页面标签

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Tag from 'kai-ui/Tag'
```

&emsp;&emsp;组件添加
```javascript
components = {
  tag: Tag
}
```

&emsp;&emsp;template添加
```template
<template>
  <view class="kai-content">
    <view class="panel padding-10">
      <view class="list list-last-child">
        <repeat for="{{types}}" index="i" item="item">
          <tags :type="item.type">{{item.text}}</tags>
        </repeat>
      </view>
    </view>
  </view>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 可选项 | 默认 | 描述 |
| --- | --- | --- | --- | --- | --- |
| type | `String` | `true` | ''、plain、primary、danger、warn、disabled | '' | 标签类型 |

&emsp;&emsp;案例
```wpy
<style lang="less">
.tag{
  margin-right:10px;
}
</style>
<template>
  <view class="kai-content">
    <view class="panel padding-10">
      <view class="list list-last-child">
        <repeat for="{{types}}" index="i" item="item">
          <tags :type="item.type">{{item.text}}</tags>
        </repeat>
      </view>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'

import Tag from 'kai-ui/Tag'
export default class Tag extends wepy.page {
  config = {
    navigationBarTitleText: 'Tag 标记'
  }
  components = {
    tags: Tags
  }

  data = {
    types: [
      {
        type: 'plain',
        text: '默认'
      },
      {
        type: 'primary',
        text: '返现'
      },
      {
        type: 'danger',
        text: '会员折扣'
      },
      {
        type: 'warn',
        text: '返现'
      },
      {
        type: 'disabled',
        text: '返现不可用'
      }
    ]
  }

  computed = {}

  methods = {}

  events = {}

  onLoad() {}
}
</script>
```

#### Helper 基础样式

- **概述**

&emsp;&emsp;帮助

- **使用指南**

&emsp;&emsp;app页面中引入全局样式
```javascript
@import '../node_modules/kai-ui/src/less/index';
```

&emsp;&emsp;案例
```wpy
<style lang="less">
  .helper-container{
    background-color:#fff;
  }
  .font-content{
    padding:5px 0;
    border-bottom:1rpx solid #f5f5f5;
  }
</style>
<template>
  <view class="kai-content helper-container padding-10">
    <view class="panel">
       <view class="text-pull-left font-content">
        <text class="font-12 color-gray">text-pull-left：靠左对齐</text>
      </view>
      <view class="text-align-center font-content">
        <text class="font-12 color-gray">text-align-center：居中对齐</text>
      </view>
      <view class="text-pull-right font-content">
        <text class="font-12 color-gray">text-pull-right：靠右对齐</text>
      </view>
      <view class="font-content">
        <text class="font-12 color-gray text-deleted">text-deleted：被删除的效果</text>
      </view>
      <view class="text-pull-left font-content">
        <text class="font-14 color-title font-bold">font-14 font-bold：字号14 加粗</text>
      </view>
      <view class="text-pull-left font-content">
        <text class="font-16 color-title font-bold">font-16 font-bold：字号16 加粗</text>
      </view>
      <view class="text-pull-left font-content">
        <view>
          <text class="font-14 color-red">color-red</text>
        </view>
        <view>
          <text class="font-14 color-gray">color-gray</text>
        </view>
        <view>
          <text class="font-14 color-blue">color-blue</text>
        </view>
        <view>
          <text class="font-14 color-success">color-success</text>
        </view>
      </view>
      <view class="font-content">
        <text class="font-14 color-title ellipsis-l2">我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符</text>
      </view>
      <view class="font-content">
        <text class="font-14 color-title ellipsis-l1">我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符</text>
      </view>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'

export default class Helper extends wepy.page {
  config = {
    navigationBarTitleText: 'Helper 基础样式'
  }
  components = {}

  data = {}

  computed = {}

  methods = {}

  events = {}

  onLoad() {}
}
</script>
```


### 导航组件

#### Popup 弹出层

- **概述**

&emsp;&emsp;适用于页面弹出展示

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Popup from 'kai-ui/Popup'
```

&emsp;&emsp;组件添加
```javascript
components = {
  popup: Popup
}
```

&emsp;&emsp;template添加
```template
<template>
  <view class="kai-content">
    <view class="padding-10">
      <button class="btn"  bindtap="popPosition(0)">弹出popup</button>
      <button class="btn btn-success" catchtap="popPosition(1)">从顶部弹出popup</button>
      <button class="btn btn-kai" catchtap="popPosition(3)">从底部弹出popup</button>
      <button class="btn btn-warn btn-empty" bindtap="popPosition(4)">从左边弹出popup</button>
      <button class="btn btn-danger btn-empty" catchtap="popPosition(2)">从右边弹出popup</button>
    </view>
    <repeat for="{{popData}}" index="i" item="item" key="row-{{index}}">
      <popup :show.sync="item.showPopup" :position.sync="item.position" :id.sync="i" :maskHide.sync="item.maskHide">
        <block slot="popContainer">
          <view class="pop-inner {{'pop-'+item.position}}">
            <view class="pop-text">忆江南</view>
            <view class="pop-text">江南好</view>
            <view class="pop-text">风景旧曾谙</view>
            <view class="pop-text">日出江花红胜火</view>
            <view class="pop-text">春来江水绿如蓝</view>
            <view class="pop-text">能不忆江南</view>
            <button class="btn btn-kai margin-top20" catchtap="close({{i}})">
              关闭
            </button>
          </view>
        </block>
      </popup>
    </repeat>
  </view>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
|  id   | `String` | `true` | 0 | 弹出层id |
| show | `Boolean` | `true`  | false |  是否展示弹窗  |
| position | `String` | `true`  | bottom | 弹出位置   |
| maskHide | `Boolean` | `true`  |  true | 点击mask是否关闭popup |

&emsp;&emsp;事件

| 事件名称 | 参数 | 描述 |
| --- | --- | --- |
|  pop | i: 索引i; op:是否关闭 | 点击关闭事件回调 |

&emsp;&emsp;案例
```wpy
<style lang="less">
  .pop-inner {
    padding: 40px 20px;
    box-sizing: border-box;
  }
  .pop-text {
    font-size: 16px;
    text-align: center;
    line-height: 28px;
  }
  .pop-center {
    width: 240px;
    height: 300px;
  }
  .pop-right {
    width: 200px;
  }
  .pop-left {
    width: 200px;
  }
  .margin-top20 {
    margin-top: 20px;
  }
</style>

<template>
  <view class="kai-content">
    <view class="padding-10">
      <button class="btn"  bindtap="popPosition(0)">弹出popup</button>
      <button class="btn btn-success" catchtap="popPosition(1)">从顶部弹出popup</button>
      <button class="btn btn-kai" catchtap="popPosition(3)">从底部弹出popup</button>
      <button class="btn btn-warn btn-empty" bindtap="popPosition(4)">从左边弹出popup</button>
      <button class="btn btn-danger btn-empty" catchtap="popPosition(2)">从右边弹出popup</button>
    </view>
    <repeat for="{{popData}}" index="i" item="item" key="row-{{index}}">
      <popup :show.sync="item.showPopup" :position.sync="item.position" :id.sync="i" :maskHide.sync="item.maskHide">
        <block slot="popContainer">
          <view class="pop-inner {{'pop-'+item.position}}">
            <view class="pop-text">忆江南</view>
            <view class="pop-text">江南好</view>
            <view class="pop-text">风景旧曾谙</view>
            <view class="pop-text">日出江花红胜火</view>
            <view class="pop-text">春来江水绿如蓝</view>
            <view class="pop-text">能不忆江南</view>
            <button class="btn btn-kai margin-top20" catchtap="close({{i}})">
              关闭
            </button>
          </view>
        </block>
      </popup>
    </repeat>
  </view>
</template>

<script>
import wepy from 'wepy'
import Popup from 'kai-ui/Popup'

export default class Popup extends wepy.page {
  config = {
    navigationBarTitleText: 'Popup 弹出层'
  }
  components = {
    popup: popup
  }

  data = {
    popData: [
      {
        showPopup: true,
        position: 'center',
        maskHide: false
      },
      {
        showPopup: false,
        position: 'top',
        maskHide: false
      },
      {
        showPopup: false,
        position: 'right'
      },
      {
        showPopup: false,
        position: 'bottom'
      },
      {
        showPopup: false,
        position: 'left'
      }
    ]
  }

  computed = {}

  methods = {
    popPosition (i) {
      this.popData.map(function (r, i) {
        r.showPopup = false
      })
      this.popData[i].showPopup = true
    },
    close (i) {
      this.popData[i].showPopup = false
      console.log(this.popData[i].showPopup)
    }
  }

  events = {
    pop: function (i, op) {
      this.popData[i].showPopup = op ? false : !this.popData[i].showPopup
    }
  }

  onLoad() {}
}
</script>
```

#### NoticeBar 通知

- **概述**

&emsp;&emsp;适用于通知类信息展示

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import NoticeBar from 'kai-ui/NoticeBar'
```

&emsp;&emsp;组件添加
```javascript
components = {
  noticeBar: NoticeBar
}
```

&emsp;&emsp;template添加
```template
<template>
  <noticeBar :text="longText" componentId="noticebar" ></noticeBar>
</template>
```

&emsp;&emsp;方法触法调用
```javascript
this.$invoke('noticeBar', 'initNoticeBarScroll')
也可以延迟调用
setTimeout(() => {
  this.$invoke('noticeBar', 'initNoticeBarScroll')
}, 3000)
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 描述 |
| --- | --- | --- | --- |
| text | `String` | `true` | 需要通知的信息（当宽度超过通知栏宽度时候会自动滚动） |
| componentId | `String` | `false`  | 组件Id |
| icon | `Boolean` | `true`  | 是否前面带图标 |

&emsp;&emsp;案例
```wpy
<template>
  <noticeBar :text="longText" componentId="noticebar" ></noticeBar>
</template>
<script>
import NoticeBar from 'kai-ui/NoticeBar'
export default class Index extends wepy.page {
  components = {
    noticeBar: NoticeBar
  }
  data = {
    longText: '近日，俄空军苏-34战斗轰炸机部队在里海地区举行了反舰实弹攻击演练，其中罕见使用了Kh-31AD超音速反舰导弹，明显是针对先前美海军在环太军演中的反舰演习，本图集就此为您简析',
    icon: true,
    shotText: '美F35培训中心遭沙尘暴袭击'
  }
  onLoad () {
    this.$invoke('noticeBar', 'initNoticeBarScroll')
  }
}
</script>
```

#### Tab 标签

- **概述**

&emsp;&emsp;适用于分类信息展示

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Tab from 'kai-ui/Tab'
```

&emsp;&emsp;组件添加
```javascript
components = {
  tab: Tab
}
```

&emsp;&emsp;template添加
```template
<template>
  <tab @bindChange.user="change"/>
</template>
```

&emsp;&emsp;方法触法调用
```javascript
this.$invoke('tab', 'doInitTabData', this.tabData)
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 描述 |
| --- | --- | --- | --- |
| bindChange | `Function` | `false`  | 单选框回调方法 |

&emsp;&emsp;tabData配置:

| 参数 | 类型 | 异步 | 可选项 | 默认值 | 描述 |
| --- | --- | --- | --- | --- | --- |
| class | `String` | `none` | - | - | tab自定义样式 |
| selectedId | `Number String` | `none` | - | ` ` | tab选择的item |
| scroll | `Boolean` | `none` | `true、false` | `false` | 是否要求支持滚动 |
| list | `Array` | `none`   | - | `[]` | tab显示的数据 |

&emsp;&emsp;list配置:

| 参数 | 类型 | 异步 | 可选项 | 默认值 | 描述 |
| --- | --- | --- | --- | ---  | --- |
| id | `Number String` | `none`   | - | - | tab每个item的id |
| title | `String` | `none`   | - | ` ` | tab每个item显示的字段 |

&emsp;&emsp;案例
```wpy
<template>
  <tab-scroll @bindChange.user="change"/>
</template>
<script>
import Tab from 'kai-ui/Tab'
export default class Index extends wepy.page {
  components = {
    'tab-scroll': Tab
  }
  data = {
    tab2: {
      list: [{id: 1, title: '标签1'}, {id: 2, title: '标签2'}, {id: 3, title: '标签3'}, {id: 4, title: '标签4'}, {id: 5, title: '标签5'}, {id: 6, title: '标签6'}, {id: 7, title: '标签7'}, {id: 8, title: '标签8'}],
      scroll: true,
      selectedId: 3,
      class: 'tab-success'
    }
  }
  methods = {
    change (res) {
      this.tab2.selectedId = res
      this.$apply()
    }
  }
  onLoad () {
    const {tab2} = this
    this.$invoke('tab-scroll', 'doInitTabData', tab2)
  }
}
</script>
```

#### Step 步骤条

- **概述**

&emsp;&emsp;适用于分步展示

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Step from 'kai-ui/Step'
```

&emsp;&emsp;组件添加
```javascript
components = {
  step: Step
}
```

&emsp;&emsp;template添加
```template
<template>
  <step :stepData.sync="stepData"/>
</template>
```

&emsp;&emsp;stepData参数配置:

| 参数 | 类型 | 是否必传 |  可选项 |默认值 | 描述 |
| --- | ----- | ----- | --- | --- | --- |
| steps | `Array` | 是  | - | - | 步骤内容列表 |
| current | `Number` | 否 | - | `0` | 当前步骤索引 |
| direction | `String` | 否 | `vertical`,`horizontal` | `vertical` | 步骤条方向 |

&emsp;&emsp;steps数组中对象的参数配置:

| 参数 | 类型 | 是否必传 |  可选项 |默认值 | 描述 |
| --- | ----- | ----- | --- | --- | --- |
| title | `String` | 是  | - | - | 标题 |
| content | `String` | 否 | - | - | 内容 |
| iconClass | `String` | 否 | - | - | 自定义icon类名 |

&emsp;&emsp;案例
```wpy
<template>
  <view class="padding-10">
    <view class="padding-10 font-12">竖向步骤条：</view>
    <vstep :stepData.sync="stepData1"/>
  </view>
  <view class="padding-10">
    <view class="padding-10 font-12">横向步骤条：</view>
    <hstep :stepData.sync="stepData2"/>
  </view>
  <view class="padding-10">
    <view class="padding-10 font-12">自定义icon：</view>
    <step :stepData.sync="stepData3"/>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import Step from 'kai-ui/Step'

  export default class StepPage extends wepy.page {
    data = {
      stepData1: {},
      stepData2: {},
      stepData3: {}
    }
    components = {
      vstep: Step,
      hstep: Step,
      step: Step
    }
    onLoad () {
      const steps = [
        {title: '已做完的', content: '2016-07-08'},
        {title: '正在做的', content: '2016-17-08'},
        {title: '即将要做的', content: '这是内容'},
        {title: '即将要做的', content: '2016-17-08'}
      ]
      this.stepData1 = {
        steps: steps,
        current: 1
      }
      this.stepData2 = {
        steps: steps,
        current: 1,
        direction: 'horizontal'
      }
      const steps3 = [
        {title: '已做完的', content: '2016-07-08', iconClass: 'step-icon-bre'},
        {title: '正在做的', content: '2016-17-08', iconClass: 'step-icon-train'},
        {title: '即将要做的', content: '2016-17-08', iconClass: 'step-icon-view'}
      ]
      this.stepData3 = {
        steps: steps3,
        current: 1,
        direction: 'horizontal'
      }
    }
  }
</script>

<style>
  /*以下是自定义icon样式*/
  @font-face {
    font-family: "step-iconfont";  /* project id 804062 */
    src: url('//at.alicdn.com/t/font_804062_pvg9hzszcd.eot');
    src: url('//at.alicdn.com/t/font_804062_pvg9hzszcd.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_804062_pvg9hzszcd.woff') format('woff'),
    url('//at.alicdn.com/t/font_804062_pvg9hzszcd.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_804062_pvg9hzszcd.svg#iconfont') format('svg');
  }
  .step-icon-bre, .step-icon-train, .step-icon-view {
    font-family: "step-iconfont" !important;
    font-size: 12px;
  }
  .step-icon-bre:before {content: "\e6e9";}
  .step-icon-train:before {content: "\e658";}
  .step-icon-view:before {content: "\e645";}
</style>
```

### 操作提示组件

#### Actionsheet 操作盘

- **概述**

&emsp;&emsp;操作盘

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import ActionSheet from 'kai-ui/ActionSheet'
```

&emsp;&emsp;组件添加
```javascript
components = {
  actionsheet: ActionSheet
}
```

&emsp;&emsp;template添加
```template
<template>
  <view class="kai-content">
    <import src="../wxParse/wxParse.wxml"/>
    <view class="padding-10">
      <!-- <button class="btn btn-success" catchtap="showActionSheet(0)">从顶部弹出popup</button> -->
      <button class="btn btn-kai" catchtap="showActionSheet(1)">从底部弹出ActionSheet</button>
    </view>
    <repeat for="{{asData}}" index="i" item="item" key="row-{{index}}">
      <actionsheet :asData.sync="item"></actionsheet>
      <!-- <template is="wxParse" data="{{wxParseData: article.nodes}}"/> -->
      <!-- <template is="wxParse" data="{{wxParseData: article.nodes}}"/> -->
    </repeat>
  </view>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
|  asData | `Object` | `true` | {} | 操作盘json数据配置 |

&emsp;&emsp;asData配置：

| 参数 | 类型 | 默认 | 描述 |
| --- | --- | --- | --- |
| class | `String` | ''  |  类名   |
| value | `String` | ''  |  值   |
| event | `String` | `action-sheet`  |  点击事件  |

&emsp;&emsp;案例
```wpy
<style lang="less">
.list {
  color: #808080;
}
.bold {
  font-weight: bold;
}
</style>

<template>
  <view class="kai-content">
    <import src="../wxParse/wxParse.wxml"/>
    <view class="padding-10">
      <!-- <button class="btn btn-success" catchtap="showActionSheet(0)">从顶部弹出popup</button> -->
      <button class="btn btn-kai" catchtap="showActionSheet(1)">从底部弹出ActionSheet</button>
    </view>
    <repeat for="{{asData}}" index="i" item="item" key="row-{{index}}">
      <actionsheet :asData.sync="item"></actionsheet>
      <!-- <template is="wxParse" data="{{wxParseData: article.nodes}}"/> -->
      <!-- <template is="wxParse" data="{{wxParseData: article.nodes}}"/> -->
    </repeat>
  </view>
</template>

<script>
import wepy from 'wepy'
import actionsheet from 'kai-ui/ActionSheet'

export default class ActionSheet extends wepy.page {
  config = {
    navigationBarTitleText: 'Actionsheet 操作盘'
  }

  components = {
    actionsheet: actionsheet
  }

  data = {
    asData: [
      {
        itemList: [{
          class: 'list bold',
          value: '江南忆',
          event: '',
          slotid: 'slotid0'
          // ,slot: '<view class="kai-iconfont kai-icon-success">alot1</view><view class="kai-iconfont kai-icon-delete">alot11</view>'
        },
        {
          class: 'list',
          value: '其次忆吴宫',
          event: '',
          slotid: 'slotid1'
          // ,slot: '<view class="kai-iconfont kai-icon-minus">slot2</view><view class="kai-iconfont kai-icon-plus">alot21</view>'
        },
        {
          class: 'list',
          value: '吴酒一杯春竹叶',
          event: ''
        },
        {
          class: 'list',
          value: '吴娃双舞醉芙蓉',
          event: ''
        },
        {
          class: 'list',
          value: '早晚复相逢',
          event: ''
        }],
        top: true,
        index: 0,
        show: false
      },
      {
        itemList: [{
          class: 'bold list1',
          value: '自定义',
          event: ''
        },
        {
          value: '拍摄',
          event: ''
        },
        {
          value: '从手机相册选择',
          event: ''
        }],
        index: 1,
        show: false
      }
    ]
  }

  computed = {}

  methods = {
    showActionSheet (i) {
      this.asData.map((r, i) => {
        r.show = false
      })
      this.asData[i].show = true
    }
  }

  hideActionsheet (i) {
    this.asData[i].show = false
  }

  events = {
    'action-sheet': function (i, index, close) {
      console.log(i, index, close)
      if (close === 'true') {
        console.log('您选择了取消')
      } else {
        console.log(i, index)
      }
      this.hideActionsheet(i)
    }
  }

  onLoad() {
    // wxParse.wxParse('article', 'html', '<view class="haha">slot1html</view>', this, 5)
  }
}
</script>
```

#### Toptips 顶部提示

- **概述**

&emsp;&emsp;适用于顶部弹出提示消息

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Toptips from 'kai-ui/Toptips'
```

&emsp;&emsp;组件添加
```javascript
components = {
  toptips: Toptips
}
```

&emsp;&emsp;template添加
```template
<template>
  <toptips />
</template>
```

&emsp;&emsp;js调用`show`方法弹出提示
```javascript
this.$invoke('toptips', 'show', options)
```

&emsp;&emsp;options配置:

| 参数      | 类型 | 是否必传 | 默认值 | 描述                      |
| -------- | ------- | ---- | ----- | ------------------------ |
| content  | `String`  | 是  | -  | 提示内容 |
| duration | `Number` | 否   | 3000 | 提示持续时间，单位毫秒 |
| afterClose | `String` | 否   | - | 回调函数名 |
| className | `String` | 否  | - | 自定义class |

&emsp;&emsp;案例
```wpy
<template>
  <toptips />
  <view class="padding-10">
    <button @tap="showSuccess" class="btn btn-kai" style="margin-top:100px">点击弹出toptips</button>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import Toptips from 'kai-ui/Toptips'
  export default class ToptipsPage extends wepy.page {
    data = {}
    components = {
      toptips: Toptips
    }
    methods = {
      showSuccess () {
        const options = {
          content: '请输入正确的手机号',
          duration: 2000,
          afterClose: 'afterClose',
          className: 'mytest'
        }
        this.$invoke('toptips', 'show', options)
      }
    }
    events = {
      afterClose () {
        console.log('这是提示关闭后的回调函数')
      }
    }
  }
</script>

<style>
.mytest .toptips {
  background-color: #ff4400;
}
</style>
```

#### Dialog 弹窗

- **概述**

&emsp;&emsp;适用于弹出层

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Dialog from 'kai-ui/Dialog'
```

&emsp;&emsp;组件添加
```javascript
components = {
  dialog: Dialog
}
```

&emsp;&emsp;template添加
```template
<template>
  <dialog />
</template>
```

&emsp;&emsp;js调用
```javascript
this.$invoke('dialog', 'show', options).then((value) => {
  console.log(value) // 返回按钮的索引
}, () => {
  console.log('reject')
})
```

&emsp;&emsp;options配置:

| 参数      | 类型 | 异步 | 可选项 | 默认值 | 描述                      |
| -------- | ----- | ----- | ------- | -------  | ---------------------------- |
| title   | `String` | `none`   | - | `标题` | 弹出层标题 |
| content   | `String` | `none`   | - | `内容` | 弹出层内容 |
| showVertical   | `Boolean` | `none`   | `true、false` | `false` | 是否纵向显示按钮 |
| type   | `String` | `none`   | `mutil base alert` | `base` | 按钮类型, mutil支持自定义 |
| buttons   | `Array` | `none`   | - | - | 弹出层按钮 |

&emsp;&emsp;buttons配置:

| 参数      | 类型 | 异步 | 可选项 | 默认值 | 描述                      |
| -------- | ----- | ----- | ------- | -------  | ---------------------------- |
| text   | `String` | `none`   | - | - | 按钮内容 |
| color   | `String` | `none`   | - | - | 按钮字体颜色 |
| sync   | `Boolean` | `true`   | `true、false` | `false` | 是否是异步按钮 |

&emsp;&emsp;案例
```wpy
<template>
  <dialog />
  <view class="padding-10">
    <button @tap="showSuccess" class="btn btn-kai">纵向对话框</button>
  </view>
  <view class="padding-10">
    <button @tap="showkai" class="btn btn-kai">横向对话框</button>
  </view>
</template>
<script>
import Dialog from 'kai-ui/Radio'
export default class Index extends wepy.page {
  components = {
    dialog: Dialog
  }

  methods = {
    showSuccess () {
      const options = {
        title: '删除订单提示',
        content: '确定要删除该订单吗？',
        type: 'muti',
        showVertical: true,
        buttons: [{
          text: '取消'
        }, {
          text: '确定',
          color: '#C59E6C'
        }]
      }
      this.$invoke('dialog', 'show', options).then((value) => {
        console.log(value) // 0: 取消，1：确认
      }, () => {
        console.log('reject')
      })
    },
    showkai () {
      const options = {
        title: '支付选择',
        content: '请选择一种支付方式',
        type: 'muti',
        showVertical: false,
        buttons: [{
          text: '微信支付',
          color: '#0EB00B'
        }, {
          text: '支付宝',
          color: '#48A9E9'
        }, {
          text: '京东',
          color: '#E45143',
          sync: true
        }]
      }
      this.$invoke('dialog', 'show', options).then((value) => {
        console.log(value) // 0: 微信支付，1：支付宝，2：京东
            if (value === 2) {
              setTimeout(() => {
                this.$invoke('dialog', 'reset') // 异步按钮重置
              }, 3000)
            }
      }, () => {
        console.log('reject')
      })
    }
  }
}
</script>
```

#### Toast 轻提示

- **概述**

&emsp;&emsp;适用于在页面上弹出提示消息

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Toast from 'kai-ui/Toast'
```

&emsp;&emsp;组件添加
```javascript
components = {
  toast: Toast
}
```

&emsp;&emsp;template添加
```template
<template>
  <toast />
</template>
```

&emsp;&emsp;js调用`show`方法弹出提示
```javascript
this.$invoke('toast', 'show', options)
```

&emsp;&emsp;options配置:

| 参数      | 类型 | 是否必传 | 可选项 |  默认值 | 描述                      |
| -------- | ------- | ----- | ----- | ----- | ------------------------ |
| content  | `String`  | 是  | -  | - |提示内容 |
| type | `String` | 否   | `success`,`error`,`warning`,`loading` | - | 消息类型 |
| duration | `Number` | 否  | | 3000 | 消息弹出持续时间，单位毫秒 |
| position  | `String`  | 否 | `top`,`middle`,`bottom` | `middle`  | 消息弹出位置 |
| afterClose | `String` | 否 | - | - | 回调函数名 |

&emsp;&emsp;案例
```wepy
<template>
  <toast />
  <view class="padding-10">
    <button @tap="showSuccess('loading', '加载中的提示')" class="btn btn-kai">加载中</button>
  </view>
  <view class="padding-10">
    <button @tap="showSuccess('success', '成功的提示')" class="btn btn-kai">成功</button>
  </view>
  <view class="padding-10">
    <button @tap="showSuccess('error', '失败的提示')" class="btn btn-kai">失败</button>
  </view>
  <view class="padding-10">
    <button @tap="showSuccess('warning', '警告的提示')" class="btn btn-kai">警告</button>
  </view>
  <view class="padding-10">
    <button @tap="showSuccess('', '纯文本的提示')" class="btn btn-kai">纯文本</button>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import Toast from 'kai-ui/Toast'

  export default class ToastPage extends wepy.page {
    config = {
      navigationBarTitleText: 'Toast 轻提示'
    }
    data = {}

    components = {
      toast: Toast
    }

    methods = {
      showSuccess (type, msg) {
        const options = {
          content: msg,
          position: 'middle',
          duration: 2000,
          type: type,
          afterClose: 'afterClose'
        }
        this.$invoke('toast', 'show', options)
      }
    }

    events = {
      afterClose () {
        console.log('这是提示关闭后的回调函数')
      }
    }
  }
</script>
```

#### Swipeout 滑动菜单

- **概述**

&emsp;&emsp;左滑主体内容显示操作项

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Swipeout from 'kai-ui/Swipeout'
```

&emsp;&emsp;组件添加
```javascript
components = {
  swipeout: Swipeout
}
```

&emsp;&emsp;template添加
```template
<template>
  <swipeout componentId="0">
    <view slot="content">
      <view class="text">
        忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
      </view>
    </view>
    <view slot="action">
      <view class="action-btn btn1">移入收藏夹</view>
      <view class="action-btn btn2">删除</view>
    </view>
  </swipeout>
</template>
```

&emsp;&emsp;配置:

| 参数      | 类型 | 是否必传 | 可选项 |  默认值 | 描述                      |
| -------- | ------- | ----- | ----- | ----- | ------------------------ |
| componentId| `String`| 是  | -  | - | 组件id，与该页面中其他组件id不重复 |
| content    | `slot`  | 是  | -  | - | 主体内容 |
| action     | `slot`  | 是  | -  | - | 操作项 |

&emsp;&emsp;案例
```wepy
<template>
  <view class="kai-content">
    <view class="padding-10 font-12">
      <view class="padding-10">基础用法：</view>
      <swipeout1 componentId="0">
        <view slot="content">
          <view class="text">
            <view>向左滑动试试：）</view>
            忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
            忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
            忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          </view>
        </view>
        <view slot="action">
          <view class="action-btn btn1">移入收藏夹</view>
          <view class="action-btn btn2">删除</view>
        </view>
      </swipeout1>
      <view class="padding-10"></view>
      <swipeout2 componentId="1">
        <view slot="content">
          <view class="text">
            <view>向左滑动试试：）</view>
            忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          </view>
        </view>
        <view slot="action">
          <view class="action-btn btn0">找相似</view>
          <view class="action-btn btn1">移入收藏夹</view>
          <view class="action-btn btn2">删除</view>
        </view>
      </swipeout2>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Swipeout from 'kai-ui/Swipeout'

export default class SwipeoutPage extends wepy.page {
  components = {
    swipeout1: Swipeout,
    swipeout2: Swipeout
  }
}
</script>

<style lang="less">
  .text {
    padding: 10px;
  }
  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50px;
    padding: 0 5px;
    font-size: 14px;
    color: #fff;
  }
  .btn1 {
    background: #f40;
  }
  .btn2 {
    background: #ccc;
  }
  .btn0 {
    background: #f80;
  }
</style>
```


### 表单组件

#### Uploader 上传

- **概述**

&emsp;&emsp;适用于图片上传

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Uploader from 'kai-ui/Uploader'
```

&emsp;&emsp;组件添加
```javascript
components = {
  uploader: Uploader
}
```

&emsp;&emsp;template添加
```template
<template>
  <view class="kai-content">
    <panel>
      <view slot="title" class="title">上传凭证</view>
      <view class="panel-upload">
        <repeat for="{{imgList}}" index="index" item="item" key="row-{{index}}">
          <view class="img-list flex-list common-bg" style="width:{{imgWidth+'px'}};height:{{imgWidth+'px'}};background-image:url({{item.url}})"
                catchtap="previewImg({{imgList}}, {{item.url}})">
            <text class="kai-iconfont kai-icon-close delete-file" catchtap="removeImg({{index}})"></text>
          </view>
        </repeat>
        <uploader :imgWidth.sync="imgWidth" :total="imgTotal" region="ECN" :imgList.sync="imgList" :domain="domain" :uptokenURL="uptokenURL" :local="local"></uploader>
      </view>
    </panel>
  </view>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 描述 |
| --- | --- | --- | --- |
|  uptokenURL | `String` | `true`   | 上传图片token url |
| domain | `String` | `true`  |  上传域名 |
| imgList | `String` | `true`  |  上传图片列表 |
| imgWidth | `String` | `true`  |  图片宽度 |
| region | `String` | `true`  |   七牛上传区域  |
| total | `String` | `true`  |   可上传图片总数  |
| local | `Boolean` | `true`  |  是否只在本地上传，值为false时使用七牛服务器上传，此时需要配置uptokenURL、domain和region  |

&emsp;&emsp;案例
```wpy
<style lang="less" src="../less/font.less"></style>
<style lang="less">
  /*file*/
  .panel-upload{
    display: flex;
    flex-wrap: wrap;
    .img-list {
      width: 80px;
      height: 80px;
      display: inline-block;
      margin: 0 10px 10px 0;
      position: relative;
      .delete-file {
        position:absolute;
        top:-7px;
        right:-5px;
        z-index:99;
        background:#fff;
        border-radius:8px;
        font-size:16px;
        border:1px solid #fff;
        width:16px;
        height:16px;
      }
    }
    .flex-list:nth-child(4n) {
      margin-right: 0;
    }
  }
</style>
<template>
  <view class="kai-content">
    <panel>
      <view slot="title" class="title">上传凭证</view>
      <view class="panel-upload">
        <repeat for="{{imgList}}" index="index" item="item" key="row-{{index}}">
          <view class="img-list flex-list common-bg" style="width:{{imgWidth+'px'}};height:{{imgWidth+'px'}};background-image:url({{item.url}})"
                catchtap="previewImg({{imgList}}, {{item.url}})">
            <text class="kai-iconfont kai-icon-close delete-file" catchtap="removeImg({{index}})"></text>
          </view>
        </repeat>
        <uploader :imgWidth.sync="imgWidth" :total="imgTotal" region="ECN" :imgList.sync="imgList" :domain="domain" :uptokenURL="uptokenURL" :local="local"></uploader>
      </view>
    </panel>
  </view>
</template>

<script>
import wepy from 'wepy'
import uploader from 'kai-ui/Uploader'
import panel from 'kai-ui/Panel'

export default class Uploader extends wepy.page {

  config = {
    navigationBarTitleText: 'Uploader 上传'
  }

  components = {
    uploader: uploader,
    panel: panel
  }

  data = {
    imgTotal: 5,  // 可上传图片总数
    imgList: [],  // 图片上传列表
    imgWidth: 90,
    domain: '',
    uptokenURL: '',
    test: true
  }

  computed = {}

  methods = {
    // 图片预览
    previewImg (list, cur) {
      var that = this
      let urls = []
      for (let i = 0, len = list.length; i < len; i++) {
        urls.push(list[i].url)
      }
      wx.previewImage({
        current: cur, // 当前显示图片的http链接
        urls: urls, // 需要预览的图片http链接列表
        success: function (res) {
          that.$apply()
        },
        fail: function (res) {
          console.log(res)
        },
        complete: function (res) {
          console.log(res)
        }
      })
    },
    // 删除图片
    removeImg (idx) {
      this.imgList.splice(idx, 1)
      this.$apply()
    }
  }

  events = {
    // 上传图片成功回调
    'refresh-img-list': (data) => {
      this.imgList.push({url: data})
      this.$apply()
    }
  }

  onLoad() {
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        const windowWidth = ~~res.windowWidth
        console.log(windowWidth)
        that.imgWidth = (windowWidth - 20 - 30) / 4  // 两个外边距 和三个内边距
        that.$apply()
      }
    })
  }
}
</script>

```

#### Select 选择

- **概述**

&emsp;&emsp;适用于select勾选

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Select from 'kai-ui/Select'
```

&emsp;&emsp;组件添加
```javascript
components = {
  select: Select
}
```

&emsp;&emsp;template添加
```template
<template>
  <view class="kai-content">
    <view class="panel">
      <select :selectData.sync="selectData"/>
    </view>
    <view class="panel">
      <select1 :selectData.sync="selectData1"/>
    </view>
    <button class="btn btn-success" catchtap="changeSelect">切换icon位置</button>
  </view>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| selectData | `Object` | `true` | {} | 组件传入一个参数对象 |

&emsp;&emsp;selectData配置：

| 参数 | 类型 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| id | `String` | '' | 当前select的id  |
| list | `Array` | [] | 当前select可选列表 |
| selectIndex | `Number` | 0 |  当前select的默认勾选索引 |
| class | `String` | ''  | 当前select的class |
| event | `String` | ''  | 当前select的点击事件 |

&emsp;&emsp;事件：

| 事件名称 | 参数 | 描述 |
| --- | --- | --- |
| select-item | select的id、勾选的索引i | select的点击事件回调，默认select-item，优先event |

&emsp;&emsp;案例
```wpy
<style lang="less"></style>
<template>
  <view class="kai-content">
    <view class="panel">
      <select :selectData.sync="selectData"/>
    </view>
    <view class="panel">
      <select1 :selectData.sync="selectData1"/>
    </view>
    <button class="btn btn-success" catchtap="changeSelect">切换icon位置</button>
  </view>
</template>

<script>
import wepy from 'wepy'
import select from 'kai-ui/Select'

export default class SelectPage extends wepy.page {
  config = {
    navigationBarTitleText: 'Select 选择'
  }

  components = {
    select: select,
    select1: select
  }

  data = {
    selectData: {
      id: 0,
      list: [{name: '选择1'}, {name: '选择2'}, {name: '选择3'}],
      selectIndex: 0,
      class: 'select-success'
    },
    selectData1: {
      id: 1,
      list: [{name: '选择1'}, {name: '选择2'}],
      selectIndex: 1,
      class: 'select-danger',
      event: 'select-test'
    },
    position: ''
  }

  computed = {}

  methods = {
    changeSelect () {
      const {selectData1} = this
      this.position = this.position === 'left' ? 'right' : 'left'
      selectData1.class = 'select-danger select-' + this.position
    }
  }

  events = {
    'select-item': (data) => {
      console.log('item' + data)
    },
    'select-test': (data) => {
      console.log('test' + data)
    }
  }

  onLoad() {}
}
</script>
```

#### Radio 单选框

- **概述**

&emsp;&emsp;适用于单选框或者单选框按钮组

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import radio from 'kai-ui/Radio'
```

&emsp;&emsp;组件添加
```javascript
components = {
  'radio-circle': radio
}
```

&emsp;&emsp;template添加
```template
<template>
  <radio-circle :config.sync="config" @bindchange.user="radioChange">
    <block slot="radio-body">
      <repeat for="{{items}}" index="index" item="item" key="radio-{{index}}">
        <label class="radio-item">
          <view class="radio-card">{{item.value}}</view>
          <radio value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disabled}}"/>
        </label>
      </repeat>
    </block>
  </radio-circle>
</template>
```

&emsp;&emsp;参数格式
```data
data = {
  config: {
    className: 'sp-radio',
    position: 'left',
    circle: true,
    inline: false
  },
  items: [
    {id: '1001', value: '圆形单选框', checked: false, disabled: false},
    {id: '1002', value: '圆形单选框', checked: true, disabled: false}
  ]
}
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 描述                      |
| --- | --- | --- | --- |
| config    | `Object` | `true`   | 单选框组配置信息 |
| bindchange | `Function` | `false`  | 单选框回调方法    |

&emsp;&emsp;config配置:

| 参数 | 类型 | 异步 | 可选项 | 默认值 | 描述 |
| --- | --- | --- | --- | ---  | --- |
| className | `String` | `none` | - | - | 单选框组自定义样式 |
| position | `String` | `none` | `left、right` | `left` | 单选框出现的位置 |
| circle | `Boolean` | `none` | `true、false` | `true` | 单选框样式 |
| inline | `Boolean` | `none` | `true、false` | `false` | 单选框组是否显示在一行内 |

&emsp;&emsp;案例
```wpy
<template>
  <radio-circle :config.sync="config" @bindchange.user="radioChange">
    <block slot="radio-body">
      <repeat for="{{items}}" index="index" item="item" key="radio-{{index}}">
        <label class="radio-item">
          <view class="radio-card">{{item.value}}</view>
          <radio value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disabled}}"/>
        </label>
      </repeat>
    </block>
  </radio-circle>
</template>
<script>
import radio from 'kai-ui/Radio'
export default class Index extends wepy.page {
  components = {
    'radio-circle': radio
  }

  data = {
     checkboxConfig: {
      className: 'sp-radio',
      position: 'left',
      circle: true
    },
    items: [
          {id: '1001', value: '圆形单选框', checked: false, disabled: false},
          {id: '1002', value: '圆形单选框', checked: true, disabled: false}
      ]
  }

  methods = {
    radioChange (res) {
      console.log(res)
    }
  }
}
</script>
```

#### Checkbox 复选框

- **概述**

&emsp;&emsp;适用于复选框或者复选框按钮组

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import checkbox from 'kai-ui/Checkbox'
```

&emsp;&emsp;组件添加
```javascript
components = {
  'checkbox-circle': checkbox
}
```

&emsp;&emsp;template添加
```template
<template>
  <checkbox-circle :config.sync="checkboxConfig" @bindchange.user="checkboxChange">
    <view slot="check-body">
      <repeat for="{{items}}" index="index" item="item" key="checkbox-{{index}}">
        <label class="checkbox-item">
          <view class="check-card">{{item.value}}</view>
          <checkbox value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disabled}}"/>
        </label>
      </repeat>
    </view>
  </checkbox-circle>
</template>
```

&emsp;&emsp;参数格式
```data
data = {
  checkboxConfig: {
    className: 'sp-checkbox',
    position: 'left',
    circle: true,
    inline: false
  },
  items: [{id: '1000', value: '圆形复选框', checked: true, disabled: false}]
}
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 描述 |
| --- | --- | --- | --- |
| config    | `Object` | `true`   | 复选框组配置信息 |
| bindchange | `Function` | `false`  | 复选框回调方法    |

&emsp;&emsp;config配置:

| 参数 | 类型 | 异步 | 可选项 | 默认值 | 描述 |
| --- | --- | --- | --- | --- | --- |
| className | `String` | `none` | - | - | 复选框组自定义样式 |
| position | `String` | `none` | `left、right` | `left` | 复选框出现的位置 |
| circle | `Boolean` | `none` | `true、false` | `true` | 复选框样式 |
| inline | `Boolean` | `none` | `true、false` | `false` | 复选组是否显示在一行内 |

&emsp;&emsp;案例
```wpy
<template>
  <checkbox-circle :config.sync="checkboxConfig" @bindchange.user="checkboxChange">
    <view slot="check-body">
      <repeat for="{{items}}" index="index" item="item" key="checkbox-{{index}}">
        <label class="checkbox-item">
          <view class="check-card">{{item.value}}</view>
          <checkbox value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disabled}}"/>
        </label>
      </repeat>
    </view>
  </checkbox-circle>
</template>
<script>
import checkbox from 'kai-ui/Checkbox'
export default class Index extends wepy.page {
  components = {
    'checkbox-circle': checkbox
  }

  data = {
    checkboxConfig: {
      className: 'sp-checkbox',
      position: 'left',
      circle: true
    },
    items: [{id: '1000', value: '圆形复选框', checked: true}]
  }

  methods = {
    checkboxChange (res) {
      console.log(res)
      if (res.length) {
        this.items[0].checked = true
        this.items1[0].checked = true
      } else {
        this.items[0].checked = false
        this.items1[0].checked = false
      }
      this.$apply()
    }
  }
}
</script>
```

#### Switch 开关

- **概述**

&emsp;&emsp;开关组件

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Switch from 'kai-ui/Switch'
```

&emsp;&emsp;组件添加
```javascript
components = {
  switch: Switch
}
```

&emsp;&emsp;template添加
```template
<template>
  <switch
    :checked.sync="item1.checked"
    :disabled.sync="item1.disabled"
    :componentId.sync="item1.componentId"
    className="test-switch"
    :sync.sync="item1.sync"
    :loading.sync="item1.loading"
    @onChange.user="change"/>
    <switch-sync
      :checked.sync="item.checked"
      :disabled.sync="item.disabled"
      :type.sync="item.type"
      :componentId.sync="item.componentId"
      className="test-switch"
      @onChange.user="doChange"/>
</template>
```

&emsp;&emsp;参数格式
```data
data = {
  item1: {
    title: '普通样式',
    checked: false,
    disabled: false,
    componentId: 'switch1'
  },
  item: {
    title: '异步样式',
    checked: false,
    disabled: false,
    sync: true,
    loading: false,
    componentId: 'switch3'
  }
}
```

&emsp;&emsp;对应方法：

| 参数 | 类型 | 异步 | 描述 |
| --- | --- | --- | --- |
| onChange | `Function` | `false`  | 开关change回调方法 |

&emsp;&emsp;配置:

| 参数 | 类型 | 异步 | 可选项 | 默认值 | 描述 |
| --- | --- | --- | --- | ---  | --- |
| className | `String` | `true`   | - | - | 开关自定义样式 |
| checked | `Boolean` | `true`   | `true、false` | `false` | 开关是否开启 |
| disabled | `Boolean` | `true`   | `true、false` | `false` | 开关是否可操作 |
| type | `String` | `true`   | `success、kai、danger、warn` | `success` | 开关样式 |
| componentId | `String` | `true`   | - | - | 开关组件id（自定义） |
| sync | `Boolean` | `true`   | `true、false` | `false` | 是否异步 |
| loading | `Boolean` | `true`   | `true、false` | `false` | 是否显示loading图案 |

&emsp;&emsp;案例
```wpy
<template>
  <view class="kai-content">
    <repeat for="{{items}}" index="index" item="item" key="switch-{{index}}">
      <view class="padding-10 font-12">{{item.title}}</view>
      <view class="padding-10">
        <switch
          :checked.sync="item.checked"
          :disabled.sync="item.disabled"
          :size.sync="item.size"
          :componentId.sync="item.componentId"
          className="test-switch"
          :sync.sync="item.sync"
          :loading.sync="item.loading"
          @onChange.user="change"/>
      </view>
    </repeat>
    <view class="padding-10 font-12">其它样式</view>
    <view class="padding-10">
      <repeat for="{{items1}}" index="index" item="item" key="switch-{{index}}">
        <switch-type
          :checked.sync="item.checked"
          :disabled.sync="item.disabled"
          :size.sync="item.size"
          :type.sync="item.type"
          :componentId.sync="item.componentId"
          className="test-switch"
          @onChange.user="doChange"/>
      </repeat>
    </view>
  </view>
</template>
<script>
import Switch from 'kai-ui/Switch'
export default class Index extends wepy.page {
  components = {
    switch: Switch,
        'switch-type': Switch
  }

  data = {
    items: [
        {
          title: '普通样式',
          checked: false,
          disabled: false,
          componentId: 'switch1'
        },
        {
          title: '禁选样式',
          checked: true,
          disabled: true,
          componentId: 'switch2'
        },
        {
          title: '异步样式',
          checked: false,
          disabled: false,
          sync: true,
          loading: false,
          componentId: 'switch3'
        }
      ],
      items1: [
        {
          checked: true,
          disabled: false,
          type: 'success',
          componentId: 'switch4'
        },
        {
          checked: true,
          disabled: false,
          type: 'kai',
          componentId: 'switch5'
        },
        {
          checked: true,
          disabled: false,
          type: 'danger',
          componentId: 'switch6'
        },
        {
          checked: true,
          disabled: false,
          type: 'warn',
          componentId: 'switch7'
        }
      ]
  }

  methods = {
    change (res) {
        const {items} = this
        for (let i = 0; i < items.length; i++) {
          if (items[i].componentId === res.componentId) {
            if (res.sync) {
              this.items[i].loading = true
              setTimeout(() => {
                this.items[i].loading = false
                this.items[i].checked = res.checked
                this.$apply()
              }, 1000)
            } else {
              this.items[i].checked = res.checked
              this.$apply()
            }
          }
        }
        console.log(res)
      },
      doChange (res) {
        const {items1} = this
        for (let i = 0; i < items1.length; i++) {
          if (items1[i].componentId === res.componentId) {
            this.items1[i].checked = res.checked
            this.$apply()
          }
        }
      }
  }
}
</script>
```

#### Numberpicker 数字输入框

- **概述**

&emsp;&emsp;数字选择器，可通过加减按钮操作或者直接在输入框输入

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import NumberPicker from 'kai-ui/NumberPicker'
```

&emsp;&emsp;组件添加
```javascript
components = {
  numberpicker: NumberPicker
}
```

&emsp;&emsp;template添加
```template
<template>
  <numberpicker :num.sync="item"/>
</template>
```

&emsp;&emsp;options配置:

| 参数      | 类型 | 是否必传 |  默认值 | 描述                      |
| -------- | ------- | ---- | ----- | ------------------------ |
| num  | `Number`  | 是  | -  | 初始数值 |
| config | `Object` | 否 | - | 配置，如果是数组repeat则必传 |
| index | `Number` | 否  | - | 数值索引，如果是数组repeat则必传 |

&emsp;&emsp;config配置:

| 参数      | 类型 | 是否必传 |  默认值 | 描述                      |
| -------- | ------- | ---- | ----- | ------------------------ |
| step | `Number` | 否  | 1 | 加减步长 |
| max | `Number` | 否  | 999999999 | 最大值 |
| min | `Number` | 否  | 1 | 最小值 |
| size  | `String`  | 否  | `small`  | 样式尺寸（可选值：`small`,`large`） |
| callbackFn | `String` | 否  | - | 回调函数名，如果是数组repeat，需要手动处理回传结果 |

&emsp;&emsp;案例
```wepy
<template>
  <view class="kai-content">
    <view class="bg-white padding-10">
      <view class="font-12">默认小尺寸样式</view>
      <!-- 单个数值处理 -->
      <picker :num.sync="item"/>
    </view>
    <view class="bg-white padding-10">
      <view class="font-12">大尺寸样式</view>
      <!-- 数组处理 -->
      <repeat for="{{list.data}}" index="index" item="item">
        <numberpicker :num="item" :index="index" :config="list.config"/>
      </repeat>
    </view>
    <button @tap="save">保存</button>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import NumberPicker from 'kai-ui/NumberPicker'

  export default class NumberPickerPage extends wepy.page {
    data = {
      item: 1,
      list: {
        data: [5, 6, 7],
        config: {
          step: 1,
          min: 3,
          max: 10,
          size: 'large',
          callbackFn: 'listChange'
        }
      }
    }
    components = {
      picker: NumberPicker,
      numberpicker: NumberPicker
    }

    methods = {
      save () {
        console.log(this.item, this.list.data)
      }
    }

    events = {
      listChange (value, index) {
        this.list.data[index] = value
      }
    }
  }
</script>
```

#### Input 输入框



- **概述**

&emsp;&emsp;input 输入框

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Input from 'kai-ui/Input'
```

&emsp;&emsp;组件添加
```javascript
components = {
  'input-name': input
}
```

&emsp;&emsp;template添加
```template
<template>
    <input-name :config="name" @onInput.user="_handleInput" @onBlur.user="_handleBlur"></input-name>
</template>
```

&emsp;&emsp;options配置:

| 参数      | 类型 | 是否必传 | 可选项 | 默认值 | 描述                      |
| -------- | ------- | ---- | ---- | ----- | ------------------------ |
| value | `String` | 是  | - | - | 当前值 |
| label  | `String`  | 否  | - | -  | ` label ` 标签名 |
| placeholder | `String` | 否 | - | - | 输入提示 |
| focus | `Boolean` | 否  | ` true ` ` false ` | ` false ` | 是否自动获取焦点 |
| maxlength | `String` | 否  | - | ` 9999 ` | 最大长度 |
| type | `String` | 否  | ` textarea ` ` ` | ` ` | 是否是文本域 |
| error | `Boolean` | 否  | ` true ` ` false ` | ` false ` | 是否开启提示错误, 需要搭配 ` filter ` 使用 |
| clear | `Boolean` | 否  | ` true ` ` false ` | ` false ` | 是否显示清空按钮 |
| adjust | `Boolean` | 否  | ` true ` ` false ` | ` false ` | 键盘弹起时，是否自动上推页面 |
| componentId | `String` | 否  | - | - | 组件id（适用于数组类型） |
| inputType | `String` | 否  | ` text ` ` password ` ` number ` ` idcard ` ` digit ` | ` text ` | 输入框类型 |
| disabled | `Boolean` | 否  | ` true ` ` false ` | ` false ` | 输入框是否禁用 |
| filter | `Object` | 否  | - | - | 输错需要提示的正则(例: ` /^(\+?0?86?)?1[3456789]\d{9}$/ ` 手机号码正则) |

&emsp;&emsp;事件处理函数:

| 事件名称 | 参数  | 描述    |
| -------- | ------| ------- |
| onInput | value: 输入框返回值  | value值发生改变的时候触发的回调 |
| onBlur | value: 输入框返回值  | 输入框失去焦点的时候触发的回调 |

&emsp;&emsp;案例
```wepy
<style lang="less">
  .no-title__content {
    .field-wrapped {
      margin: 0;
    }
  }
  .wrap {
    input {
      border: 1px solid #ccc;
    }
  }
</style>
<template>
  <view class="kai-content">
    <view class="padding-10 font-12">基础用法</view>
    <view style="background-color: #fff;">
      <input-name :config="name" @onInput.user="_handleInput" @onBlur.user="_handleBlur"></input-name>
      <input-tel :config="tel"></input-tel>
      <input-password :config="pwd"></input-password>
      <input-address :config="address"></input-address>
      <input-disabled :config="disabled"></input-disabled>
    </view>
    <view class="padding-10 font-12">无边框用法</view>
    <view style="background-color: #fff;" class="no-title__content">
      <input-notitle :config="notitle"></input-notitle>
    </view>
    <view class="padding-10 font-12">带清除按钮</view>
    <view style="background-color: #fff;">
      <input-clear :config="clear"></input-clear>
    </view>
    <view class="padding-10 font-12">带正则匹配</view>
    <view style="background-color: #fff;">
      <input-filter :config="filter"></input-filter>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import input from 'kai-ui/Input'

  export default class Input extends wepy.page {
    config = {
      navigationBarTitleText: 'Input 输入框'
    }

    data = {
      name: {
        label: '收货人',
        value: '小明',
        placeholder: '名字'
      },
      disabled: {
        label: '用户信息',
        disabled: true,
        value: '该输入框已禁用',
        placeholder: '不可用输入框'
      },
      tel: {
        error: true,
        label: '联系电话',
        inputType: 'number',
        placeholder: '请输入手机号'
      },
      pwd: {
        label: '输入密码',
        inputType: 'password',
        placeholder: '请输入密码'
      },
      address: {
        label: '详细地址',
        type: 'textarea',
        maxlength: 20,
        placeholder: '请输入详细地址(最多20个字)'
      },
      clear: {
        label: '清除按钮',
        clear: true,
        adjust: true,
        value: '腹背受敌',
        placeholder: '带清除按钮'
      },
      notitle: {
        adjust: true,
        placeholder: '请输入收货人姓名',
        componentId: 'textarea:test'
      },
      filter: {
        adjust: true,
        label: '带正则',
        filter: /^(\+?0?86?)?1[3456789]\d{9}$/,
        placeholder: '手机号码正则'
      }
    }

    components = {
      'input-name': input,
      'input-disabled': input,
      'input-tel': input,
      'input-address': input,
      'input-notitle': input,
      'input-password': input,
      'input-clear': input,
      'input-filter': input
    }

    methods = {
      _handleInput (e) {
        console.log(e)
      },
      _handleBlur (e) {
        console.log(e)
      }
    }
  }
</script>


```

#### Slider 滑块

- **概述**

&emsp;&emsp;滑动选择器，单个滑块选择某个数值或者两个滑块确定数据范围

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Slider from 'kai-ui/Slider'
```

&emsp;&emsp;组件添加
```javascript
components = {
  slider: Slider
}
```

&emsp;&emsp;template添加
```template
<template>
    <slider :value.sync="value" max="100" min="0" type="double" componentId="0"/>
</template>
```

&emsp;&emsp;options配置:

| 参数      | 类型 | 是否必传 | 可选项 | 默认值 | 描述                      |
| -------- | ------- | ---- | ---- | ----- | ------------------------ |
| value | `Number`,`Array` | 是  | - | - | 初始值，单个滑块传入number型数值，两个滑块传入数组 |
| componentId | `String` | 是  | - | - | 组件id，与该页面中其他组件id不重复 |
| type | `String` | 否  | `single`,`double` | `single` | 一个或者两个滑块 |
| max | `Number` | 否  | - | 100 | 最大值 |
| min | `Number` | 否  | - | 0 | 最小值 |

&emsp;&emsp;案例
```wepy
<template>
  <view class="kai-content">
    <view class="padding-10">
      <view class="padding-10 font-12">基础用法:</view>
      <slider :value.sync="value" componentId="0"/>
      <view class="padding-10 font-12">自定义最大最小值:</view>
      <slider1 :value.sync="value1" max="10" min="5" componentId="1"/>
      <view class="padding-10 font-12">双滑块选择数据范围:</view>
      <slider2 :value.sync="value2" max="100" min="0" type="double" componentId="2"/>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Slider from 'kai-ui/Slider'

export default class RatePage extends wepy.page {
  data = {
    value: 50,
    value1: 8,
    value2: [10, 60]
  }
  components = {
    slider: Slider,
    slider1: Slider,
    slider2: Slider
  }
}
</script>
```

#### Rate 星级评分

- **概述**

&emsp;&emsp;星级评分

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import Rate from 'kai-ui/Rate'
```

&emsp;&emsp;组件添加
```javascript
components = {
  rate: Rate
}
```

&emsp;&emsp;template添加
```template
<template>
  <rate title="物流服务" :value.sync="value" :desc="desc"/>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 是否必传 | 可选项 | 默认 | 描述 |
| --- | --- | --- | --- | --- | --- | --- |
| title | `String` | 是 | - | - | 评分标题 |
| value | `Number` | 是 | 0，1，2，3，4，5 | - | 评分 |
| desc | `Array` | 否 | - | ['1星','2星','3星','4星','5星'] | 评分描述 |
| type | `String` | 否 | `vertical`,`horizontal` | `horizontal` | 布局 |

&emsp;&emsp;案例
```wpy
<template>
  <view class="kai-content">
    <view class="padding-10">
      <view class="font-12">基础用法:</view>
      <rate1 title="描述相符" :value.sync="value1"/>
    </view>
    <view class="padding-10">
      <view class="font-12">自定义评分描述:</view>
      <rate2 title="物流服务" :value.sync="value2" :desc="desc"/>
    </view>
    <view class="padding-10">
      <view class="font-12">竖向布局:</view>
      <rate3 title="这是一个比较长的标题信息" :value.sync="value3" type="vertical"/>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Rate from 'kai-ui/Rate'

export default class RatePage extends wepy.page {
  data = {
    value1: 4,
    value2: 1,
    value3: 2,
    desc: [
      '非常差',
      '差',
      '一般',
      '好',
      '非常好'
    ]
  }
  components = {
    rate1: Rate,
    rate2: Rate,
    rate3: Rate
  }
}
</script>
```

### 搜索组件

#### Searchbar 搜索框



- **概述**

&emsp;&emsp;搜索输入框

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import SearchBar from 'kai-ui/SearchBar'
```

&emsp;&emsp;组件添加
```javascript
components = {
  searchbar: SearchBar
}
```

&emsp;&emsp;template添加
```template
<template>
  <searchbar
    placeholder="文艺复古长裙"
    @bindsearch.user="searchEvent"
    @bindcancel.user="cancelEvent"
    />
</template>
```

&emsp;&emsp;options配置:

| 参数      | 类型 | 是否必传 |  默认值 | 描述                      |
| -------- | ------- | ---- | ----- | ------------------------ |
| placeholder | `String` | 否  | - | 搜索提示或默认搜索关键字 |
| maxlength | `Number` | 否  | 100 | 最大输入长度 |
| focus | `Boolean` | 否  | false | 是否自动获取焦点 |
| datasource | `String` | 否  | - | 模糊搜索的数据来源 |
| className | `String` | 否  | - | 自定义class |
| bindsearch | `Function` | 否  | - | 搜索事件回调 |
| bindcancel | `Function` | 否  | - | 取消事件回调 |

&emsp;&emsp;案例
```wepy
<template>
  <searchbar
    placeholder="文艺复古长裙"
    className="mytest"
    :datasource.sync="datasource"
    @bindsearch.user="searchEvent"
    @bindcancel.user="cancelEvent"
    />
</template>

<script>
  import wepy from 'wepy'
  import SearchBar from 'kai-ui/SearchBar'
  export default class SearchbarPage extends wepy.page {
    data = {
      historyKeys: '',
      datasource: [
        '优衣库女装',
        'apple',
        'Banana',
        'Orange'
      ]
    }
    components = {
      searchbar: SearchBar
    }
    methods = {
      searchEvent (value) {
        console.log('搜索关键词：' + value)
      },
      cancelEvent () {
        wx.navigateBack({
          delta: 1
        })
      }
    }
  }
</script>

<style lang="less">
  .mytest {
    .searchbar {
      .searchbar-form__wrap {
        border-radius:50px;
      }
      .searchbar-form__cancel {
        color:#4b0;
      }
    }
  }
</style>

```
