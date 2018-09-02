Component({
  externalClasses: ['custom-class'],
  properties: {
    title: {
      type: String,
      value: ''
    }
  },
  data: {
    collapsed: false,
    height: ''
  },
  methods: {
    collapse () {
      this.setData({
        collapsed: !this.data.collapsed
      })
    }
  },
  ready () {
    wx.createSelectorQuery().in(this).select('.folder-content').boundingClientRect((res) => {
      this.setData({
        height: res.height
      })
    }).exec()
  }
})