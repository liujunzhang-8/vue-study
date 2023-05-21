<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 16:23:46
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-21 22:51:29
-->
# vue3_test

## 1. 拉开序幕的setup

1. 理解：Vue3.0 中的一个新的配置项，值为一个函数。
2. setup 是所有 Composition API(组合API) "表演的舞台"。
3. 组件中所用到的：数据、方法等等，均要配置在setup中。
4. setup函数的两种返回值：
  (1). 若返回一个对象，则对象中的属性、方法、在模板中均可以直接使用。(重点关注！)
  (2). 若返回一个渲染函数：则可以自定义渲染内容。(了解)
5. 注意点：
  (1). 尽量不要与Vue2.x配置混用   
    Vue2.x 配置(data、methods、computed...) 中可以访问到setup中的属性、方法。  
    但在setup中不能访问到Vue2.x配置(data、methods、computed...)   
    如果有重名，setup优先。  

  (2). setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性。

## 2. ref函数

1. 作用：定义一个响应式的数据。
2. 语法：`const xxx = ref(initValue)`
  (1). 创建一个包含响应式数据的引用对象(reference对象)。
  (2). JS中操作数据：`xxx.value`
  (3). 模板中读取数据：不需要.value，直接：`<div>{{xxx}}</div>`

3. 备注：
  (1). 接收的数据可以是：基本类型、也可以是对象类型
  (2). 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
  (3). 对象类型的数据：内部“求助”了Vue3.0中的一个新函数 —— `reactive`函数

## 3. reactive函数

1. 作用：定义一个对象类型的响应式数据(基本类型别用它，用`ref`函数)
2. 语法：`const 代理对象 = reactive(被代理对象)`接收一个对象(或数组)，返回一个代理器对象(Proxy的实例对象，简称proxy对象)
3. reactive定义的响应式数据是“深层次的”
4. 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据都是响应式的

## 4. Vue3.0 中的响应式原理

### vue2.x 的响应式
1. 实现原理：
  (1). 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。
  (2). 数组类型：通过重写更新数据的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。
  ```
    Object.defineProperty(data, 'count', {
      get() {},
      set() {}
    })
  ```

2. 存在问题：
  (1). 新增属性、删除属性，界面不会更新。
  (2). 直接通过下标修改数组，界面不会自动更新。

### Vue3.0 的响应式
1. 实现原理：
  (1). 通过Proxy(代理)：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等。
  (2). 通过Reflect(反射)：对被代理对象的属性进行操作。

## 5. reactive对比ref

1. 从定义数据角度对比：
  (1). ref用来定义：基本类型数据
  (2). reactive用来定义：对象(或数组)类型数据
  (3). 备注：ref也可以用来定义对象(或数组)类型数据，它内部会自动通过`reactive`转为代理对象。

2. 从原理角度对比：
  (1). ref定义的数据：操作数据需要`.value`，读取数据时模板中直接读取不需要`.value`。
  (2). reactive 通过使用Proxy来实现响应式(数据劫持)，并通过Reflect操作源对象内部的数据。

3. 从使用角度对比
  (1). ref定义的数据：操作数据需要`.value`， 读取数据时模板中直接读取不需要`.value`。
  (2). reactive定义的数据：操作数据与读取数据：均不需要`.value`。

## 6. setup的两个注意点

1. setup执行的时机
  在beforeCreate之前执行一次，this是undefined。

2. setup的参数
  props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。  
  context：上下文对象  
    (1). attrs：值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于 `this.$attrs`。
    (2). slots：收到的插槽内容，相当于`this.$slots`。
    (3). emit：分发自定义事件的函数，相当于`this.$emit`

## 7. 计算属性与监视

1. computed 函数
2. watch 函数
  (1). 与Vue2.x中的watch配置功能一致
  (2). 两个小“坑”：
    1. 监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视(deep配置失效)。
    2. 监视reactive定义的响应式数据中某个属性时：deep配置有效。

3. watchEffect 函数

  (1). watch的套路是：既要指明监视的属性，也要指明监视的回调
  (2). watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。
  (3). watchEffect 有点像computed：
    1. 但computed注重的计算出来的值(回调函数的返回值)，所以必须要写返回值。
    2. 而watchEffect更注重的是过程(回调函数的函数体)，所以不用写返回值。

## 8. 生命周期

## 9. 自定义hook函数

1. 什么是hook？———— 本质是一个函数，把setup函数中使用的Composition API 进行了封装。
2. 类似于vue2.x 中的mixin。
3. 自定义hook的优势：复用代码，让setup中的逻辑更清楚易懂。

## 10. toRef

1. 作用：创建一个ref对象，其value值指向另一个对象中的某个属性。
2. 语法：`const name = toRef(person, 'name')`
3. 应用：要将响应式对象中的某个属性单独提供给外部使用时。
4. 扩展：`toRefs`与`toRef`功能一致，但可以批量创建多个ref对象，语法：`toRefs(person)`

  

    