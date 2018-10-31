import Tab from './tab';

Component({
  externalClasses: ['custom-class', 'custom-border-class', 'custom-tab-class', 'custom-tab-active-class'],
  options: {
    multipleSlots: true
  },
  data: {
    selectedId: 0,
    left: 0,
    clientArr: [],
    textArr: [],
    wWidth: 0,
    animationData: {},
    animation: {}
  },
  properties: {
    tabData: {
      type: Object,
      value: {}
    }
  },

  methods: {
    selectTab (e) {
      const dataset = e.currentTarget.dataset
      const item = dataset.item
      const index = dataset.index
      const selectedId = this.data.selectedId
      if (index !== selectedId) {
        this.doSelect(index)
      }
    },
    doSelect (index) {
      const {tabData, selectedId} = this.data
      if (tabData.scroll) {
        if (index > selectedId) {
          this.getScrollOffset('right', index)
        } else {
          this.getScrollOffset('left', index)
        }
      }
      const select = tabData.list[index].id
      const newTabData = Object.assign({}, tabData, {selectedId: select})
      this.setData({
        selectedId: index,
        tabData: newTabData
      })

      this.triggerEvent('select', index);
      this.doAnimateBorder()
    },

    changeIndex (data) {
      this.doSelect(data.index)
    },

    doInitTabData (data) {
      this.setData({
        tabData: data
      })
      this.getClientArr()
    },

    changeScroll (data, index) {
      const { clientArr } = this.data
      const left = clientArr[index] ? clientArr[index].left : ''
      if (!left) {
        return false
      }
      if (left <= data.scrollLeft + 100) {
        this.setData({
          left: left - 100
        })
      }
    },
    getClientArr () {
      const { textArr, clientArr } = this.data
      wx.createSelectorQuery().in(this).selectAll('.tab-text').boundingClientRect((res) => {
        if (res.length > 0) {
          this.setData({
            textArr: res
          })
        }
      }).exec()
      wx.createSelectorQuery().in(this).selectAll('.tab').boundingClientRect((res) => {
        if (res.length > 0) {
          this.setData({
            clientArr: res
          })
          if (this.data.tabData.scroll) {
            this.initScrollPosition()
            this.doAnimateBorder()
          } else {
            this.doAnimateBorder()
          }
        }
      }).exec()
    },

    doAnimateBorder () {
      const {textArr, tabData, clientArr} = this.data
      const index = this.getIndex(tabData)
      const cWidth = clientArr[index].width
      const cLeft = clientArr[index].left
      const width = textArr[index].width
      const left = textArr[index].left
      // this.data.animation.width(cWidth).translate3d(cLeft, 0, 0).step({duration: 400}).width(width).translate3d(left, 0, 0).step({duration: 400})
      this.data.animation.width(width).translate3d(left, 0, 0).step({duration: 400}).width(tabData.borderWidth).translate3d(left + (width - tabData.borderWidth) / 2, 0, 0).step({duration: 400})
      this.setData({
        animationData: this.data.animation.export()
      })
    },

    getIndex (tabData) {
      for (let i = 0; i < tabData.list.length; i++) {
        if (tabData.selectedId === tabData.list[i].id) {
          return i
        }
      }
    },

    initScrollPosition () {
      const {tabData} = this.data
      let index = this.getIndex(tabData)
      this.setData({
        selectedId: index
      })
      wx.createSelectorQuery().in(this).select('.tab-cls').boundingClientRect((res) => {
        this.getScrollOffset('right', index)
      }).exec()
    },

    getScrollOffset (type, index) {
      wx.createSelectorQuery().in(this).select('#scroll').scrollOffset((res) => {
        const offsetLeft = res.scrollLeft
        const {clientArr, wWidth} = this.data
        if (type === 'right') {
          const nextClient = clientArr[index + 1]
          if (nextClient) {
            const right = nextClient.right
            if (right - wWidth > offsetLeft) {
              this.setData({
                left: right - wWidth
              })
            }
          }
        } else {
          const prevClient = clientArr[index - 1]
          if (prevClient) {
            const right = prevClient.right
            const left = prevClient.left
            const width = prevClient.width
            if (right - width < offsetLeft) {
              this.setData({
                left: left
              })
            }
          }
        }

      }).exec()
    }
  },

  ready () {
    let animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease-in-out'
    })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          wWidth: res.windowWidth,
          animation: animation
        })
      }
    })
  }
})

const tab = new Tab();
export default tab;
