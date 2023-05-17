<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:29
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 19:23:03
-->
# 笔记

## 脚手架文件结构：

## 关于不同版本的Vue：

## vue.config.js配置文件：

## ref属性：
  1. 被用来给元素或子组件注册引用信息(id的替代者)
  2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
  3. 使用方式：
    打标识：<h1 ref="xxx"></h1> 或 <School ref="xxx"></School>
    获取：this.$refs.xxx

## 配置项props
  功能：让组件接收外部传过来的数据
    (1). 传递数据：
      <Demo name='xxx' />
    (2). 接收数据：
      第一种方式（只接收）：
        props: ['name']
      第二种方式（限制类型）：
        props: {
          name: Number
        }
      第三种方式（限制类型、限制必要性、指定默认值）：
        props: {
          name: {
            type: String, // 类型
            required: true, // 必要性
            default: '老王' // 默认值
          }
        }
      备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要
      修改，那么请复制props的内容到data中一份，然后去修改data中的数据。## 

## mixin(混入)
  功能：可以把多个组件共用的配置提取成一个混合对象
  使用方式：
    第一步定义混合，例如：
      {
        data() {...},
        methods: {...}
        ...
      }
    第二步使用混入，例如：
      (1). 全局混入：Vue.mixin(xxx)
      (2). 局部混入：mixins: ['xxx']

## 插件
  功能：用于增强Vue
  本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
  定义插件：
    对象.install = function (Vue, options) {
      // 1. 添加全局过滤器
      Vue.filter(...)

      // 2. 添加全局指令
      Vue.directive(...)

      // 3. 配置全局混入(合)
      Vue.mixin(...)

      // 4. 添加实例方法
      Vue.prototype.$myMethod = function () {...}
      Vue.prototype.$myProperty = xxx
    }

  使用插件：Vue.use()

## scoped样式
  1. 作用：让样式在局部生效，防止冲突。
  2. 写法：<style scoped></style>

## 总结TodoList案例
  
  1. 组件话编码流程：
    (1). 拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
    (2). 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
      1). 一个组件在用：放在组件自身即可。
      2). 一些组件在用：放在他们共同的父组件上(<span style="color: red">状态提升</span>) 
    (3). 实现交互：从绑定事件开始。

  2. props适用于：
    (1). 父组件 ==> 子组件 通信
    (2). 子组件 ==> 父组件 通信 (要求父先给子一个函数)

  3. 使用v-model时要切记：v-model 绑定的值不能是props传过来的值，因为props是不可以修改的！

  4. props传过来的若是对象类型值，修改对象中的属性时Vue不会报错，但不推荐这么做。

## webStorage
  1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

  2. 浏览器端通过Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。

  3. 相关API：
    1. `xxxxxStorage.setItem('key', 'value');`
      该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

    2. `xxxxxStorage.getItem('person');`
      该方法接受一个键名作为参数，返回键名对应的值。

    3. `xxxxxStorage.removeItem('key');`
      该方法接受一个键名作为参数，并把该键名从存储中删除。

    4. `xxxxxStorage.clear()`
      该方法会清空存储中的所有数据。

  4. 备注：
    1.SessionStorage 存储的内容会随着浏览器窗口关闭而消失。

    2. LocalStorage 存储的内容，需要手动清除才会消失。

    3. `xxxxxstorage.getItem(xxx)` 如果xxx对应的value获取不到，那么getItem的返回值是null。

    4. JSON.parse(null)的结果依然是null

## 组件的自定义事件

  1. 一种组件间通信的方式，适用于：子组件 ===> 父组件

  2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)。

  3. 绑定自定义事件：
    (1). 第一种方式，在父组件中：<Demo @atguigu='test' /> 或 <Demo v-on:atguigu='test' />
    (2). 第二种方式，在父组件中：
      ```javascript
        <Demo ref='demo' />

        ......

        mounted() {
          this.$refs.xxx.$on('atguigu', this.test)
        }
      ```
    (3). 若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法。

  4. 触发自定义事件：`this.$emit('atguigu', 数据)`

  5. 解绑自定义事件：`this.$off('atguigu')`

  6. 组件上也可以绑定原生DOM事件，需要使用`native`修饰符。

  7. 注意：通过`this.$refs.xxx.$on('atguigu', 回调)` 绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！

