Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    selectData: {
      type: Object,
      value: {}
    }
  },

  methods: {
    tapItem (e) {
      const index = e.currentTarget.dataset.index
      const { selectData } = this.data
      const newObj = Object.assign({}, selectData, { selectIndex: index })
      this.setData({
        selectData: newObj
      })

      this.triggerEvent('select', index);
    }
  }
})
