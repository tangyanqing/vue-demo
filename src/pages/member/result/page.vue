<template>
    <div>注册页面
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
      if (this.step == 2) {
        // 注册成功 没有一键领取优惠券
        // this.showCouponPopup = true;
        this.getInfo();
      }
    },
    data() {
      // const redirect = decodeURIComponent(this.$route.query.redirect);
      // console.log('redirect', redirect)
      // let form = undefined;
      // if(redirect.indexOf('/goods/') != -1) {
      //   form = 'goods'
      // }
      // if(redirect.indexOf('/login') != -1) {
      //   form = 'login'
      // }
      // console.log('redirect', form)
      // return {
      //   pageTitle: this.params.loginType == 1 ? '登陆成功': '注册成功',
      //   from: form,
      //   redirect: redirect,
      //   step: this.params.loginType || '',
      //   showCouponPopup: false,
      //   enterpriseNo: this.params.enterprise,
      //   inviteCode: this.params.inviteCode,
      //   coupons: undefined
      // };
    },
    computed: {},
    filters: {
      // dateFormat
    },
    components: {
      // yoButton,
      // 'van-popup': Popup,
      // Group,
      // XInput,
      // 'van-button': Button,
      // 'van-loading': Loading
    },
    methods: {
      ...action
    }
  }
</script>

<style scoped>

</style>