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

### 表单组件

#### Checkbox

checkbox

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

| 标签      | 类型 | 异步 | 描述                      |
| -------- | ----- | ----- | ---------------------------- |
| text    | `String` | `true`   | 需要通知的信息（当宽度超过通知栏宽度时候会自动滚动） |
| componentId | `String` | `false`  | 组件Id    |

&emsp;&emsp;案例
```javascript
<template>
	<noticeBar :text="longText" componentId="noticebar" ></noticeBar>
</template>
<script>
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
