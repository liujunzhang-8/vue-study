<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-22 11:11:07
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-22 11:15:05
-->
<template>
  <div class='child'>
    <h2>这是Child组件(子组件)</h2>
    <VSon />
  </div>
</template>

<script>
import VSon from './Son'
export default {
  name: 'VChild',
  components: {VSon}
}

</script>
<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>