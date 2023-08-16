<template>
  <div id="index">
    <verifyDiv v-if="showVerify" v-model:verified="verified"></verifyDiv>
    <switchBottom style="position: absolute; top: 20px; left: 20px;" @click="console.log(isVerify)" />
    <CardDiv v-for="(name, id) in comDict" :id='id' v-model:globalMsg="globalMsg" v-model:showVerify="showVerify"
      v-model:verified="verified">
      {{ name }}
    </CardDiv>
  </div>
</template>

<script setup>
// vue 基本
import { onMounted, defineComponent, watch, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// compentents 组件
import CardDiv from "@/components/CardDiv.vue"
import switchBottom from '@/components/switchBottom.vue'
import verifyDiv from '@/components/verifyDiv.vue'


// 第三方库
import $ from "jquery";
import { ElMessage } from 'element-plus'
import { useDark, useToggle } from '@vueuse/core'
import axios from 'axios'


const isDark = useDark()
const toggleDark = useToggle(isDark)

var comDict = {
  /*
    <id> : <name> 
    <css Id名> : <卡片名字>
  */
  'front': 'login',
  'back': 'register',

}
var globalMsg = ref({ 'globalMsg': '' })
var verified = ref(null)
var showVerify = ref(false)

const switchFunc = () => {
  setTimeout(() => {
    toggleDark()
  }, 500);
}

onMounted(() => {
})
watch(globalMsg, (newVal) => {
  console.log(newVal)
  var msg = newVal.text
  ElMessage({
    showClose: true,
    message: newVal.text,
    type: newVal.type,
  })
})
watch(showVerify, (newVal) => {
  if (showVerify) {
    $('body,html').css('backdrop-filter', 'blur(20px)');
  } else {
    $('body,html').css('backdrop-filter', '');
  }
})

// watch(showVerify, (newVal))
// watch(verified, (newVal) => {
//   console.log(newVal)
//   var msg = newVal.mouseAxiosList
//   ElMessage({
//     showClose: true,
//     message: newVal.mouseAxiosList,
//     type: newVal.type,
//   })
// })


</script>

<style>
#index {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  transform-style: preserve-3d;
  perspective: 1200px;
}

#front {
  translate: 20px 30px 60px;
}

#back {
  translate: -20px -30px -60px;
}

#addComponent {
  width: 60px;
  height: 30px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: aliceblue;

  translate: 0 0 1000px;
}
</style>
