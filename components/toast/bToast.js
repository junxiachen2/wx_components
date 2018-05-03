let timeoutData = {
  timeoutId: 0,
  toastCtx: null
}

const warn = (msg) => {
  console.warn(msg)
}

/**
 * Toast
 * @param options  {selector:element,message:string,duration:Number}
 * @param pageCtx
 * @constructor
 */

function Toast(options = {}, pageCtx) {
  let ctx = pageCtx
  if (!ctx) {
    const pages = getCurrentPages()
    ctx = pages[pages.length - 1]
  }
  const toastCtx = ctx.selectComponent(options.selector)

  if (!toastCtx) {
    warn('无法找到对应的toast组件,请在页面中注册并声明')
  }

  if (timeoutData.timeoutId) {
    Toast.clear()
  }
  toastCtx.show(options.message)

  const timeoutId = setTimeout(()=> {
    toastCtx.clear()
  }, options.duration || 3000)

  timeoutData = {
    timeoutId,
    toastCtx
  }
}

Toast.clear = ()=> {
  clearTimeout(timeoutData.timeoutId)
  try {
    timeoutData.toastCtx && timeoutData.toastCtx.clear()
  } catch (e) {
  }

  timeoutData = {
    timeoutId: 0,
    toastCtx: null
  }
}

export default Toast