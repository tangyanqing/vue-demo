<template>
    <li class="item">
        <input type="checkbox" v-model="checked">
        <slot name="prefixIcon"></slot>  <!--具名插槽-->
        <slot name="item" v-bind="{checked}">{{item}}</slot>
        <slot name="suffixIcon"></slot>
        <button @click="handleDelClick">删除</button>
    </li>
</template>

<script>
  export default {
    props: ['item'],
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