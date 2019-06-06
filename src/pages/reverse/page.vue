<template>
    <div class="reverse-container">
        {{msg}}
        <div>methods-方法 reversed:
            <p>{{reversedMessage()}}</p>
        </div>
        <div>computed-计算属性 reversed:
            <p>{{reversedMsg}}</p>
        </div>

        <div>-----------------</div>
        <div>{{message}}</div>
        <div>{{updateMessage()}}</div>
    </div>
</template>

<script>
  export default {
    name: "page",
    data() {
      return {
        msg: 'hello tang',
        message: '未更新'
      }
    },
    methods:{
      reversedMessage() {
        return this.msg.split('').reverse().join('');
      },
      updateMessage: async function () {
        this.message = '已更新'
          window.console.log(this.$el.textContent) // => '未更新'
        await this.$nextTick(function () {
          window.console.log(this.$el.textContent) // => '已更新'
        })
      }
    },
    computed: {
      reversedMsg: function(){
        return this.msg.split('').reverse().join('');
      }
    }
  }
</script>

<style lang="less" scoped>
    .reverse-container{
        padding: 10px;
    }
</style>