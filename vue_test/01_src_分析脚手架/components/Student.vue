<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:04:04
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-10 11:08:04
-->
<template>
  <div>
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'singleStudent',
  data() {
    return {
      studentName: 'Grogio_Liu',
      age: 28
    }
  }

}
</script>

<style>

</style>