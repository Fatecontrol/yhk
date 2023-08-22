<template>
    <div class="bottom">
        <nav>
            <div class="item" v-for="item,index in list" :key="index" @click="change(index)">
                <img :src="acitve==index?item.activeIcon:item.icon " alt="">
                <div :class="{cur:acitve==index}">{{ item.name }}</div>
            </div>
        </nav>
    </div>
</template>
    
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const acitve = ref(0)
const change = (i:number)=>{
    acitve.value = i
    router.push(list.value[i].path)
}
const list = ref([
    {
        name: '首页',
        path: '/index',
        icon: require('../assets/home.png'),
        activeIcon: require('../assets/homeFull.png')
    },{
        name: '分类',
        path: '/cate',
        icon: require('../assets/cate.png'),
        activeIcon: require('../assets/cateFull.png')
    },{
        name: '购物车',
        path: '/cart',
        icon: require('../assets/shop.png'),
        activeIcon: require('../assets/shopFull.png')
    }, {
        name: '我的',
        path: '/mine',
        icon: require('../assets/user.png'),
        activeIcon: require('../assets/userFull.png')
    }
])


</script>
    
<style lang='scss' scoped>
.bottom {
    width: 100%;
    position: fixed;
    bottom: 0;

    nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .item{
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .cur{
                color: #f00;
            }
        }
    }   
}
</style>