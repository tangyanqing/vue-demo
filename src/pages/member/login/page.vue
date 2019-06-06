<template>
    <div class="login-wrapper">
        <!--<Icon name="close" class="close" @click.native="$emit('close')"></Icon>-->
        <h2>登录页面</h2>
        <div class="input username">
            <input type="text" placeholder="用户名随便填" v-model="username">
            <span :class="{'animate': username_msg}">{{username_msg}}</span>
        </div>
        <div class="input password">
            <input type="password" placeholder="密码: 123456" v-model="password">
            <span :class="{'animate': password_msg}">{{password_msg}}</span>
        </div>
        <div>
            <span>忘记密码</span>
        </div>
        <button class="login" @click="login">Login</button>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        username: '',
        username_msg: '',
        password: '',
        password_msg: ''
      }
    },
    methods: {
      async login () {
        if (!this.username) {
          this.username_msg = '请输入用户名'
        }else{
          this.username_msg = ''
        }

        if (this.username_msg) return
        if (!this.password) {
          this.password_msg = '请输入用户名'
        }else if(this.password && this.password != '123456') {
          this.password_msg = '请输入密码：123456'
        }else{
          this.password_msg = ''
        }

        if (this.password_msg) return
        this.$showLoading()
        try {
          await this.$store.dispatch('login', {
            username: this.username,
            password: this.password
          })
        }catch (e) {
          window.console.log('失败')
        }

        this.$hideLoading()
        this.$set(this.$store.state.user.footerBarList, 3, {title: '我的', icon: 'account1', path: '/account'})
        this.$emit('close')
        // let avatar = require('assets/images/avatar.png')
        // this.Cookie.set('username', this.username)
        // this.Cookie.set('avatar', avatar)
        // this.$store.state.app.user.name = this.username
        // this.$store.state.app.user.avatar = avatar
        // this.$emit('close')

      }
    }
  }
</script>
<style lang="less" scoped>
    @theme-red: #f85959;
    @theme-bg-red: #d43d3d;
    @color-f: #fff;
    @color-5: #555;
    @color-3: #333;
    @color-f4: #f4f4f4;
    .login-wrapper {
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: @color-f;
        border-top-right-radius: 0.05rem;
        border-top-left-radius: 0.05rem;
        transition: top .2s ease-out;
        /*position: fixed;*/
        /*left: 0;top: 100%;*/
        /*z-index: 1000;*/
        /*opacity: 0;*/
        .close {
            width: 0.4rem;
            height: 0.4rem;
            padding: 0.1rem;
            font-size: 0.2rem;
            color: @color-5;
            position: absolute;
            right: 0;
            top: 0;
        }
        h2 {
            margin: 1rem 0;
            font-size: 0.8rem;
            text-align: center;
            color: @color-3;
        }
        .input {
            width: 80%;
            height: 37px;
            margin: 0 auto;
            margin-bottom: 1rem;
            position: relative;
            span {
                font-size: 0.1rem;
                color: @theme-red;
                position: absolute;
                left: 0.15rem;
                top: 0.45rem;
                opacity: 0;
            }
            .animate {
                opacity: 1;
                animation: swing .5s linear;
            }
            @keyframes swing{
                10% {transform: translateX(-0.06rem);}
                // 20% {transform: translateX(0.1rem);}
                30% {transform: translateX(0.06rem);}
                // 40% {transform: translateX(0.08rem);}
                50% {transform: translateX(-0.06rem);}
                // 60% {transform: translateX(0.06rem);}
                70% {transform: translateX(0.06rem);}
                80% {transform: translateX(-0.04rem);}
                90% {transform: translateX(0.04rem);}
                // 95% {transform: translateX(0.02rem);}
                100% {transform: translateX(0rem);}
            }
        }
        input {
            width: 100%;
            height: 100%;
            border: 1px solid #ccc;
            border-radius: 0.2rem;
            font-size: 0.14rem;
            text-indent: 0.15rem;
            color: @color-3;
            outline: none;
        }
        .login {
            width: 80%;
            height: 37px;
            line-height: 37px;
            background-color: @theme-bg-red;
            margin-top: 0.8rem;
            border: none;
            border-radius: 0.2rem;
            color: @color-f4;
        }
    }
</style>