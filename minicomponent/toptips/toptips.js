export default class Toptips{
  constructor (props={}) {
    this.options = {
      context: {}
    }
  }

  show (ele, option) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];
    const toptips = ctx.selectComponent(ele);
    this.options.context = toptips
    toptips.setMsg(option)
  }
}