Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    show: {
      type: [Boolean, String],
      value: false
    },
    position: {
      type: String,
      value: 'bottom'
    },
    maskHide: {
      type: [Boolean, String],
      observer(newVal) {
        const status = newVal === null ? true : newVal
        this.setData({
          maskHide: status
        })
      },
      value: true
    }
  },

  methods: {
    doProp () {
      return
    },
    togglePopup () {
      const { maskHide } = this.data
      if (maskHide) {
        this.emitEvent(!this.data.show)
      }
    },
    emitEvent (status) {
      this.triggerEvent('click', status)
    }
  }
})
