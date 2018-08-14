Component({
  properties: {
    // 图片url
    url: {
      type: String,
      value: ''
    },
    // 占位图url
    placehold: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    }
  },
  methods: {
    imgLoadedHandler (e) {
      let { url, placehold } = this.data
      placehold = url
      this.setData({ placehold })
      this.triggerEvent('imgloaded', e)
    },
    imgErrorHandler (e) {
      this.triggerEvent('imgerror', e)
    }
  }
})
