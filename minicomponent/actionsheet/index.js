Component({
  externalClasses: ['custom-class'],
  properties: {
    asData: {
      type: Object,
      value: {}
    }
  },

  methods: {
    doProp () {
      return;
    },
    selectIndex (e) {
      const { asData } = this.data
      const index = e.currentTarget.dataset.index
      const disabled = asData.actions[index].disabled
      if (!disabled) {
        this.triggerEvent('select', index)
        this.hideAc()
      }
    },
    hideAc () {
      const { asData } = this.data
      const newObj = Object.assign({}, asData, { show: false})
      this.setData({
        asData: newObj
      })
    },

    onCancel() {
      this.triggerEvent('cancel');
    },

    onClose() {
      this.triggerEvent('close');
    }
  }
});
