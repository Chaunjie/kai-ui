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

&emsp;&emsp;页面中引入样式
```css
@import '../node_modules/wepy-ui-ydj/src/styles/all';
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

#### Grid 栅格

- **概述**

&emsp;&emsp;适用于二维布局-九宫格

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

&emsp;&emsp;方法触法调用
```javascript
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

this.initData(rows, cols, gridItems, gridlist)
```

&emsp;&emsp;对应参数：

| 参数      | 类型 | 描述                      |
| -------- | ----- | ---------------------------- |
| rows    | `Number` | 行数 |
| cols | `Number` | 列数    |

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
        <grid1 :rows="rows" :cols="cols">
          <repeat for="{{gridlist}}" index="i" item="item" key="row-{{index}}">
            <view class="grid-items {{item.class}}">
              <icon :type="item.icon"></icon>
              <text class="">{{item.text}}</text>
            </view>
          </repeat>
        </grid1>
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
    grid1: grid,
    panel: panel,
    icon: icon
  }

  data = {
    rows: 1,
    cols: 1,
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

#### demo111

- **概述**

&emsp;&emsp;适用于

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import  from 'kai-ui/'
```

&emsp;&emsp;组件添加
```javascript
components = {
  : 
}
```

&emsp;&emsp;template添加
```template
<template>
	
</template>
```

&emsp;&emsp;方法触法调用
```javascript

```

&emsp;&emsp;对应参数：

| 参数      | 类型 | 异步 | 描述                      |
| -------- | ----- | ----- | ---------------------------- |
|     | `String` | `true`   |  |
|  | `String` | `false`  |     |
|  | `Boolean` | `true`  |     |

&emsp;&emsp;案例
```wpy

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
  cell : Cell
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

celljson

| 参数      | 类型 | 异步 | 描述                      |
| -------- | ----- | ----- | ---------------------------- |
|   title  | `String` | `false`   | 主体内容 |
| subtitle | `String` | `false`  |  附加内容   |
| detail | `String` | `false`  |  右侧描述   |
| linktype | `Number, String` | `false`  |  是否需要跳转 0: 无跳转 1：跳转   |
| icontype | `Number, String` | `false`  |  图标类型 0：无图片 1：icon 2：图片   |
| icontext | `String` | `false`  |  图标 图片地址   |
| link | `String` | `false`  |  页面跳转   |

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

#### Panel 

- **概述**

&emsp;&emsp;适用于

- **使用指南**

&emsp;&emsp;页面中引入组件
```javascript
import  from 'kai-ui/'
```

&emsp;&emsp;组件添加
```javascript
components = {
  : 
}
```

&emsp;&emsp;template添加
```template
<template>
	
</template>
```

&emsp;&emsp;方法触法调用
```javascript

```

&emsp;&emsp;对应参数：

| 参数      | 类型 | 异步 | 描述                      |
| -------- | ----- | ----- | ---------------------------- |
|     | `String` | `true`   |  |
|  | `String` | `false`  |     |
|  | `Boolean` | `true`  |     |

&emsp;&emsp;案例
```wpy

```

### 基础组件

#### Button 按钮

button

#### Icon 图标

提供了一套常用的图标集合。

##### 使用方法

`<text class="iconfont {{item}}"></text>`

##### 图标集合

#### Loadmore 加载

loadmore

#### Helper 基础样式

helper

#### Tag 标记

tag

### 导航组件

#### Popup 弹出层

Popup 

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

| 参数      | 类型 | 异步 | 描述                      |
| -------- | ----- | ----- | ---------------------------- |
| text    | `String` | `true`   | 需要通知的信息（当宽度超过通知栏宽度时候会自动滚动） |
| componentId | `String` | `false`  | 组件Id    |
| icon | `Boolean` | `true`  | 是否前面带图标    |

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

#### Tab

tab

### 操作提示组件

#### Actionsheet

actionsheet

#### Toptips

toptips

#### Dialog 弹窗

dialog

#### Toast 提示

toast

### 表单组件

#### Uploader 上传

uploader

#### Select 选择

select

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

| 参数      | 类型 | 异步 | 描述                      |
| -------- | ----- | ----- | ---------------------------- |
| config    | `Object` | `true`   | 单选框组配置信息 |
| bindchange | `Function` | `false`  | 单选框回调方法    |

&emsp;&emsp;config配置:

| 参数      | 类型 | 异步 | 可选项 | 默认值 | 描述                      |
| -------- | ----- | ----- | ------- | -------  | ---------------------------- |
| className   | `String` | `none`   | - | - | 单选框组自定义样式 |
| position   | `String` | `none`   | `left、right` | `left` | 单选框出现的位置 |
| circle   | `Boolean` | `none`   | `true、false` | `true` | 单选框样式 |
| inline   | `Boolean` | `none`   | `true、false` | `false` | 单选框组是否显示在一行内 |

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

| 参数      | 类型 | 异步 | 描述                      |
| -------- | ----- | ----- | ---------------------------- |
| config    | `Object` | `true`   | 复选框组配置信息 |
| bindchange | `Function` | `false`  | 复选框回调方法    |

&emsp;&emsp;config配置:

| 参数      | 类型 | 异步 | 可选项 | 默认值 | 描述                      |
| -------- | ----- | ----- | ------- | -------  | ---------------------------- |
| className   | `String` | `none`   | - | - | 复选框组自定义样式 |
| position   | `String` | `none`   | `left、right` | `left` | 复选框出现的位置 |
| circle   | `Boolean` | `none`   | `true、false` | `true` | 复选框样式 |
| inline   | `Boolean` | `none`   | `true、false` | `false` | 复选组是否显示在一行内 |

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

| 参数      | 类型 | 异步 | 描述                      |
| -------- | ----- | ----- | ---------------------------- |
| onChange | `Function` | `false`  | 开关change回调方法    |

&emsp;&emsp;配置:

| 参数      | 类型 | 异步 | 可选项 | 默认值 | 描述                      |
| -------- | ----- | ----- | ------- | -------  | ---------------------------- |
| className   | `String` | `true`   | - | - | 开关自定义样式 |
| checked   | `Boolean` | `true`   | `true、false` | `false` | 开关是否开启 |
| disabled   | `Boolean` | `true`   | `true、false` | `false` | 开关是否可操作 |
| type   | `String` | `true`   | `success、kai、danger、warn` | `success` | 开关样式 |
| componentId   | `String` | `true`   | - | - | 开关组件id（自定义） |
| sync   | `Boolean` | `true`   | `true、false` | `false` | 是否异步 |
| loading   | `Boolean` | `true`   | `true、false` | `false` | 是否显示loading图案 |

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
