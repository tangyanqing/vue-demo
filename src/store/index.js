import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import todolist from './modules/todolist'
import home from './modules/home'
import login from './modules/login'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    todolist,
    home,
    login
  },
  getters
});

export default store