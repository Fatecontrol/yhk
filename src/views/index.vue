<template>
    <div>
        <h1>首页</h1>
        {{ Date.parse("2023/6/15") }}
        <p> {{ new Date().getTime() }} </p>
        <h1>{{ msg }}</h1>
    </div>
</template>
    
<script lang="ts" setup>
import { ref } from 'vue'
const msg = ref('')
const downTime = () => {
    const timer = Date.parse("2023/10/13 0:00:00") - new Date().getTime()
    const days = Math.floor(timer / 1000 / 60 / 60 / 24)
    const hours = Math.floor(timer / 1000 / 60 / 60 % 24)
    const mins = Math.floor(timer / 1000 / 60 % 60)
    const sed = Math.floor(timer / 1000 % 60)

    msg.value = `距离放学还剩${days}天${hours}时${mins}分${sed}秒`

    //  console.log(`距离假期还剩${days}天${hours}时${mins}分${sed}秒`);

}
downTime()
setInterval(() => {
    downTime()
}, 1000)


</script>
    
<style lang='scss' scoped>
.before{
    transform: frontFlipDown 1s linear;
}
@keyframes frontFlipDown {
    0%{
        translate: -100%;
    }
    100%{
        translate: 0;
    }
}
</style>