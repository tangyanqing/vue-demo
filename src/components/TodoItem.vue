<template>
    <!--<li class="item">{{item}}</li>-->
    <li class="item">
        <input type="checkbox" v-model="checked">
        <slot name="item" v-bind="{checked}">{{item}}</slot>
        <button @click="handleDelClick">删除</button>
    </li>
</template>

<script>
  export default {
    props: ['to-do-component'],
    data() {
      return {
        checked: false
      }
    },
    methods: {
      handleDelClick() {
        this.$emit('delete', this.item)
      }

    }
  }
</script>

<style scoped>
    .item{
        color:blue;
    }
</style>