<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-15 08:34:03
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-15 08:41:27
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <h1 v-show="isShow" class="go">你好啊！</h1>
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
.come {
  animation: atguigu 1s;
}

.go {
  animation: atguigu 1s reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>