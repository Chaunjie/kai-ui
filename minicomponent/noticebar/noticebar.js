export default class NoticeBar{
  constructor (props={}) {
    this.options = {
      context: {}
    }
  }

  _init (ele) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];
    const noticebar = ctx.selectComponent(ele);
    this.options.context = noticebar
    noticebar.initNoticeBarScroll()
  }

  setText (text) {
    const noticebar =  this.options.context;
    noticebar.initNoticeBarScroll();
    noticebar.setData({
      text: text
    })
  }

  resetData (options={}) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];
    const noticebar = ctx.selectComponent(options.ele);
    const newObj = Object.assign({}, options)
    delete newObj.ele
    this.options.context = noticebar
    noticebar.setData(newObj)
    noticebar.initNoticeBarScroll()
  }
}