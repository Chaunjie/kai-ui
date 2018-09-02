Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    imgList: {  // 上传图片列表
      type: Array,
      value: [],
      observer(currentValue) {
        this.setData({
          count: currentValue.length
        })
      }
    },
    imgWidth: {  // 宽度
      type: [Number, String],
      value: 90
    },
    total: {  // 可上传图片总数
      type: Number,
      value: 0
    },
    preview: {
      type: Boolean,
      value: true
    },
    showClose: {
      type: Boolean,
      value: true
    },
    imgCount: {
      type: Number,
      value: 1
    }
  },

  data: {
    count: 1
  },

  methods: {
    previewImg (e) {
      const index = e.currentTarget.dataset.index
      const { imgList, preview } = this.data
      const cur = imgList[index]
      if (preview) {
        wx.previewImage({
          current: cur, 
          urls: imgList
        })
      }
    },
    removeImg (e) {
      const index = e.currentTarget.dataset.index
      this.triggerEvent('remove', index)
    },
    upLoad (e) {
      const { imgCount, imgList, total } = this.data
      const count = total - imgList.length >= imgCount ? imgCount : total - imgList.length
      wx.chooseImage({
        count: count,
        success: (res) => {
          const filePath = res.tempFilePaths
          this.triggerEvent('add', filePath)
        }
      })
    }
  }
})
