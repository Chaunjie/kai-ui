export default class Dialog{
  constructor (props = {}) {
    this.options = {
      context: {}
    }
  }

  show (ele, option) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];
    const dialog = ctx.selectComponent(ele);
    this.options.context = dialog
    return new Promise((resolve, reject) => {
      dialog.show(option).then((value) => {
        resolve(value)
      }, (res) => {
        reject(res)
      })
    })
  }

  reset (ele) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];
    const dialog = ctx.selectComponent(ele);
    this.options.context = dialog
    dialog.reset()
  }
}