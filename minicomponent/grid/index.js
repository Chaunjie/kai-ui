Component({
  externalClasses: ['custom-class'],
  relations: {
    '../grid-item/index': {
      type: 'child'
    }
  },

  properties: {
    col: {
    	type: [Number, String],
    	value: '9'
    }
  },

  methods: {
    setGridItemWidth () {
      const nodes = this.getRelationNodes('../grid-item/index');
      const col = +this.data.col;
      const length = Math.sqrt(col);
      const width = 100 / length;
      nodes.forEach(item => {
        item.setData({
          'width': width + '%'
        });
      });
    }
  },

  ready () {
    this.setGridItemWidth();
  }
})
