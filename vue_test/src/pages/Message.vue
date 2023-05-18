<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-17 22:29:44
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-18 17:27:10
-->
<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link
          :to="{
            name: '详情', // 必须使用name，不可以使用path
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }} </router-link
        >&nbsp;&nbsp;
        <button @click="pushShow(m)">push查看</button>&nbsp;&nbsp;
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "VMessage",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },

  created() {},

  computed: {},

  mounted() {},

  methods: {
    pushShow(m) {
      this.$router.push({
        name: '详情', // 必须使用name，不可以使用path
        query: {
          id: m.id,
          title: m.title,
        },
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: '详情', // 必须使用name，不可以使用path
        query: {
          id: m.id,
          title: m.title,
        },
      })
    }
  },
};
</script>
<style lang='less' scoped>
</style>