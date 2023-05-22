<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-22 11:11:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-22 11:21:12
-->
<template>
  <div class='son'>
    <h2>这是Son组件(孙组件), {{ car.name }} --- {{ car.price }}</h2>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  name: 'VSon',
  setup() {
    let car = inject('car')

    return {
      car
    }
  }
}

</script>
<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>