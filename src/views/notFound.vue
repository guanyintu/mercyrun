<template>
  <n-layout class="page">
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬" size="huge">
    <template #footer>
      <n-button @click="goto">找点乐子吧</n-button>
    </template>
  </n-result>
  </n-layout>
</template>

<script>

export default {
  name: "notFound",
  setup(){
    const goto=()=>{
      window.location.href ='https://link.ofo.moe/useless'
    }
    return{
      goto
      }
  }
}
</script>

<style scoped>
.page{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
</style>