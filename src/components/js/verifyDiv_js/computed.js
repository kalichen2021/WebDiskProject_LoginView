import { computed } from "vue"

const sliderToLeftStyle = computed(() => (slideWidth) => {
  return {
    left: slideWidth + 'px'
  }
})

const sliderLeftWidthStyle = computed(() => (slideWidth) => {
  return {
    width: slideWidth + 20 + 'px'
  }
})

const verifyMsg = computed(() => (verified) => {
  var msg
  switch (verified) {
    case true:
      msg = '验证成功'
      break 
    case false:
      msg = '验证失败'
      break 
    case null:
      msg = '加载中'
      break 
  }
  console.log(msg, verified)
  return msg
})



export { sliderToLeftStyle, sliderLeftWidthStyle, verifyMsg}