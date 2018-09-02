export default class Tab{
  constructor (props={}) {
    this.options = {
      context: {}
    }
  }

  _init (ele, res) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];
    const tab = ctx.selectComponent(ele);
    this.options.context = tab
    tab.doInitTabData(res)
  }
}