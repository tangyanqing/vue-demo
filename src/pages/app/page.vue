<template>
    <div>
        <div @click="toLogin()">登录</div>
        <div class="download-link" @click="toResult()">注册</div>

        <div class="download-link" @click="toHome()">Home</div>
        <div class="download-link" @click="toNot()">404</div>

        <div class="download-link" @click="toReverse()">reverse 反转</div>
        <div class="download-link" @click="toDo()">ToDo</div>
        <div class="download-link" @click="toDoList()">ToDo 改良</div>

        <div>
            <div>{{ count }}</div>
            <button @click="$store.commit(increment)">count++</button>
        </div>
        <div>
            <p>自定义指令</p>
            <button v-append-text="`hello ${number}`" @click="number++">自加按钮 </button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "page",
    props: ['params'],
    metaInfo () {
      return {
        title: this.pageTitle
      }
    },
    created: async function() {
      // this.getInfo();
    },
    data() {
      return {
        count: 0,
        number: 1,
        show: true,
        // pageTitle: '邀请您成为TA的会员',
        // sendBtnShow: false,
        // sendCodeText: '获取验证码',
        // nums: 60,
        // phone: '',
        // authCode: '',
        // enterprise: this.params.enterprise,
        // refereesInfo: {},
        // inviteCode: this.params.inviteCode
      };
    },
    directives: {  // 自定义组件
      appendText: {
        bind() {
          // console.log('bind');
        },
        inserted(el, binding) {
          el.appendChild(document.createTextNode(binding.value));
          // console.log('inserted', el, binding)
        },
        update() {
          window.console.log('update');
        },
        componentUpdated(el, binding){
          el.removeChild(el.childNodes[el.childNodes.length - 1]);
          el.appendChild(document.createTextNode(binding.value));
          // console.log('componentUpdated');
        },
        unbind() {
          window.console.log('unbind');
        }
      }
    },

    computed: {
      // count() {
      //   return this.$store.state.count
      // }
    },
    filters: {},
    components: {
      // Icon,
      // yoButton
    },
    methods: {
      // actions
      toLogin: function() {
        this.$router.push({ path: `/login`});
      },
      toHome: function() {
        this.$router.push({ path: `/home` });
      },
      toNot: function() {
        this.$router.push({ path: `/download?enterprise=${this.enterprise}` });
      },
      toResult: function() {
        this.$router.push({ path: `/result` });
      },
      toReverse: function(){
        this.$router.push({ path: `/reverse` });
      },
      toDo: function() {
        this.$router.push({ path: `/todo` });
      },
      toDoList: function() {
        this.$router.push({ path: `/todolist` });
      },

      increment () {
        this.count++
      }
    },
    beforeRouteEnter(to, from, next) {
      next();
    },
    beforeRouteUpdate(to, from, next) {
      next();
    }

  }
</script>

<style lang="less" scoped>

</style>