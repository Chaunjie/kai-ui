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

&emsp;&emsp;适用于二维布局（例如九宫格）

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
	<grid :rows="rows" :cols="cols">
		<repeat for="{{gridlist}}" index="i" item="item" key="row-{{index}}">
			<view class="grid-items {{item.class}}">
				<icon :type="item.icon"></icon>
				<text class="">{{item.text}}</text>
			</view>
		</repeat>
	</grid>
</template>
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| rows | `Number` | `true` | 3 | 宫格行数1-10 |
| cols | `Number` | `true` | 3 | 宫格列数1-10 |

&emsp;&emsp;案例
```wpy
<style lang="less">
.grid-outer {
  background-color: #fff;
  font-size: 12px;
  margin-top: 20px;
}
.grid-items {
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: green;
  color: #eee;
}
</style>
<template>
  <view class="kai-content">
    <panel>
      <view slot="title" class="title">9宫格</view>
      <view class="panel">
        <grid :rows="rows" :cols="cols">
          <repeat for="{{gridlist}}" index="i" item="item" key="row-{{index}}">
            <view class="grid-items {{item.class}}">
              <icon :type="item.icon"></icon>
              <text class="">{{item.text}}</text>
            </view>
          </repeat>
        </grid>
      </view>
    </panel>
  </view>
</template>

<script>
import wepy from 'wepy'
import grid from 'kai-ui/Grid'
import panel from 'kai-ui/Panel'
import icon from 'kai-ui/Icon'

export default class Grid extends wepy.page {
  config = {
    navigationBarTitleText: 'grid'
  }

  components = {
    grid: grid,
    panel: panel,
    icon: icon
  }

  data = {
    rows: 3,
    cols: 3,
    gridlist: [],
    gridItems: [
      {
        icon: 'icon-message',
        text: '消息'
      },
      {
        icon: 'icon-star-outline',
        text: '收藏'
      },
      {
        icon: 'icon-news',
        text: '新闻'
      },
      {
        icon: 'icon-printer',
        text: '打印'
      },
      {
        icon: 'icon-goods',
        text: '商品'
      },
      {
        icon: 'icon-ticket',
        text: '票务'
      },
      {
        icon: 'icon-components',
        text: '组件'
      },
      {
        icon: 'icon-upload',
        text: '上传'
      },
      {
        icon: 'icon-picture-outline',
        text: '图像'
      },
      {
        icon: 'icon-phone',
        text: '手机'
      },
      {
        icon: 'icon-service',
        text: '服务'
      },
      {
        icon: 'icon-time',
        text: '时间'
      },
      {
        icon: 'icon-goods-soldout',
        text: '售罄'
      },
      {
        icon: 'icon-document',
        text: '文件'
      },
      {
        icon: 'icon-menu',
        text: '菜单'
      },
      {
        icon: 'icon-picture',
        text: '图画'
      }
    ]
  }

  computed = {}

  methods = {
  }

  events = {
  }

  initData (rows, cols, gridItems, gridlist) {
    // 初始化grid
    console.log(rows, cols, gridItems)
    for (let i = 1, k = 0; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        gridlist.push({
          class: 'grid-items' + i + j,
          name: 'row' + i + '-col' + j,
          icon: gridItems[k].icon,
          text: gridItems[k].text
        })
        k++
      }
    }
    console.log(this.gridlist)
    this.$apply()
    // 初始化grid
  }

  onLoad() {
    const {rows, cols, gridItems, gridlist} = this
    this.initData(rows, cols, gridItems, gridlist)
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
	<view class="panel">
      <repeat for="{{cellList}}" index="index" item="item" key="row-{{index}}">
        <cell :celldata="item"></cell>
      </repeat>
    </view>
</template>
```

&emsp;&emsp;回调
```javascript
	events = {
    'item-tap': (type, url) => {
      wx.navigateTo({
        url: url
      })
    }
  }
```

&emsp;&emsp;对应参数：

| 参数 | 类型 | 异步 | 描述 |
| --- | --- | --- | --- |
| celldata | `Array` | true | 列表组件数据信息 |

&emsp;&emsp;celldata配置

| 参数 | 类型 | 默认 | 描述 |
| --- | --- | --- | --- |
| title  | `String` | '' | 主体内容 |
| subtitle | `String` |  '' | 附加内容   |
| detail | `String` | '' | 右侧描述   |
| linktype | `Number, String` |  0 | 是否需要跳转 0: 无跳转 1：跳转   |
| icontype | `Number, String` |  0 | 图标类型 0：无图片  1：icon  2：图片 |
| icontext | `String` | '' |  图标 图片地址   |
| link | `String` | '' | 页面跳转 |

