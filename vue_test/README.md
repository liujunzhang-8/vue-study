<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:29
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-12 17:41:11
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