<template>
    <div class="app">
        {{msg}}
        <div>methods reversed: {{ reversedMessage() }}</div>
        <div>computed reversed: {{reversedMsg}}</div>
        <div>{{now}}</div>
        <div>
            <input type="text" v-model="info">
            <button v-on:click="handleClick">add</button>
        </div>

        <ul>
            <!--<todo-item v-for="item in list" :key="item" :item="item"></todo-item>-->
            <TodoItem v-for="item in list" :key="item" @delete="handleDelClick">
                <template v-slot:item="itemProps">
                    <span :style="{fontsize:'20px',color:itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
                </template>
            </TodoItem>
        </ul>

        <div id="demo">{{ fullName }}</div>
    </div>
</template>

<script>
  import TodoItem from '../../../components/TodoItem';

  export default {
    name: 'page',
    props: ['params'],
    data() {
      return {
        msg: 'hello tang',
        info: '',
        list: [],
        firstName: 'Foo',
        lastName: 'Bar'
      }
    },
    methods:{
      handleClick(){
        // console.log(this.info)
        this.list.push(this.info)
        this.info = ''
      },
      handleDelClick() {
        this.$emit('delete', this.item)
      },
      reversedMessage() {
        return this.msg.split('').reverse().join('');
      }
    },
    components: {
      TodoItem
    },
    computed: {
      reversedMsg: function(){
        return this.msg.split('').reverse().join('');
      },
      now: function () {
        return Date.now()
      },
      // fullName: function () {
      //   return this.firstName + ' ' + this.lastName
      // },
      fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }
  }
</script>

<style scoped>

</style>