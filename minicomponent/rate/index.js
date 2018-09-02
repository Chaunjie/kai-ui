Component({
  externalClasses: ['custom-class'],
  properties: {
    title: {
      type: String,
      value: ''
    },
    value: {
      type: [String, Number],
      value: 0
    },
    desc: {
      type: Array,
      value: [
        '1星',
        '2星',
        '3星',
        '4星',
        '5星'
      ]
    },
    type: {
      type: String,
      value: 'horizontal'
    }
  },
  methods: {
    star (e) {
      const index = Number(e.currentTarget.dataset.index)
      this.triggerEvent('change', index + 1)
    }
  }
})