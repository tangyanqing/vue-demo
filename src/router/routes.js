const _import = (file) => require('../pages/' + file + '.vue').default;

export default [
  {
    path: '/login',
    component: _import('member/login/page'),
    props: (route) => ({ params: { ...route.query, ...route.params } }),
    meta: { canShare: true }
  },
  {
    path: '/result',
    component: _import('member/result/page'),
    props: (route) => ({ params: { ...route.query, ...route.params } }),
    meta: { auth: true }
  },
  {
    path: '/todolist',
    component: _import('todo/todolist/page'),
    props: (route) => ({ params: { ...route.query, ...route.params } })
  },
  {
    path: '/home',
    component: _import('home/page'),
    props: (route) => ({ params: { ...route.query, ...route.params } })
  }
];