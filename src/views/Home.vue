<template>
  <div class="home" id="Home">
    <n-layout has-sider  style="height: 100%;"  position="absolute">
    <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="0"
        :width="240"
        :collapsed="collapsed"
        :native-scrollbar="false"
        show-trigger="bar"
        content-style="padding-top:0px; "
        bordered
        @collapse="collapsed= true"
        @expand="collapsed = false"
    >
      <n-button-group  size="large">
        <n-button @click="allmap=items">
          全部
        </n-button>
        <n-button  @click="allmap=allmap=items.filter(item=>item.type=='点图')">
          点图
        </n-button>
        <n-button ghost round @click="allmap=allmap=items.filter(item=>item.type=='球图')">
          球图
        </n-button>
      </n-button-group>
      <n-menu @update:value="handleUpdateValue" :options="maptype " :render-label="renderMenuLabel" />
    </n-layout-sider>

    <n-layout   content-style="padding: 30px;" embedded :native-scrollbar="false" >
      <gameMap v-for="(map) in maptype" :key="map.key" :items="allmap.filter(item=>item.map==map.label)" :map="map"/>
    </n-layout>
    </n-layout>
  </div>
</template>

<script>
// @ is an alias to /src

import {defineComponent, h, ref} from "vue";
import gameMap from "../components/map";
import axios from "axios";
const maptype = [
      {label:'66号公路',key:'1'},
      {label:'阿努比斯神庙',key:'2'},
      {label:'阿育陀耶',key:'3'},
      {label:'艾兴瓦尔德',key:'4'},
      {label:'巴黎',key:'5'},
      {label:'暴雪世界',key:'6'},
      {label:'城堡',key:'7'},
      {label:'地平线月球基地',key:'8'},
      {label:'多拉多',key:'9'},
      {label:'釜山',key:'10'},
      {label:'国王大道',key:'11'},
      {label:'哈瓦那',key:'12'},
      {label:'好莱坞',key:'13'},
      {label:'黑森林',key:'14'},
      {label:'花村',key:'15'},
      {label:'吉拉德堡',key:'16'},
      {label:'监测站：直布罗陀',key:'17'},
      {label:'漓江塔',key:'18'},
      {label:'里阿尔托',key:'19'},
      {label:'绿洲城',key:'20'},
      {label:'墓园',key:'21'},
      {label:'尼泊尔',key:'22'},
      {label:'努巴尼',key:'23'},
      {label:'佩特拉',key:'24'},
      {label:'生态监测站：南极洲',key:'25'},
      {label:'沃斯卡娅工业区',key:'26'},
      {label:'伊利奥斯',key:'27'},
      {label:'渣客镇',key:'28'},
      {label:'圣诞节国王大道',key:'29'}
    ]

export default defineComponent({
  name: 'Home',
  components: {
    gameMap
  },data(){
    return{
      items:[],
      allmap:[],
      value:String,
      place:String
    }
  },
  setup(){

    return{
      collapsed: ref(false  ),
      maptype,
      renderMenuLabel(option){
          return h('a', { href: "#map"+option.key }, option.label)
      }

    }
  },computed:{


  },mounted(){
  axios.get('http://121.36.54.93:3000/').then(res=>(this.items=res.data.data,
      this.allmap=this.items
  ))
  this.$forceUpdate()
    },methods: {

  },updated(){

  }}

)
</script>

<style scoped>
.home{
  height: calc(100vh - 65px);
  position: relative;
 }

</style>