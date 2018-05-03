Component({
  data: {
    show: false,
    message: ''
  },
  methods: {
    show(message){
      if (message) {
        const show = true
        this.setData({show, message})
      }
    },
    clear(){
      const show = false
      const message = ''
      this.setData({show, message})
    }
  }
})