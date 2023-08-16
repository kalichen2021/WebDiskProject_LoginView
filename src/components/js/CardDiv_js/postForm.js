import axios from 'axios'


const postForm = (username, password, _this, verified) => {
  if (verified) {
    const comSlot = _this.$slots.default()[0].children // slot值
    var postData = {
      'type': `${comSlot}`,
      'data': {
        'username': username,
        'password': password
      }
    }
    const customConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // axios.post(`/${comSlot}`, postData, customConfig)
    axios.post(`/login`, postData, customConfig)
      .then((res) => {
        if (res.status == '200') {
          _this.$emit('update:globalMsg', res.data)
        } else {
          console.log('netError')
        }
      })
  }
}

export { postForm }