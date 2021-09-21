<template>
<div class="tool">
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
      <n-menu @update:value="handleUpdateValue" :options="toolsmune " :render-label="renderMenuLabel" />
    </n-layout-sider>

    <n-layout   content-style="padding: 30px;" embedded :native-scrollbar="false" >
      <n-back-top :right="100" />
      <tools></tools>
    </n-layout>
  </n-layout>
</div>
</template>

<script>
import {defineComponent} from "vue";
import tools from "@/components/tools";
const toolsmune=[
    {label:"存档",key:1}]
export default defineComponent ({
  name: "tool",components:{tools},setup(){
    return{toolsmune}
  }
})
</script>

<style scoped>
.tool{
  position:relative;
  height: calc(100vh - 65px);
}
</style>