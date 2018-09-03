
<p align="center">
  <img width="200" src="http://images.kaishiba.com/kai-ui.png">
</p>

## 快速上手

### 使用之前

使用 kai-ui 前，务必要先阅读[wepy自定义组件开发](https://tencent.github.io/wepy/)。

#### 预览小程序
<p>
 <img width="150" src="http://images.kaishiba.com/kai.jpg"/>
</p>

### 如何使用
#### 安装
##### 方式一. 通过 npm 安装 (推荐)
```bash
# npm
npm i kai-ui -S --production
```

##### 方式二. 下载代码

直接下载[GitHub](https://github.com/Chaunjie/kai-ui)或者通过 `git` 命令下载并把minparogram文件夹拷贝到自己项目中
```bash
git clone https://github.com/Chaunjie/kai-ui.git
```

### 使用组件

以按钮组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可

```javascript
import Panel from 'kai-ui/Panel'

components = {
  'k-panel': Panel
}
```

接着就可以在 wxml 中直接使用组件

```html
<k-panel>使用kai-ui组件库开始</k-panel>
```

### 在开发者工具中预览

```bash
# 拉取代码
git clone https://github.com/Chaunjie/kai-ui.git

# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开开发者工具，把`dist`目录添加进去就可以预览示例了。

### 贡献者
感谢下面这些小朋友的贡献

[stardew](https://github.com/stardew516)  [wppeng](https://github.com/wppeng)
 
### 组件列表
- [x] cell 列表
- [x] button 按钮
- [x] icon 图标
- [x] popup 弹出层
- [x] tag 标记
- [x] tab 标签
- [x] select 选择
- [x] toptips 顶部提示
- [x] toast 轻提示组件
- [x] numberpicker 数字输入框
- [x] switch 开关
- [x] actionsheet 操作盘
- [x] dialog 对话框
- [x] uploader 上传
- [x] grid 宫格
- [x] loadmore 更多
- [x] loading 加载中
- [x] panel 面板
- [x] layout 布局
- [x] checkbox 复选框
- [x] radio 单选框
- [x] noticebar 通知栏
- [x] searchbar 搜索框
- [x] input 输入框
- [x] step 步骤条
- [x] slider 滑块
- [x] rate 星级评分
- [x] folder 折叠面板
- [ ] calander 日期选择
- [x] swipeout 滑动菜单
- [ ] scrollviewrefresh 下拉刷新
