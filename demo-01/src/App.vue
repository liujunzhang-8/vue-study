<template>
  <div id="app">
    <!-- <h1>插值语法</h1>
    <h3>Hello {{ message }}</h3>
    <hr />
    <h1>指令语法</h1>
    <a :href="url">点击去百度</a> -->
    <!-- 单向数据绑定：<input type="text" v-bind:value="text">
    <hr />
    双向数据绑定：<input type="text" v-model="text"> -->
    <h2>欢迎学习 {{ name }}</h2>
    <button @click="showInfo1">点击提示1</button>
    <button @click="showInfo2(66, $event)">点击提示2</button>
  </div>
</template>

<script>
/**
 * 初识Vue：
 *  1. 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
 *  2. root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
 *  3. root容器里的代码被称为【Vue模板】；
 *  4. Vue实例和容器是一一对应的；
 *  5. 真实开发中只有一个Vue实例，并且会配合着组件一起使用；
 *  6. {{xxx}} 中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
 *  7. 一旦data中的数据发生改变，那么模板中用到该数据的地方也会自动更新；
 *  
 *  ⚠️ 注意区分：js表达式 和 js代码(语句)
 *    1. 表达式：一个表达式会生成一个值，可以放在任何一个需要值的地方：
 *      (1). a
 *      (2). a+b
 *      (3). demo(1)
 *      (4). x === y ? 'a' : 'b'
 *    2. js代码(语句)
 *      (1). if(){}
 *      (2). for(){}
 * 
 * Vue模板语法有2大类：
 *  1. 插值语法：
 *    功能：用于解析标签体内容；
 *    写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性；
 *  2. 指令语法：
 *    功能：用于解析标签(包括：标签属性、标签体内容、绑定事件......)；
 *    举例：v-bind:href="xxx" 或 简写为 :href="xxx"，xxx同样要写js表达式，且可以直接读取到data中的所有属性；
 *    备注：Vue中有很多的指令，且形式都是：v-？？？，此处我们只是拿v-bind举个🌰
 * 
 * Vue中有两种数据绑定的方式：
 *  1. 单向绑定(v-bind)：数据只能从data流向页面；
 *  2. 双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。
 *  备注：
 *    1. 双向绑定一般都应用在表单元素上(如：input、select等)；
 *    2. v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值
 * 
 * data与el有2种写法：
 *  1. el有2种写法：
 *    (1). new Vue 时配置el属性。
 *    (2). 先创建Vue实例，随后再通过vm.$mount('#root') 指定el的值。
 *  2. data有2种写法：
 *    (1). 对象式
 *    (2). 函数式
 *    如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。
 *  3. 一个重要的原则：
 *    由 Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。
 * 
 * 数据代理：
 *  1. Vue中的数据代理：
 *    通过vm对象来代理data对象中属性的操作(读/写)
 *  2. Vue中数据代理的好处：
 *    更加方便的操作data中的数据
 *  3. 基本原理：
 *    通过Object.defineProperty()把data对象中所有属性添加到vm上
 *    为每一个添加到vm上的属性，都指定一个getter/setter。
 *    在getter/setter内部去操作(读/写)data中对应的属性。
 *  
 * 事件的基本使用：
 *  1. 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
 *  2. 事件的回调需要配置在methods对象中，最终会在vm上；
 *  3. methods中配置的函数，不要用箭头函数！否则this就不是vm了；
 *  4. methods中配置的函数，都是被Vue所管理的函数，this指向是vm 或 组件实例对象；
 *  5. @click= "demo" 和 @click= "demo($event)" 效果一致，但后者可以传参
 */
export default {
  name: 'App',
  components: {},
  data() { // data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
    return {
      name: 'vuejs',
      // url: 'https://www.baidu.com'
      // text: '中国移动'
      number: 18,
      person: {
        name: '张三',
        sex: '男'
      }
    }
  },
  methods: {
    showInfo1() {
      alert('welcome study vuejs')
    },
    showInfo2(number, a) {
      console.log(number, a);
      alert('welcome study vuejs!!!')
    }
  },
  created() {
    window.person = Object.defineProperty(this.person, 'age', {
      get() {
        console.log('有人读取age属性了');
        return this.number
      },
      set(value) {
        console.log('有人修改了age属性，且值是', value);
        this.number = value
      }
    })
  }
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
