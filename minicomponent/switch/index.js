Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    checked: { // 当前选中状态
      type: Boolean,
      value: false
    },
    disabled: {  // 是否禁用
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    sync: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'success'
    }
  },

  methods: {
    _handleSwitchChange (e) {
      const dataset = e.currentTarget.dataset
      if (!dataset.disabled) {
        this.triggerEvent('change', !dataset.checked)
      }
    }
  }
})
