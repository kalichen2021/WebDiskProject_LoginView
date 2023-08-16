import Mock from 'mockjs'
import CryptoJS from 'crypto-js'
import { sleep } from '@/Lib.js'


const userInfo = {
  // 123456
  'user': "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
  // password
  'username': "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
}

//三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
const unhash = ['123456', 'password']
var d = []
Mock.mock("/login", "post", (options) => {
  var msg, text, code, type
  const data = JSON.parse(options.body)
  if (data.type == 'login') {
    var username = data.data.username
    var password = CryptoJS.SHA256(data.data.password).toString()

    if (userInfo[username] == password) {
      text = '登录成功'
      type = 'success'
      code = 200
    } else {
      text = '登录失败'
      type = 'error'
      code = 400
    }
    msg = { text, code, type }
    console.log(username, password)
    return msg
  } else if (data.type == 'verify') {
    console.log("haspost")
    console.log(data.data.mouseAxiosList)
    return { 'code': 200 }

  }
})

// Mock.mock("/register", "post", (options) => {
//   var msg = '不好意思，该功能暂不开放，请期待'
//   return { 'text': msg }
// })

// Mock.mock("/", "post", (options) => {
//   const data = JSON.parse(options.body)
  // console.log("haspost")
  // console.log(data.mouseAxiosList)
  // return { 'code': 200 }
// })