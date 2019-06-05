<template>
  <!--<div id="app">-->
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<NotFound></NotFound>-->
  <!--</div>-->

  <div id="app">
    <!--<keep-alive>-->
    <!--<router-view v-if="$route.meta.keepAlive"/>-->
    <!--</keep-alive>-->

    <router-view />
  </div>

</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue';

  export default {
    name: 'app',
    data() {
      return {};
    },
    created() {},
    computed: {},
    components: {
      // HelloWorld
    },
    methods: {}
  }
</script>

<style>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
