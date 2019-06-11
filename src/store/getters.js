const getters = {
  // to do list
  title: state => state.todolist.title,
  items: state => state.todolist.items,
  newItem: state => state.todolist.newItem,

  // 其他
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  userInfo: state => state.user.userInfo,
  name: state => state.user.name,
  roles: state => state.user.roles,

  /*APP*/
  articleInfo: state => state.app.articleInfo,
  pageLoading: state => state.app.pageLoading,

  /*USER*/
  isLogin: state => state.user.isLogin,
  user: state => state.user.user,
  footerBarList: state => state.user.footerBarList,

  /*headline*/
  keyword: state => state.search.keyword,
  searchPageindex: state => state.search.pageindex,
  searchList: state => state.search.list,
  searchLoading: state => state.search.loading,
  searchEnd: state => state.search.end,

  /*首页*/
  newsList: state => state.home.newsList,
  newsLoading: state => state.home.newsLoading,
  homeNewsIndex: state => state.home.newsIndex,
  homeNewsPrevIndex: state => state.home.newsPrevIndex,
  homeEnd: state => state.home.end,

  /*video*/
  videoList: state => state.video.list,
  videoLoading: state => state.video.loading,
  videoEnd: state => state.video.end,


  /*headline*/
  headlineList: state => state.headline.list,
  headlineLoading: state => state.headline.loading,
  headlineEnd: state => state.headline.end,


  /*record*/
  recordTypes: state => state.record.types,
  recordIndex: state => state.record.index,
  recordLoading: state => state.record.loading,
  recordEnd: state => state.record.end
}
export default getters