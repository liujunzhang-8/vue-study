import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

import {Button, Row} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

Vue.component('el-button', Button);
Vue.component('el-row', Row);

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
