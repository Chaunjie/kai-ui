Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    placeholder: {
      type: String,
      value: '输入文字进行搜索'
    },
    focus: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    }
  },

  data: {
    showClear: false
  },

  methods: {
    _handleInput (e) {
      const value = e.detail.value
      const status = (value + '').length > 0
      this.setData({showClear: status})
    },
    _handleCancel (e) {
      this.triggerEvent('cancel')
    },
    _clear () {
      this.setData({value: '', showClear: false})
    },
    _handleConfirm (e) {
      const value = e.detail.value
      this.triggerEvent('confirm', value)
    }
  }
})
