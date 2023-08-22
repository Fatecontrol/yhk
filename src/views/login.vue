<template>
    <div class="login">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <div class="box">
                    <van-field v-model="password" type="password" name="验证码" label="密码" placeholder="验证码"
                        :rules="[{ required: true, message: '请填写验证码' }]" />
                    <button class="code" @click="downTime" :disabled="count < 60">
                        {{ msg }}
                    </button>
                </div>
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>
    
<script lang="ts" setup>
import { ref } from 'vue';
import cookies from 'js-cookie'
const msg = ref('获取验证码')
const count = ref(60)
const username = ref('');
const password = ref('');
const onSubmit = (values: any) => {
    console.log('submit', values);
};
let timer: any
const downTime = () => {
    timer = setInterval(() => {
        count.value--

        if (count.value == 0) {
            count.value = 60
            msg.value = '获取验证码'
            clearInterval(timer)
        } else {
            msg.value = `剩余${count.value}s`
            let now = new Date().getTime()
            let time = new Date(now + count.value * 1000)
            cookies.set('count', count.value, {
                expires: time
            })
        }

    }, 1000)
}

if (cookies.get('count')) {
    count.value = cookies.get('count')
    downTime()
}

</script>
    
<style lang='scss' scoped>
.box {
    display: flex;
    align-items: center;

    .code {
        width: 140px;
        background-color: #f1f1f1;
        padding: 5px;
        border: none;
    }
}
</style>