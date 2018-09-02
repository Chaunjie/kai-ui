Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../grid/index': {
      type: 'parent'
    }
  },

  data: {
    width: '33.33%'
  }
});