## 全局事件总线(GlobalEventBus)

  1. 一种组件间通信的方式，适用于任意组件间通信。

  2. 安装全局事件总线：
  ```javascript
    new Vue({
      ...
      beforeCreate() {
        Vue.prototype.$bus = this // 安装全局事件总线，$bus就是当前应用的vm
      },
      ...
    })
  ```

  3. 使用事件总线：
    (1). 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。
  ```javascript
    methods() {
      demo(data) {......}
    }
    ...
    mounted() {
      this.$bus.$on('xxx', this.demo)
    }
  ```
    (2). 提供数据：`this.$bus.$emit('xxx', 数据)`

  4. 最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。

## 消息订阅与发布(pubsub)

  1. 一种组件间通信的方式，适用于任意组件间通信。

  2. 使用步骤：
    (1). 安装pubsub：`npm i pubsub-js`  

    (2). 引入：`import pubsub from 'pubsub-js'`  

    (3). 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。  

    ```javascript
      methods() {
        demo(data) {...}
      }
      ...
      mounted() {
        this.pid = pubsub.subscribe('xxx', this.demo) // 订阅消息
      }
    ```
    
    (4). 提供数据：`pubsub.publish('xxx', 数据)`   

    (5). 最好在beforeDestroy钩子中，用`PubSub.unsubscribe(pid)`去<span style="color:red">取消订阅</span>

## nextTick
  1. 语法：`this.$nextTick(回调函数)`
  2. 作用：在下一次DOM更新结束后执行其指定的回调。
  3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## Vue封装的过渡与动画

  1. 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名。
  2. 写法：
    (1). 准备好样式：
      元素进入的样式：
        v-enter：进入的起点
        v-enter-active：进入过程中
        v-enter-to：进入的终点
      元素离开的样式：
        v-leave：离开的起点
        v-leave-active：离开过程中
        v-leave-to：离开的终点
    (2). 使用<transition></transition>包裹要过渡的元素，并配置name属性：
      ```javascript
        <transition name='hello'>
          <h1 v-show="isShow">你好啊！</h1>
        </transition>
      ```
    (3). 备注：若有多个元素需要过渡，则需要使用：<transition-group></transition-group>，且每个元素都要指定`key`值

## vue脚手架配置代理

### 方法一
  在vue.config.js中添加如下配置：
  
  ```javascript
    devServer: {
      proxy: "http://localhost:5000"
    }
  ```

  说明：
    1. 优点：配置简单，请求资源时直接发给前端(8080)即可。
    2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
    3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器(优先匹配前端资源)

### 方式二
  编写vue.config.js配置具体代理规则：
  
  ```javascript
    module.exports = {
      devServer: {
        proxy: {
          '/api': { // 匹配所有以 '/api' 开头的请求路径
            target: 'http://localhost:5000', // 代理目标的基础路径
            pathRewrite: {'^/api': ''},
            // ws: true, // 用于支持websocket
            changeOrigin: true
          }
        }，
        proxy: {
          '/api2': { // 匹配所有以 '/api2' 开头的请求路径
            target: 'http://localhost:5000', // 代理目标的基础路径
            pathRewrite: {'^/api2': ''},
            // ws: true, // 用于支持websocket
            changeOrigin: true
          }
        }，
      } 
    }

    /**
     * changeOrigin 设置为 true时，服务器收到的请求头中的host为：localhost:5000
     * changeOrigin 设置为 false时，服务器收到的请求头中的host为：localhost:8080
     * changeOrigin 默认设置为 true
     */
  ```

  说明：
    1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
    2. 缺点：配置略微繁琐，请求资源时必须加前缀。