&emsp;&emsp;案例
```wpy
<template>
  <view class="kai-content">
    <view class="panel">
      <repeat for="{{cellList}}" index="index" item="item" key="row-{{index}}">
        <cell :celldata="item"></cell>
      </repeat>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Cell from 'kai-ui/Cell'

export default class Cell extends wepy.page {
  config = {
    navigationBarTitleText: '列表'
  }

  components = {
    cell: Cell
  }

  data = {
    cellList: [
      [
        {
          title: '默认'
        }
      ],
      [
        {
          title: '单行有附加信息',
          subtitle: '图片icon',
          detail: '有箭头',
          linktype: 1,
          link: 'index',
          icontype: '2',
          icontext: 'https://gss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/12.6155.png'
        }
      ]
    ]
  }

  computed = {}

  methods = {}

  events = {
    'item-tap': (type, url) => {
      if (url !== '#') {
        wx.navigateTo({
          url: url
        })
      }
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
       <view class="iconfont icon-loading"></view>
       按钮
     </button>
     <button class="btn btn-large btn-kai btn-loading">
       <view class="iconfont icon-loading"></view>
       按钮
     </button>
     <button class="btn btn-large btn-warn btn-empty btn-loading">
       <view class="iconfont icon-loading"></view>
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
|  type   | `String` | `true`  | '' | 图标的iconfont |
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
    .iconfont {
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
  import icon from '@/components/icon/index'

  export default class Icon extends wepy.page {
    config = {
      navigationBarTitleText: '字体库'
    }
    components = {
      icon: icon
    }

    data = {
      list: [
        'icon-delete', 'icon-upload', 'icon-upload2', 'icon-download2', 'icon-rank',
        'icon-refresh', 'icon-edit-outline', 'icon-edit', 'icon-setting-outline', 'icon-setting',
        'icon-share', 'icon-loading', 'icon-picture-outline', 'icon-picture', 'icon-callinging',
        'icon-call', 'icon-location-outline', 'icon-location', 'icon-more-outline', 'icon-more',
        'icon-phone', 'icon-service', 'icon-menu', 'icon-star-outline', 'icon-star',
        'icon-view', 'icon-time', 'icon-message', 'icon-printer', 'icon-bell',
        'icon-date', 'icon-news', 'icon-goods-soldout', 'icon-goods', 'icon-sort',
        'icon-sort-down', 'icon-sort-up', 'icon-ticket', 'icon-document', 'icon-zoom-out',
        'icon-zoom-in', 'icon-search', 'icon-double-left', 'icon-double-right', 'icon-plus-outline',
        'icon-plus-circle', 'icon-plus', 'icon-minus-outline', 'icon-minus-circle', 'icon-minus',
        'icon-success-outline', 'icon-success-circle', 'icon-success', 'icon-close-outline', 'icon-close-circle',
        'icon-close', 'icon-caret', 'icon-caret-up', 'icon-caret-right', 'icon-caret-down',
        'icon-caret-left', 'icon-info', 'icon-warning', 'icon-right', 'icon-left',
        'icon-up', 'icon-down', 'icon-question', 'icon-back', 'icon-components'
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
  import loadmore from '@/components/loadmore/index'

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

| 参数 | 类型 | 异步 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| type | `String` | `true`  | '' | 标签类型 |

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

import Tags from '@/components/tag/index'
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

&emsp;&emsp;案例
```wpy
<style lang="less" src="./index.less"></style>
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
import popup from '@/components/popup/index'

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

&emsp;&emsp;适用于分类类信息展示

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
| bindchange | `Function` | `false`  | 单选框回调方法 |

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
import actionsheet from '@/components/actionsheet/index'
// import wxParse from '@/wxParse/wxParse'

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
          // ,slot: '<view class="iconfont icon-success">alot1</view><view class="iconfont icon-delete">alot11</view>'
        },
        {
          class: 'list',
          value: '其次忆吴宫',
          event: '',
          slotid: 'slotid1'
          // ,slot: '<view class="iconfont icon-minus">slot2</view><view class="iconfont icon-plus">alot21</view>'
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

toptips

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
import radio from 'kai-ui/Radio'
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

#### Toast 提示

toast

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
            <text class="iconfont icon-close delete-file" catchtap="removeImg({{index}})"></text>
          </view>
        </repeat>
        <uploader :imgWidth.sync="imgWidth" :total="imgTotal" region="ECN" :imgList.sync="imgList" :domain="domain" :uptokenURL="uptokenURL" :test="test"></uploader>
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
| count | `String` | `true`  |  已上传图片数量   |

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
            <text class="iconfont icon-close delete-file" catchtap="removeImg({{index}})"></text>
          </view>
        </repeat>
        <uploader :imgWidth.sync="imgWidth" :total="imgTotal" region="ECN" :imgList.sync="imgList" :domain="domain" :uptokenURL="uptokenURL" :test="test"></uploader>
      </view>
    </panel>
  </view>
</template>

<script>
import wepy from 'wepy'
import uploader from '@/components/uploader/index'
import panel from '@/components/panel/index'

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
    'refresh-img-list': (data, test) => {
      if (test) {
        this.imgList.push({url: data})
      } else {
        this.imgList.push({url: data.imageURL})
      }
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

&emsp;&emsp;案例
```wpy
<style lang="less">
.icon-right{
  font-size:12px;
}
</style>
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
import select from '@/components/select/index'

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
import switch from 'kai-ui/Switch'
```

&emsp;&emsp;组件添加
```javascript
components = {
  switch: switch
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
import switch from 'kai-ui/Switch'
export default class Index extends wepy.page {
	components = {
		switch: switch,
    'switch-type': switch
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

#### Stepper 步骤条

stepper

#### Input 框

input

### 搜索组件

#### Searchbar 搜索条

Searchbar
