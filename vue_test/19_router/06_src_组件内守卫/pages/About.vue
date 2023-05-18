<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-17 19:25:38
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-18 22:19:40
-->
<template>
  <div>
    <h2>这是About组件的内容</h2>
  </div>
</template>

<script>
export default {
  name: 'VAbout',
  data () {
    return {
    }
  },

  created () {

  },

  computed: {
  },

  mounted () {
    console.log('About组件挂载完毕了', this);
  },

  methods: {
  },
  beforeDestroy() {
    console.log('About组件即将被销毁了');
  },

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    if(to.meta.isAuth) { // 判断是否需要鉴权
      if(localStorage.getItem('school') === 'daxue2') {
        next()
      } else {
        alert('学校名不对，无权限查看！')
      }
    } else {
      next()
    }
  },

  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    // ...
    console.log(to, from, next);
    next()
  }
}

</script>
<style lang='less' scoped>
</style>