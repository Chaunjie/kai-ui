Component({
  externalClasses: ['custom-class', 'custom-active'],
  options: {
    multipleSlots: true
  },
  properties: {
    type: {
      type: String,
      value: 'circle'
    },
    label: {
      type: String,
      value: '发生的吧'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    checked: {
      type: Boolean,
      value: false
    },
    position: {
      type: String,
      value: 'left'
    }
  },

  methods: {
    onTap () {
      const { checked, disabled } = this.data
      if (disabled) {
        return
      }
      this.triggerEvent('change', !checked)
    }
  }
})
