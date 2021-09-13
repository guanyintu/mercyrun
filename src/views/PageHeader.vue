<template>
  <n-loading-bar-provider>

  <n-layout-header  bordered="true" class="nav" >
    <n-text tag="div" class="ui-logo" :depth="1" >
      <router-link to="/" ><img src="https://overwatch.nosdn.127.net/1/assets/images/hero/mercy/ability-guardian-angel/icon-ability.png"/></router-link>
      <span >天使跑酷</span>
    </n-text>
    <div class="nav-menu">
      <n-menu
          mode="horizontal"
          :value="menuValue"
          :options="menuOptions"
          :render-label="renderMenuLabel"
      />
    </div>
  </n-layout-header>
  </n-loading-bar-provider>
</template>
<script>
import {defineComponent, h, onMounted, ref} from "vue";
import { RouterLink } from 'vue-router'
import {useLoadingBar} from "naive-ui";
import {loadingBarApiRef} from "../router";

const menuOptions=[
    {
      label:'首页',
      key:'Home',
      path:"/"},
    {
      label:'工具',
      key:'Tool',
      path:"/tool"
    },
    {
      label:'论坛',
      key:'BBS',
      path:"/BBS"
    }
]
export default defineComponent({
  setup(){
    const loadingBar = useLoadingBar()
    onMounted(() => {
      loadingBarApiRef.value = loadingBar
      loadingBar.finish()
    })
    return{
      menuValue:ref(null),
      menuOptions,
      renderMenuLabel(options){
        return h(RouterLink,{to:options.path},{default:()=>options.label})
      }
    }
    }

})
</script>
<style scoped>
.nav {
  display: grid;
  grid-template-rows: 64px;
  align-items: center;
  padding: 0 32px;
  grid-template-columns: auto 1fr auto;

}
.ui-logo{
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
}
.ui-logo  img{
  height: 40px;
  margin-right: 12px;
  width:40px;
  filter:drop-shadow(0 0 1px #ff004a)
}
</style>