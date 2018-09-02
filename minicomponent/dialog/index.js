import Dialog from './dialog';

Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    }
  },

  data: {
    dialog: {
      show: false,
      title: '',
      content: '',
      showVertical: false,
      type: '',
      buttons: []
    },
    resolve: '',
    reject: '',
    out: false,
    showSync: false
  },

  methods: {
    doProp () {
      return
    },
    btnTap (e) {
      const index = e.currentTarget.dataset.index
      const {dialog, showSync} = this.data
      if (showSync) {
        return
      }
      this.data.resolve(index)
      if (dialog.buttons[index].sync) {
        this.setData({showSync: true})
      } else {
        this.resetDialog()
      }
    },
    resetDialog () {
      this.setData({out: true})
      setTimeout(() => {
        this.setData({
          out: false,
          dialog: {
            title: '标题',
            content: '内容',
            showVertical: false,
            type: 'base',
            buttons: [{text: '取消'}, {text: '确定', color: '#3CC51F'}],
            show: false
          }
        })
      }, 300)
    },
    reset () {
      this.setData({showSync: false})
      this.resetDialog()
    },
    show (options) {
      return new Promise((resolve, reject) => {
        this.setData({
          out: false,
          showSync: false,
          dialog: {
            title: options.title ? options.title : '提示',
            content: options.content ? options.content : '内容',
            showVertical: options.showVertical ? options.showVertical : false,
            type: options.type ? options.type : 'base',
            buttons: options.type === 'alert' ? [{text: '确定', color: '#3CC51F'}] : (options.type === 'muti' ? options.buttons : [{text: '取消'}, {text: '确定', color: '#3CC51F'}]),
            show: true
          },
          resolve: resolve,
          reject: reject
        })
      })
    }
  }
})

const dialog = new Dialog()
export default dialog;
