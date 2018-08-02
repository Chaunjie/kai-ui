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

Layout

#### Grid 栅格

grid

#### Cell 列表

cell

#### Panel 

panel

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

#### Stepper 步骤条

stepper

#### Switch 

switch

#### Input 框

input

### 搜索组件

#### Searchbar 搜索条

Searchbar
