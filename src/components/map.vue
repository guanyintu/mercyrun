<template>
  <n-message-provider>
<div class="map">
  <n-grid cols="1 s:1 m:2 l:3 xl:4 2xl:5" responsive="screen" :x-gap="12" :y-gap="8">
    <n-grid-item v-for="item in items" v-bind:key="item.id">
      <n-card  size="medium" hoverable="true">
      <n-thing>
        <template #avatar>
          <n-avatar>
            <n-icon>
              <cash-icon />
            </n-icon>
          </n-avatar>
        </template>
        <template #header > 货币 </template>
        <template #header-extra > <a  title :data-clipboard-text="item.id" class="code" @click="copy">{{item.id}}</a></template>
        <template #description >  <n-space>
          <n-tag type="success" size="small" round v-for="tag in item.tags" v-bind:key="item.tags.indexOf(tag)">
            {{tag}}
          </n-tag>
        </n-space> </template>
        货币是为了提高交易效率而用于交换的中介商品。货币有多种形式，如贝壳粮食等自然物、金属纸张等加工品、银行卡信用卡等磁条卡、移动支付加密货币等APP。
      </n-thing>
      </n-card>
<!--      <n-card :title="item.title" size="medium">-->
<!--        <template #header-extra><a  title :data-clipboard-text="item.id" class="code" @click="copy">{{item.id}}</a> </template>-->
<!--        卡片内容-->
<!--        <template #footer> #footer </template></n-card>-->
    </n-grid-item>
  </n-grid>
</div>
  </n-message-provider>
</template>

<script>
import Clipboard from 'clipboard'
import { useMessage } from 'naive-ui'
import { CashOutline as CashIcon } from '@vicons/ionicons5'
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
export default {
  name: "map", components: {
    CashIcon
  },

  setup(){
    window.$message = useMessage()
  return{
    copy,
    items:[{id:"121t4",title:"天使跑酷点图",author:"有人",map:"阿努比斯",type:"点图",difficulty:1,like:true,Collect:true,date:"2018-05-01",tags:["新图","推荐"]},{id:"1221t4",title:"天使跑酷点图",author:"有人",map:"阿努比斯",type:"点图",difficulty:1,like:true,Collect:true,date:"2018-05-01",tags:["新图"]}]
  }
}}
</script>

<style scoped>
.map{
  height: 100%;
  background-color:whitesmoke;

    }
a {
  color: blue; cursor: pointer; }
</style>