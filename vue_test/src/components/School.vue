<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 10:41:57
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-10 11:06:43
-->
<template>
  <div class='page-frame'>
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'singleSchool',
  data() {
    return {
      schoolName: '你大爷',
      address: '上海宝山',
    };
  },

  created () {

  },

  computed: {},

  mounted () {},

  methods: {

  },
}

</script>
<style>
</style>