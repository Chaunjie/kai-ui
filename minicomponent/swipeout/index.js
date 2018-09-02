Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {},
  data: {
    width: '',
    startX: '',
    left: 0
  },
  methods: {
    tap () {
      this.setData({
        left: 0
      })
    },
    start (e) {
      let {left, width} = this.data
      this.setData({
        startX: e.touches[0].clientX
      })
      // 处理已经滑动到最左测，再次开始继续向左滑动的情况
      if (left === -width) {
        this.setData({
          left: 0,
          startX: 0
        })
      }
    },
    move (e) {
      let {left, startX} = this.data
      const endX = e.touches[0].clientX
      const offsetX = endX - startX
      // 左移
      if (offsetX < 0) {
        this.setData({
          left: offsetX
        })
      }
      // 右移
      if (offsetX > 0) {
        this.setData({
          left: Math.min(left + offsetX, 0)
        })
      }
    },
    end () {
      let {left, width} = this.data
      // 滑动后自动到底
      if (left < 0) {
        this.setData({
          left: -width
        })
      } else {
        this.setData({
          left: 0
        })
      }
    }
  },
  ready () {
    wx.createSelectorQuery().in(this).select('.swipeout-action').boundingClientRect((res) => {
      this.setData({
        width: res.width
      })
    }).exec()
  }
})