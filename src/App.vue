<template>
  <n-loading-bar-provider>
    <n-message-provider>
  <PageHeader></PageHeader>
  <router-view></router-view>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script>
import PageHeader from "./views/PageHeader"

export default {
  name: 'Site',
  components: {
    PageHeader
  },mounted() {
  },
  setup () {

}}
</script>
