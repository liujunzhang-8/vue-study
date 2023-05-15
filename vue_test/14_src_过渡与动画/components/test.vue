<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-15 08:34:03
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-15 09:07:44
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VTest',
  data () {
    return {
      isShow: true
    }
  },
}

</script>
<style scoped>
h1 {
  background-color: orange;
}

/* 进入的起点、离开的终点 */ 
.hello-enter, .hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active, .hello-leave-active {
  transform: translateX(0);
}

/* 进入的终点、离开的起点 */
.hello-enter-to, .hello-leave {
  transform: translateX(0);
}

/* .v-enter-active {
  animation: atguigu 1s;
}

.v-leave-active {
  animation: atguigu 1s reverse;
} */

/* @keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
} */
</style>