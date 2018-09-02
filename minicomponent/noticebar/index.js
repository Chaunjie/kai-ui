
Component({
  externalClasses: ['custom-class'],

  options: {
    multipleSlots: true
  },

  properties: {
    text: {
      type: String,
      value: '',
      observer(currentValue) {
        this.setData({ text: currentValue }, () => {
          this.initNoticeBarScroll()
        });
      }
    },
    icon: {
      type: Boolean,
      value: false,
      observer(currentValue) {
        this.setData({ icon: currentValue }, () => {
          this.initNoticeBarScroll()
        });
      }
    }
  },

  data: {
    animationData: {},
    currentComponent: {}
  },

  methods: {
    initNoticeBarScroll () {
      let currentComponent = {
        width: undefined,
        wrapWidth: undefined,
        animation: null,
        resetAnimation: null
      }
      wx.createSelectorQuery()
        .in(this)
        .select('#noticebar-content')
        .boundingClientRect(rect => {
          if (rect.width) {
            currentComponent.width = rect.width
            wx.createSelectorQuery()
              .in(this)
              .select('#noticebar-content-wrap')
              .boundingClientRect(rect => {
                currentComponent.wrapWidth = rect.width
                if (currentComponent.wrapWidth < currentComponent.width) {
                  let mstime = currentComponent.width / 40 * 1000
                  currentComponent.animation = wx.createAnimation({
                    duration: mstime,
                    timingFunction: 'linear'
                  })
                  currentComponent.resetAnimation = wx.createAnimation({
                    duration: 0,
                    timingFunction: 'linear'
                  })
                  this.setData({
                    currentComponent: currentComponent
                  })
                  this.scrollNoticeBar(mstime)
                }
              })
              .exec()
          } else {
            console.warn('页面缺少 noticebar 元素')
          }
        }).exec()
    },

    scrollNoticeBar (mstime) {
      let currentComponent = this.data.currentComponent
      let resetAnimationData = currentComponent.resetAnimation.translateX(currentComponent.wrapWidth).step()
      this.setData({
        animationData: resetAnimationData.export()
      })
      let aninationData = currentComponent.animation.translateX(-mstime * 40 / 1000).step()
      setTimeout(() => {
        this.setData({
          animationData: aninationData.export()
        })
      }, 100)

      setTimeout(() => {
        this.scrollNoticeBar(mstime)
      }, mstime)
    }
  },

  ready () {
    this.initNoticeBarScroll()
  }
})
