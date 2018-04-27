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
    _handleImgLoaded(e){
      let {url, placehold} = this.data
      placehold = url
      this.setData({placehold})
      this.triggerEvent('imgloaded', e)
    },
    _handleImgError(e){
      this.triggerEvent('imgerror', e)
    }
  }
})