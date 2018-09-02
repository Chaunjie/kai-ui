Component({
  externalClasses: ['custom-class'],
  relations: {
    '../step/index': {
      type: 'parent'
    }
  },
  properties: {
    step: {
      type: Object,
      value: {}
    }
  },
  data: {
    direction: {
      type: String,
      value: 'vertical'
    },
    index: {
      type: Number,
      value: 0
    },
    current: {
      type: Number,
      value: 0
    },
    isLast: {
      type: Boolean,
      value: false
    },
    width: {
      type: String,
      value: ''
    }
  }
});
