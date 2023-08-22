<template>
    <div>
        <div id="flexContainer">
            <!--时钟整体背景-->
            <div id="clockContainer">


                <div class="flipNumber" style="margin-left: 0;">
                    <div class="time front" data-number="0"></div>
                    <div class="time back" data-number="1"></div>
                </div>

                <div class="flipNumber">
                    <div class="time front" data-number="0"></div>
                    <div class="time back" data-number="1"></div>
                </div>

                <div class="divide">:</div>

                <div class="flipNumber" style="margin-left: 0;">
                    <div class="time front" data-number="0"></div>
                    <div class="time back" data-number="1"></div>
                </div>

                <div class="flipNumber">
                    <div class="time front" data-number="0"></div>
                    <div class="time back" data-number="1"></div>
                </div>

                <div class="divide second">:</div>

                <div class="flipNumber second">
                    <div class="time front" data-number="0"></div>
                    <div class="time back" data-number=" 1"></div>
                </div>

                <div class="flipNumber second">
                    <div class="time front" data-number="0"></div>
                    <div class="time back" data-number=" 1"></div>
                </div>

            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue'
const num = ref(1)
const msg = ref('')
const downTime = () => {
    const timer = Date.parse("2023/6/14 21:00:00") - new Date().getTime()
    const days = Math.floor(timer / 1000 / 60 / 60 / 24)
    const hours = Math.floor(timer / 1000 / 60 / 60 % 24)
    const mins = Math.floor(timer / 1000 / 60 % 60)
    const sed = Math.floor(timer / 1000 % 60)

    msg.value = `距离放学还剩${days}天${hours}时${mins}分${sed}秒`

    //  console.log(`距离假期还剩${days}天${hours}时${mins}分${sed}秒`);

}
downTime()
setInterval(() => {
   num.value++
}, 1000)
</script>
    
<style lang='scss' scoped>
#flexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #191919;
}

// 时钟背景

#clockContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 350px;
    border: 5px solid #5d5d5d;
    border-radius: 15px;
    background: #242424;
}


// 翻页数字容器
.flipNumber {
    position: relative;
    box-sizing: border-box;
    width: 14%;
    height: 300px;
    margin-left: 1.4%;
    text-align: center;
    font-size: 300px;
    line-height: 300px;
    background: #ffffff;
    box-shadow: 1px 1px 5px black;
}


.divide {
    // width: 2%;
    height: 100px;
    line-height: 100px;
    margin-left: 1%;
    font-size: 120px;
    color: #717171;
    text-align: center;
}

.time::before,
.time::after {
    content: attr(data-number);
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    color: #717171;
    background: #191919;
    perspective: 100px;
    -webkit-perspective: 160px;
}

.time::before {
    top: 0;
    bottom: 50%;
    border-bottom: 1px solid #717171;
}


.time::after {
    top: 50%;
    bottom: 0;
    line-height: 0;
}

// 翻转前
.flipNumber .front::after,
.flipNumber .back::before {
    z-index: 1;
}

.flipNumber .back::after {
    z-index: 2;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    transform: rotatex(.5turn);
    /*转兴圈*/
    -webkit-transform: rotatex(0.5turn);
}

.flipNumber .front::before {
    z-index: 3;
}


// 翻转后
.flipNumber.running .front::before {
    transform-origin: center bottom;
    -webkit-transform-origin: center bottom;
    animation: frontFlipDown .6s ease-in-out;
    -webkit-animation: frontFlipDown .6s ease-in-out;
    box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
    backface-visibility: hidden;
    /*隐藏背面*/
    -webkit-backface-visibility: hidden;
}

.flipNumber.running .back::after {
    animation: backFlipDown 0.6s ease-in-out;
    -webkit-animation: backFlipDown 0.6s ease-in-out;
}

@keyframes frontFlipDown {
    to {
        transform: rotatex(0.5turn);
    }
}

@keyframes backFlipDown {
    to {
        transform: rotatex(0);
    }
}

@-webkit-keyframes frontFlipDown {
    to {
        -webkit-transform: rotatex(0.5turn);
    }
}

@-webkit-keyframes backFlipDown {
    to {
        -webkit-transform: rotatex(0);
    }
}
</style>