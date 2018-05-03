import Toast from '../../components/toast/bToast'
const app = getApp()

Page({
  data: {},
  _showToast(){
    Toast({
      message: '这是一个toast',
      selector: '#btoast'
    })
  }
})
