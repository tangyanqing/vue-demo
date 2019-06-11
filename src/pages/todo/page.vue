<template>
    <div class="app">
        <div>
            <input type="text" v-model="info">
            <button v-on:click="handleClick">add</button>
        </div>

        <!-- li 标签可以独立出来，写成组件 todo-item -->
        <!-- <ul>
            <li>
                <input type="checkbox">
                <span> Vue 属性 </span>
                <button> 删除 </button>
            </li>
        </ul>-->

        <!-- 组件使用 -->
        <!-- <ul>
            <todo-item v-for="item in list" :key="item" :item="item"></todo-item>
        </ul>-->

        <ul>
            <TodoItem v-for="item in list" :key="item" @delete="handleDelClick(item)">
                <template v-slot:item="itemProps">
                    <span slot="prefixIcon">前Icon--</span>
                    <span :style="{fontsize:'20px',color:itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
                    <span slot="suffixIcon">--后Icon</span>
                </template>
            </TodoItem>
        </ul>

    </div>
</template>

<script>
  // import TodoItem from '../../components/TodoItem';   // 全局组件
  import TodoItem from './todoitem/page';  // 局部组件

  export default {
    name: 'page',
    props: ['params'], // 申明能接收的参数（属性）
    // template组件 todo-item
    // template: `
    //     <input type="checkbox">
    //     <span>{{item}}</span>
    //     <button>删除</button>
    // `,
    components: {
      TodoItem
    },
    data() {
      return {
        msg: 'hello tang',
        info: '',
        list: ['Vue 属性', 'Vue 事件', 'Vue 插槽']
      }
    },
    methods:{
      handleClick(){
        if( !this.info ) {
          return window.console.log('不能为空')
        }
        this.list.push(this.info)
        this.info = ''
      },
      handleDelClick(item) {
        // this.$emit('delete', this.item)
        // const index = this.list.findIndex(text => text === text);
        // this.list.splice(index, 1);  // 删除第一项
        // this.list.splice(this.list.indexOf(index),1)  // 删除最后一项
        this.list.splice(this.list.indexOf(item),1)  // 删除当前项
      }
    },

    computed: {

    }
  }
</script>

<style scoped>

</style>