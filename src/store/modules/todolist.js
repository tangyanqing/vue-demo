// import { Local } from '../../utils/storage'

// const STORAGE_KEY = 'todo-vue'
const todo = {
  state: {
    title: 'this is a todo list',
    newItem: '',
    items: [
      {
        label:'进行中',
        isFinished: false,
        isEditing: true
      },
      {
        label:'已完成',
        isFinished: true,
        isEditing: true
      }
    ],

    // items: (function(){
    //   let items = JSON.parse(Local.get('items') || '[]')
    //   items.forEach( news => {
    //     window.console.log('news======1111'+news)
    //     if(news.label) delete news.label
    //   })
    //   Local.set('newItem', JSON.stringify(items))
    //   return items
    // })(),

    // items: () => JSON.parse(window.localStorage.getItem('items') || '[]'),
  },
  actions:{},
  mutations:{

  },

  // fetch () {
  //   return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  // },
  // save (items) {
  //   window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  // }
}
export default todo