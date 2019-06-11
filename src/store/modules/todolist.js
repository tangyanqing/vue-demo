// import { Local } from '../../utils/storage'

const STORAGE_KEY = 'todo-vue'
const todo = {
  state: {
    title: 'this is a todo list',
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
    //   return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || [])
    // }),
    // items: fetch(),
    newItem: ''
  },
  actions:{},
  mutations:{

  },

  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
export default todo