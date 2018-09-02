Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
    	type: String,
    	value: ''
    },
    detail: {
    	type: String,
    	value: ''
    },
    subtitle: {
    	type: String,
    	value: ''
    },
    access: {
    	type: Boolean,
    	value: false
    },
    arrow: {
    	type: Boolean,
    	value: false
    },
    item: {
      type: Object,
      value: {}
    }
  },

  methods: {}
})
