<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 16:23:46
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-19 18:06:05
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
2. 语法：`const 代理对象 = reactive(被代理对象)`接收一个对象(或数组)，返回一个代理器对象(proxy对象)
3. reactive定义的响应式数据是“深层次的”
4. 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据都是响应式的

  

    