## 插槽

  1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 父组件 ===> 子组件。
  2. 分类：默认插槽、具名插槽、作用域插槽
  3. 使用方式：
    (1). 默认插槽：
    ```javascript
      <!-- 父组件 -->
      <VCategory title="美食">
        <div>html结构</div>
      </VCategory>
      <!-- 子组件 -->
      <template>
        <div>
          <!-- 定义插槽 -->
          <slot>插槽默认内容...</slot>
        </div>
      </template>
    ```

    (2). 具名插槽：
    ```javascript
      <!-- 父组件 -->
      <VCategory title="美食">
        <template slot='center'>
          <div>html结构</div>
        </template>

        <template v-slot:footer>
          <div>html结构</div>
        </template>
      </VCategory>
      <!-- 子组件 -->
      <template>
        <div>
          <!-- 定义插槽 -->
          <slot name='center'>插槽默认内容...</slot>
          <slot name='footer'>插槽默认内容...</slot>
        </div>
      </template>
    ```

    (3). 作用域插槽：
      1. 理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。(games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定)
      2. 具体编码：
    ```javascript
      <!-- 父组件 -->
      <VCategory title="美食">
        <template scope='scopeData'>
          <!-- 生成的是ul列表 -->
          <ul>
            <li v-for="(g, index) in scopeData.games" :key="index">{{ g }}</li>
          </ul>
        </template>

        <template slot-scope='scopeData'>
          <!-- 生成的是h4标题 -->
          <h4 v-for="(g, index) in scopeData.games" :key="index">{{ g }}</h4>
        </template>
      </VCategory>
      <!-- 子组件 -->
      <template>
        <div>
          <slot :games="games"></slot>
        </div>
      </template>
      <script>
        export default {
          name: 'VCategory',
          props: ['title'],
          data () {
            return {
              games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
            }
          },
        }
    ```

## Vuex

1. 概念
  在Vue中实现集中式状态(数据)管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理(读/写)，也是一种组件间通信的方式，且适用于任意组件通信。

2. 何时适用？
  多个组件需要共享数据时

3. 搭建vuex环境

  (1). 创建文件：`src/store/index.js`

```javascript
// 引入vue核心库
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)

// 准备actions —— 用于响应组件中的动作

const actions = {}

// 准备mutations —— 用于操作数据 (state)

const mutations = {}

// 准备state —— 用于存储数据

const state = {}

// 创建store并导出store
export default new Vuex.Store({
  actions,
  mutations,
  state 
})
```

  (2). 在`main.js`中创建vm时传入`store`配置项

```javascript
// 引入store
import store from './store'

// 创建vm
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
```

4. 基本使用

  (1). 初始化数据、配置`actions`、配置`mutations`、操作文件`store.js`
```javascript
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

const actions = {
  jia(context, value) {
    context.commit('JIA', value)
  }
}

// 准备mutations —— 用于操作数据 (state)
const mutations = {
  JIA(state, value) {
    state.sum += value
  }
}

// 准备state —— 用于存储数据

const state = {
  sum: 0, // 当前的和
}

// 创建store并导出store
export default new Vuex.Store({
  actions,
  mutations,
  state 
})
```

  (2). 组件中读取vuex中的数据：`$store.state.sum`
  (3). 组件中修改vuex中的数据：`$store.dispatch('action中的方法名', 数据)` 或 `$store.commit('mutations中的方法名', 数据)`

  备注：若没有网络请求或其它业务逻辑，组件中也可以越过actions，即不写`dispatch`，直接编写`commit`


5. 四个map方法的使用

  (1). mapState方法：用于帮助我们映射`state`中的数据为计算属性

  ```javascript
    computed: {
      // 借助mapState生成计算属性，从state中读取数据。（对象写法）
      ...mapState({sum:'sum', school: 'school', subject: 'subject'}),

      // 借助mapState生成计算属性，从state中读取数据。（数组写法）
      ...mapState(['sum', 'school', 'subject']),
    }
  ```

  (2). mapGetters方法：用于帮助我们映射`getters`中的数据为计算属性

  ```javascript
    computed: {
      // 借助mapGetters生成计算属性，bigSum (对象写法)
      ...mapGetters({bigSum: 'bigSum'}),

      // 借助mapGetters生成计算属性，bigSum (数组写法)
      ...mapGetters(['bigSum']),
    }
  ```

  (3). mapActions方法：用于帮助我们生成与`actions`对话的方法，即：包含`$store.dispatch(xxx)`的函数
  ```javascript
    methods: {
      // 靠mapActions生成，incrementOdd、incrementWait (对象形式)
      ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),

      // 靠mapActions生成，incrementOdd、incrementWait (数组形式)
      ...mapActions(['jiaOdd', 'jiaWait']),
    }
  ```

  (4). mapMutations方法：用于帮助我们生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数
  ```javascript
    methods: {
      // 靠mapMutations生成，increment、decrement (对象形式)
      ...mapMutations({increment: 'JIA', decrement: 'JIAN'}),

      // 靠mmapMutations生成，JIA、JIAN (数组形式)
      ...mapMutations(['JIA', 'JIAN']),
    }
  ```

  备注：mapActions 与 mapMutations 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象