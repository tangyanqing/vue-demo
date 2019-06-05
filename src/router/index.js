import Vue from 'vue'; // 导入 Vue 框架
import VueRouter from 'vue-router'; // 引入 路由
import routes from './routes'; // 抽离 页面路径，所有路径放置在 routes.js
import NotFound from '../components/NoFound'; // 404页面 公共组件

// 开发环境( development )的定义
const _import = (file) => require('../pages/' + file + '.vue').default;


// 通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter);

VueRouter.prototype.animate = 0;



// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  mode: 'history',
  routes: [
    ...routes, // 路由
    {
      path: '/',
      component: _import('member/login/page'),
      props: (route) => ({params: {...route.query}})
    },
    { path: '*', component: NotFound }
  ],
  scrollBehavior(to, from, savedPosition) { // return 期望滚动到哪个的位置
    if (savedPosition) {
      // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
      return savedPosition;
    } else {
      // 所有路由导航，默认让页面滚动到顶部
      return { x: 0, y: 0 };
    }
  }
});

// 导航守卫: router.beforeEach 全局前置守卫
// router.beforeEach((to, from, next) => {
//   console.log('[route][to] beforeEach-------------> ', to.fullPath)
//   console.log('[route][from] beforeEach-----------> ', from.fullPath)

  // if (to.meta.login) { //判断前往的界面是否需要登陆
  //   if (store.state.user.user.name) { // 是否已经登陆
  //     next()
  //   } else {
  //     Vue.prototype.$alert('请先登录!')
  //       .then(() => {
  //         store.state.user.isLogin = true
  //       })
  //   }
  // } else {
  //   if (to.meta.page) store.state.app.pageLoading = true
  //   next()
  // }
// });

// const 跨域
// 从localStorage中取出登录信息，设置全局G.enterprise、G.member


// 权限校验


// router.afterEach 全局后置钩子
// router.afterEach((to, from) => {
  // if (to.meta.page) store.state.app.pageLoading = false
  // document.title = to.name

  // 数据埋点 处理
// });

export default router;