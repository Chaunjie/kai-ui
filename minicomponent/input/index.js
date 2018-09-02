Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    label: {
      type: String,
      value: ''
    },
    value: {
      type: [String, Number],
      value: '' 
    },
    clear: {
      type: Boolean,
      value: false
    },
    placeholder:  {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    error: {
      type: Boolean,
      value: false
    },
    focus: {
      type: Boolean,
      value: false
    },
    right: {
      type: Boolean,
      value: false
    },
    adjust: {
      type: Boolean,
      value: false
    },
    inputType:  {
      type: String,
      value: 'text'
    },
    type:  {
      type: String,
      value: ''
    },
    maxlength:  {
      type: Number,
      value: 9999
    },
    filter: {
      type: String,
      value: ''
    }
  },

  data: {
    showClose: false,
    showError: true
  },

  methods: {
    _handleClear () {
      this.setData({
        value: ' '
      }, () => {
        setTimeout(() => {
          this.setData({
            value: '',
            showClose: false
          })
        }, 10)
      })
      this.triggerEvent('input', '')
    },
    _handleFieldChange (e) {
      const value = e.detail.value
      const {clear} = this.data
      if (clear) {
        this.setData({
          showClose: value.length > 0
        })
      }
      this.triggerEvent('input', value)
    },
    _handleFieldFocus (e) {},
    _handleFieldBlur (e) {
      const value = e.detail.value
      const { filter } = this.data
      if (filter) {
        this.setData({
          showError: new RegExp(filter).test(value)
        })
      }
      this.triggerEvent('blur', value)
    }
  },
  ready () {
    const {clear, value} = this.data
    if (clear) {
      this.setData({
        showClose: value.length > 0
      })
    }
  }
})
