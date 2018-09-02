Component({
  externalClasses: ['custom-class'],
  properties: {
    type: {
      type: String,
      value: 'single'
    },
    value: {
      type: [Number, Array],
      value: 0,
      observer(v) {
        if (this.data.type === 'double') {
          this.setData({
            valueMin: Math.min(v[0], v[1]),
            valueMax: Math.max(v[0], v[1]),
            stickLeft: Math.min(this.data.left1, this.data.left2),
            stickWidth: Math.abs(this.data.left1 - this.data.left2)
          })
        }
      }
    },
    max: {
      type: Number,
      value: 100
    },
    min: {
      type: Number,
      value: 0
    }
  },
  data: {
    ratio: 0,
    left: 0,
    startX: 0,
    endX: 0,
    width: 0,
    circle: 0,
    left1: 0,
    left2: 0,
    stickLeft: 0,
    stickWidth: 0,
    valueMin: 0,
    valueMax: 0
  },
  methods: {
    tap (e) {
      this.count(e.detail.x, 'tap')
    },
    move (e) {
      const index = e.currentTarget.dataset.index
      const endX = e.touches[0].clientX
      this.count(endX, 'move', Number(index))
    },
    count (endX, eventName, index) {
      let {type, startX, width, left, left1, left2, value} = this.data
      let distance = endX - startX
      if (distance > width) {
        distance = width
      }
      if (distance < 0) {
        distance = 0
      }
      if (type === 'single') {
        left = this.countLeft(distance)
        value = this.countValue(distance)
      } else {
        if (eventName === 'tap') {
          if ((left1 < left2 && left2 < distance) || (distance < left2 && left2 < left1) || (left2 < left1 && distance < left1)) {
              left2 = this.countLeft(distance)
              value[1] = this.countValue(distance)
          } else {
            left1 = this.countLeft(distance)
            value[0] = this.countValue(distance)
          }
        } else {
          if (index === 0) {
            left1 = this.countLeft(distance)
          } else {
            left2 = this.countLeft(distance)
          }
          value[index] = this.countValue(distance)
        }
      }
      this.setData({
        left: left,
        left1: left1,
        left2: left2
      })
      this.triggerEvent('change', value)
    },
    countLeft (distance) {
      return distance - this.data.circle / 2
    },
    countValue (distance) {
      return Math.round(distance / this.data.ratio) + this.data.min
    }
  },
  ready () {
    wx.createSelectorQuery().in(this).select('.slider-stick__wrap').boundingClientRect((res) => {
      const width = res.width
      const startX = res.left
      wx.createSelectorQuery().in(this).select('.slider-block').boundingClientRect((res) => {
        let {type, max, min, value, left, left1, left2} = this.data
        const circle = res.width
        const ratio = width / (max - min)
        if (type === 'single') {
          left = ratio * (value - min) - circle / 2
        } else {
          left1 = ratio * (value[0] - min) - circle / 2
          left2 = ratio * (value[1] - min) - circle / 2
        }
        this.setData({
          width: width,
          startX: startX,
          circle: circle,
          ratio: ratio,
          left: left,
          left1: left1,
          left2: left2,
          stickLeft: Math.min(left1, left2),
          stickWidth: Math.abs(left1 - left2)
        })
      }).exec()
    }).exec()
  }
})