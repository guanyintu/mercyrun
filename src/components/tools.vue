<template>
<n-space >
  <n-card title="存档" size="large"> 卡片内容 </n-card>
</n-space>
</template>

<script>
import {defineComponent} from "vue";
//const press=[{"近战": "按钮被按下(事件玩家, 按钮(近身攻击))"},{}]
//const save="变量{玩家:{num}: Save}规则(\"规则 96\"){事件{持续 - 每名玩家;双方;全部;}条件{按钮被按下(事件玩家, 按钮(近身攻击)) == 真;}动作{事件玩家.Save = 所选位置(事件玩家);}}规则(\"规则 97\"){事件{持续 - 每名玩家;双方;全部;}条件{按钮被按下(事件玩家, 按钮(装填)) == 真;}动作{传送(事件玩家, 事件玩家.Save);}}"
export default defineComponent({
  name: "tools"
})
</script>

<style scoped>

</style>