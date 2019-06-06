<template>
    <div class="nonedata-wrappe">
        <!--<Icon name="SliceCopy"></Icon>-->
        <span>已经到底啦！</span>
    </div>
</template>

<script>
  export default {
    name: "no-data"
  }
</script>

<style lang="less" scoped>
    @font-gray: #fff;
    .nonedata-wrappe {
        padding: 0.1rem 0;
        text-align: center;
        >* {
            display: inline-block;
            vertical-align: middle;
            font-size: 0.14rem;
            color: @font-gray;
        }
    }
</style>