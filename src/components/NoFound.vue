<!--
<template>
    
</template>

<script>
  export default {
    name: "not-found"
  }
</script>

<style scoped>

</style>-->

<template>
    <div class="body">
        <!--<h1 class="theme">404:Sorry, the component you have found is not in area.88</h1>-->
        <img class="pic-1" src="http://alicdn.static-img.yolipai.com/wechat/img/home/404.png" alt="">
        <h1 class="title-1">抱歉，您找的页面失联了......</h1>
        <button class="return-btn" @click="goBack()" type="button">返回</button>
    </div>
</template>

<script>
  export default {
    name: 'no-found-component',
    methods: {
      goBack() {
        if (this.back) {
          // console.log('this.back', this.back);
          this.$router.push(this.back);
        } else {
          if (window.history.length >= 1) {
            this.$router.go(-1);
          } else {
            this.$router.replace('/');
          }
        }
      }
    }
  };
</script>
<style scoped>
    /*@import '~less/variable';*/
    .theme {
        /*color: @theme-color;*/
    }
    .body {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        /*z-index: 99999999999999999;*/
        background-color: rgb(249, 249, 249);
        text-align: center;
        font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1',
        Arial, sans-serif;
    }
    .pic-1 {
        display: block;
        width: 321px;
        height: 225px;
        margin: 140px auto 44px;
    }
    .title-1 {
        font-size: 18px;
        text-align: center;
        color: #666;
        font-weight: normal;
    }
    .return-btn {
        background-color: #fff;
        color: #2a99ef;
        border: 1px solid #2a99ef;
        border-radius: 8px;
        width: 100px;
        height: 38px;
        font-size: 18px;
        margin-top: 100px;
    }
</style>

