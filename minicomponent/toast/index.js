import Toast from './toast';

Component({
  externalClasses: ['custom-class'],

  options: {
    multipleSlots: true
  },

  properties: {},

  data: {
    type: '',
    content: '提示内容',
    show: false,
    timer: '',
    position: 'middle',
    duration: 3000
  },

  methods: {
    onClick (e) {
      // const data = e.currentTarget.dataset.item
      this.triggerEvent('click');
    },
    resetData () {
      const { timer } = this.data
      clearTimeout(timer)
      return new Promise((resolve, reject) => {
        this.setData({
          content: '提示内容',
          show: false,
          timer: '',
          position: 'middle',
          duration: 3000
        }, () => {
          resolve()
        })
      })
    },
    show (options) {
      this.resetData().then(() => {
        const { duration } = this.data
        const obj = Object.assign({}, options, { show: true })
        this.setData(obj)
        const time = setTimeout(() => {
          this.setData({
            show: false
          })
        }, +duration)

        this.setData({
          timer: time
        })
      })
    },
    hide () {
      const { timer } = this.data
      clearTimeout(timer)
      this.setData({
        show: false
      })
    }
  },
  detached () {
    const { timer } = this.data
    clearTimeout(timer)
  }
})

const toast = new Toast();
export default toast;
