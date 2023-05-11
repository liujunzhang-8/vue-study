/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-11 08:14:20
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-11 08:19:26
 */
export default  {
  install(Vue) {
    console.log('这里是插件', Vue);

    // 给Vue原型上添加一个方法（vm和vc都可以使用）
    Vue.prototype.Hello = () => {alert('你好吗？？？')}
  }
}
