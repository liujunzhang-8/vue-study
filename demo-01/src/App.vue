<template>
  <div id="app">
  <!-- 遍历数组 -->
  <h2>人员列表(遍历数组)</h2>
  <input type="text" placeholder="请输入名字" v-model="keyWord">
  <button @click="sortType=2">年龄升序</button>
  <button @click="sortType=1">年龄降序</button>
  <button @click="sortType=0">原顺序</button>
  <ul>
    <li v-for="p in filPersons" :key="p.id">{{p.name}}-{{p.age}}</li>
  </ul>
  <!-- 遍历对象 -->
  <!-- <h2>汽车列表(遍历对象)</h2>
  <ul>
    <li v-for="(value, index) in car" :key="index">{{value}}-{{index}}</li>
  </ul> -->
  </div>
</template>

<script>
/**
 * v-for指令
 *  1. 用于展示列表数据
 *  2. 语法：v-for="(item, index) in xxx" :key="yyy"
 *  3. 可遍历：数组、对象、字符串(用的很少)、指定次数(用的很少)
 * 
 * 面试题：react、vue中的key有什么作用？(key内部原理)
 *  1. 虚拟DOM中key的作用： 
 *    key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】，随后Vue进行
 *   【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
 * 
 *  2. 对比规则：
 *    (1). 旧虚拟DOM中找到了与新虚拟DOM相同的key：
 *      若虚拟DOM中内容没变，直接使用之前的真实DOM！
 *      若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
 *    (2). 旧虚拟DOM中未找到与新虚拟DOM相同的key
 *      创建新的真实DOM，随后渲染到页面
 * 
 *  3. 用index作为key可能引发的问题：
 *    (1). 若对数据进行：逆序添加、逆序删除等破坏顺序的操作：
 *      会产生没有必要的真实DOM更新 ==> 界面效果没问题，但效率低。
 *    (2). 如果结构中还包含输入类的DOM：
 *      会产生错误的DOM更新 ==> 界面有问题。
 * 
 *  4. 开发中如何选择key？
 *    (1). 最好使用每条数据的唯一标识作为key，比如id，手机号，学号等唯一值。
 *    (2). 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。
 */
export default {
  name: 'App',
  data() {
    return {
      persons: [
        {id: '001', name: '张三', age: 38},
        {id: '002', name: '李四', age: 20},
        {id: '003', name: '王五', age: 21},
      ],
      // filPersons: [],
      keyWord: '',
      sortType: 0, // 0原顺序、1降序、2升序
    }
  },
  computed: {
    filPersons(){
      const arr = this.persons.filter((p) => {
        return p.name.indexOf(this.keyWord) !== -1
      })
      // 判断一下是否需要排序
      if(this.sortType) {
        arr.sort((p1, p2) => {
          return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age
        })
      }
      return arr
    }
  },
  watch: {
    // keyWord: {
    //   immediate: true,
    //   handler(val) {
    //       this.filPersons = this.persons.filter((p) => {
    //         return p.name.indexOf(val) !== -1
    //       })
    //   }
    // }
  },
  methods: {
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
