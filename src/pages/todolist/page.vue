<template>
    <div class="todolist-container">
        <img alt="Vue logo" src="../../assets/logo.png">
        <h1 v-text="title"></h1>

        <div class="todo-container">
            <div class="todo-text">
                <input v-model="newItem" @keyup.enter="addNew()" class="todo-input">
                <!--<input :value="newItem" @keyup.enter="addNew()" class="todo-input">-->
                <button @click="addNew()" class="todo-add">添加</button>
            </div>

            <ul v-if="items.length" class="todo-item">
                <li v-for="(item,index) in items" :key="index">
                    <span v-if="item.isEditing" :class="{finished: item.isFinished}" @click="toggleFinish(item)">
                        {{index+1}}、{{item.label}}
                    </span>
                    <input v-else type="text" v-model="item.label" v-todo-focus="item.label" @blur="unEdit(item)">
                    <!--<input v-else type="text" :value="item.label" v-todo-focus="item.label" @blur="unEdit(item)">-->
                    <a @click="editItem(item)" class="todo-edit">{{item.isEditing ? '编辑' : '保存'}}</a>
                    <a @click="deleteItem(item)" v-show="item.isEditing" class="todo-delete">删除</a>
                </li>
            </ul>

            <p v-if="items.length" class="todo-number">TODO总计 <i class="number">{{number}}</i> 条</p>
            <p v-else>No todos left!</p>
        </div>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['params'],
    components: {},
    directives: {
      //自定义focus指令
      "todo-focus": function() {
      }
    },
    data () {
      return {
        // title: 'this is a todo list',
        // items: [],
        // newItem: '',
        // isEditing: true
      }
    },
    methods: {
      // 添加todo
      addNew: function() {
        window.console.log('label======='+ this.$store.state.label)
        this.items.push({
          label: this.$store.state.label || '新建事项',
          isFinished: false,
          isEditing: true
        })
        this.newItem = ''
      },

      // 删除todo
      deleteItem: function(item) {
        console.log('delete----',item)
        // this.items.splice(item,1) //删除第一项
        this.items.splice(this.items.indexOf(item),1)  //删除当前项
      },

      // 编辑todo
      editItem: function(item) {
        console.log(item)
        // this.isEditing = false;
        item.isEditing = false;
      },
      // 保存
      unEdit: function(item) {
        console.log(item)
        // this.isEditing = true;
        item.isEditing = true;
      },

      // 已完成todo
      toggleFinish: function(item) {
        // console.log(item)
        item.isFinished = !item.isFinished
      },

      // 清空已完成的todoLists
      clearTodos() {
        // todo
      },

      // 设置所有todo为已完成
      selectAllTodos() {
        // todo
      },

      // 条件筛选：全部、已完成、未完成
      selectStatusTodos() {
        // todo
      }

    },
    computed: {
      // 使用计算属性 计算待办todos的数量
      number() {
        let todoArr = this.items
        let number = 0
        for (let i = 0; i < todoArr.length ; i++) {
          // if(todoArr[i].isChecked === false) {
          //   number ++
          // }
          number ++
        }
        return number
      },
      ...mapGetters([
        'title',
        'items',
        'newItem',
      ]),
      newItem: {
        get(){
          console.log('state.label--------'+this.$store.state.label)
          return this.$store.state.label
        },
        set(newVal){
          console.log('newVal--------'+newVal)
          console.log('state.label1--------'+this.$store.state.label)
          this.$store.state.label = newVal

        }
      }
    },
    watch: {
      items: function(items) {
          window.localStorage.setItem('todo-vue', JSON.stringify(items))
      },
      deep: true
    }
  }
</script>

<style lang="less" scoped>
    .todolist-container {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .todo-container {
        display: flex;
        // flex-direction: column;
        flex-direction: column;
        align-items: center;

    }
    .todo-text {
        display: flex;
        width: 80%;
        margin-bottom: 20px;
        .todo-input {
            width: 100%;
            height: 32px;
            // margin-bottom: 20px;
            border: 1px solid #ccc;
        }
        .todo-add {
            width: 80px;
            height: 34px;
            font-size: 16px;
            cursor: pointer;
            background: #54b883;
            box-sizing: border-box;
        }
    }

    .todo-item {
        width: 80%;
        padding: 10px;
        box-sizing: border-box;
        border: 1px dashed #ccc;
        li {
            display: block;
            text-align: left;
            margin-bottom: 8px;
        }
        .finished {
            text-decoration: line-through;
        }
        .todo-edit {
            height: 30px;
            padding: 0 4px;
            margin-left: 10px;
            border: 1px dashed #ccc;
            font-size: 16px;
            color: #42b983;
            cursor: pointer;
        }
        .todo-delete {
            height: 30px;
            padding: 0 4px;
            margin-left: 10px;
            border: 1px dashed #ccc;
            font-size: 16px;
            color: #F44336;
            cursor: pointer;
        }
    }
    .todo-number {
        font-size: 14px;
        margin-top: 10px;
        .number {
            color:#F44336;
        }
    }
</style>
