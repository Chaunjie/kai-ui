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

#### Panel

panel

#### Grid

grid

### 基础组件

#### Button

button

#### Icon图标

提供了一套常用的图标集合。

##### 使用方法

`<text class="iconfont {{item}}"></text>`

##### 图标集合



### 表单组件

#### Checkbox

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
  'checkbox-circle': checkbox,
  'checkbox-cube': checkbox,
  'checkbox-inline': checkbox
}
```

&emsp;&emsp;template添加
```javascript
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

### 弹出层组件

#### Dialog

dialog

### 通知组件

#### NoticeBar

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
```javascript
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
	onLoad () {
		this.$invoke('noticeBar', 'initNoticeBarScroll')
	}
}
</script>
```
