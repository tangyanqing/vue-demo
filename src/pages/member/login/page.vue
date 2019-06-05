<template>
    <div>
        <p>登录页面</p>
        <div class="download-link" @click="toHome()">Home</div>
        <span class="download-link" @click="toNot()">404页面</span>
        <p></p>
        <span class="download-link" @click="toResult()">注册</span>
        <p></p>
        <span class="download-link" @click="toDo()">TODOLIST</span>
        <br>
        <div>{{ count }}</div>
        <button @click="$store.commit(increment)">count++</button>
        <br>
        <div>
            自定义指令
            <button v-append-text="`hello ${number}`" @click="number++">按钮</button>
        </div>
    </div>

</template>

<script>
  import action from './action';
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
      ...action
    },
    beforeRouteEnter(to, from, next) {
      next();
    },
    beforeRouteUpdate(to, from, next) {
      next();
    }

  }
</script>

<style scoped>

</style>