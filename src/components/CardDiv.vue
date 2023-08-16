<template>
  <div class="card" :id="props.id" @click="switchAnimate">
    <form class="form" @submit.prevent="
      cheakVerify(emit);
    watch(() => props.verified, () => {
      postForm(username, password, _this, verified);
    })
      ">
      <h1 id="heading" style="text-transform: capitalize;">
        <slot>login</slot>
      </h1>
      <div class="field">
        <InputBox text="Username" name="Username" v-model="username"></InputBox>
      </div>
      <div class="field">
        <InputBox text="Password" name="Password" v-model="password">Password</InputBox>
      </div>

      <div class="btn">
        <button class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<slot>Login</slot>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </div>
    </form>
  </div>
</template>

<script setup>
// vue 基本
import { ref, getCurrentInstance, watch, onMounted } from 'vue'

// compentents 组件
import InputBox from "@/components/InputBox.vue"

// 本地库
import { cheakVerify, postForm, switchAnimate } from './js/CardDiv_js'


// 第三方库
import $ from "jquery";
import { ElMessage } from 'element-plus'


var username, password
var idSet = 'back'

const { proxy, ctx, emit, slots } = getCurrentInstance()
const _this = ctx

const props = defineProps({
  id: String,
  globalMsg: Object,
  showVerify: Boolean,
  verified: Boolean
});

defineEmits(['update:globalMsg', 'update:showVerify', 'updata:verified'])

onMounted(() => {

})

</script>

<style>
.card {
  position: absolute;
  background-image: linear-gradient(163deg, #ffffff 0%, #3700ff 100%);
  border-radius: 22px;
  transition: all .3s;
  opacity: 0.95;
  backface-visibility: hidden;
  box-shadow: 0px 0px 30px 1px rgba(126, 126, 126, 0.3);
  /* 底部元素不可见 */
}


.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}


.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 2em;
  background-color: #171717;
  border-radius: 20px;

  min-height: 300px;
}

#heading {
  text-align: left;
  margin-top: 1em;
  color: rgb(0, 255, 200);
}

.field {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;

}

.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: rgb(0, 255, 200);
}

.input-field {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: rgb(0, 255, 200);
}

.form .btn {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5em;
}

.button1 {
  padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.1em;
  border-radius: 5px;
  margin-right: 0.5em;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(0, 0, 0);
}

.button1:hover {
  background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
  color: rgb(0, 255, 200);
}

.button2 {
  padding: 0.5em;
  padding-left: 2.3em;
  padding-right: 2.3em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(0, 0, 0);
}

.button2:hover {
  background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
  color: rgb(0, 255, 200);
}

.button1,
.button2 {
  margin-bottom: 3em;

}
</style>./js/postForm.js