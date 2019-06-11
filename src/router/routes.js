const _import = (file) => require('../pages/' + file + '.vue').default;

export default [
  {
    path: '/app',
    component: _import('app/page'),
    props: (route) => ({ params: { ...route.query, ...route.params } }),
    meta: { canShare: true }
  },
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
    path: '/reverse',
    component: _import('reverse/page'),
    props: (route) => ({ params: { ...route.query, ...route.params } })
  },
  {
    path: '/todolist',
    component: _import('todolist/page'),
    props: (route) => ({ params: { ...route.query, ...route.params } }),
    meta: { canShare: true }
  },
  {
    path: '/todo',
    component: _import('todo/page'),
    props: (route) => ({ params: { ...route.query, ...route.params } })
  },
  {
    path: '/home',
    component: _import('home/page'),
    props: (route) => ({ params: { ...route.query, ...route.params } })
  }
];