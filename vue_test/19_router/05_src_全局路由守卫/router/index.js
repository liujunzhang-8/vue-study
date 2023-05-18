// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: '关于',
      path: '/about',
      component: About,
      meta: {title: '关于'}
    },
    {
      name: '主页',
      path: '/home',
      component: Home,
      meta: {title: '主页'},
      children: [
        {
          name: '新闻',
          path: 'news',
          component: News,
          meta: {isAuth: true, title: '新闻'}
        },
        {
          name: '消息',
          path: 'message',
          component: Message,
          meta: {isAuth: true, title: '消息'},
          children: [
            {
              name: '详情',
              path: 'detail',
              component: Detail,
              meta: {title: '详情'},
              // props的第一种写法，值为对象，该对象中的所有key-value都会以props形式传给Detail组件
              // props: {a:1, b:'hello'}

              // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件接收到的所有params参数，以props的形式传给Detail组件
              // props: true

              // props的第三种写法，值为函数
              props($route) {
                return {id: $route.query.id, title: $route.query.title}
              }
              // props({query: {id, title}}) {
              //   return {id, title}
              // }
            }
          ]
        },
      ]
    },
  ]
})

// 全局前置路由守卫 —— 初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  if(to.meta.isAuth) { // 判断是否需要鉴权
    if(localStorage.getItem('school') === 'daxue2') {
      next()
    } else {
      alert('学校名不对，无权限查看！')
    }
  } else {
    next()
  }
})

// 全局后置路由守卫 —— 初始化的时候被调用、每次路由切换之前被调用
router.afterEach((to, from) => {
  console.log(to, from, '后置路由守卫');
  document.title = to.meta.title || 'vue系统'
})

export default router 
