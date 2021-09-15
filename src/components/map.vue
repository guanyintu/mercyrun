<template>
  <n-message-provider>

<div class="map" :id="'map'+map.key">
  <n-h1 ><n-text type="primary">{{map.label}}</n-text></n-h1>
  <n-grid cols="1 s:1 m:2 l:3 xl:4 2xl:4" responsive="screen" :x-gap="12" :y-gap="8">
    <n-grid-item v-for="item in items" v-bind:key="item.id">
      <n-card  size="medium" hoverable style="height:100%" >
      <n-thing>
        <template #header > {{item.title}} </template>
        <template #header-extra > <a  title :data-clipboard-text="item.id" class="code" @click="copy">{{item.id}}</a></template>
        <template #description >  <n-space>
          <n-tag type="success" size="small" round>
            {{item.type}}
          </n-tag>
          <n-tag type="success" size="small" round>
            {{item.map}}
          </n-tag>
          <n-tag type="success" size="small" round>
            {{item.author}}
          </n-tag>
        </n-space> </template>
        {{ item.info }}
      </n-thing>
        <template #footer > 难度：<n-rate readonly :default-value="item.difficulty" /> </template>
      </n-card>
    </n-grid-item>
  </n-grid>
</div>
  </n-message-provider>
</template>

<script>
import Clipboard from 'clipboard'
import { useMessage } from 'naive-ui'
import {defineComponent} from "vue";
// import { CashOutline as CashIcon } from '@vicons/ionicons5'
 const copy = ()=> {

   const clipboard = new Clipboard('.code');
   console.log(clipboard)
   clipboard.on('success', () => {
    console.log('复制成功')
     window.$message.success(
         '复制成功！o(≧▽≦)o',{
       closable: true
     }
     )
     clipboard.destroy()
    //  释放内存
  })
  clipboard.on('error', () =>{
    // 不支持复制
    console.log('该浏览器不支持复制')
    window.$message.error(
        '复制失败，可能该浏览器不支持！(╯︵╰,)',{
          closable: true
        }
    )
    clipboard.destroy()
    // 释放内存
  })
}

export default  defineComponent({
  name: "gameMap",
  // components: {
  //   CashIcon
  // },
  props: {
    items: Object,
    map:Object
  },
  setup(){
    window.$message = useMessage()

  return{
      copy
  }
},
})
</script>

<style scoped>

a {
  color: blue; cursor: pointer; }
</style>