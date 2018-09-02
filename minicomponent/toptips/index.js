import Toptips from './toptips';

Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },

  properties: {},

  data: {
    duration: 3000,
    content: '提示内容',
    show: false
  },

  methods: {
    setMsg (options) {
      const newOptions = Object.assign({}, this.data, options)
      newOptions.show = true
      this.setData(newOptions)
      setTimeout(() => {
        this.setData({
          show: false
        })
      }, newOptions.duration)
    }
  }
})

const toptips = new Toptips()
export default toptips;
