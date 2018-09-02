Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    num: { // 数值
      type: [Number, String],
      value: ''
    },
    size: {
      type: String,
      value: ''
    },
    step: {
      type: Number,
      value: 1
    },
    min: {
      type: Number,
      value: 1
    },
    max: {
      type: Number,
      value: 99999
    }
  },

  methods: {
    _handleMinueStep (e) {
      const dataset = e.currentTarget.dataset
      const { num, step, min } = this.data
      if (dataset.disabled) {
        return
      }
      let reNum = num
      if (num - step >= min) {
        reNum = num - step
      } else {
        reNum = min
      }
      this.triggerEvent('change', reNum)
    },
    _handleBlur (e) {
      const { num, step, min, max } = this.data
      const value = +e.detail.value
      let newValue = value
      if (value < min) {
        newValue = min
      } else if (value > max) {
        newValue = max
      }
      this.triggerEvent('change', newValue)
    },
    _handlePlusStep (e) {
      const dataset = e.currentTarget.dataset
      const { num, step, max } = this.data
      if (dataset.disabled) {
        return
      }
      let reNum = num
      if (num + step <= max) {
        reNum = num + step
      } else {
        reNum = max
      }
      this.triggerEvent('change', reNum)
    }
  }
})
