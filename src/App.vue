<template>
  <div id="app">
    标签内引用
    <img class="common-image" src="./static/images/error.png" alt="error">
    import 引用
    <img class="common-image" :src="error" alt="error">
    require 引用
    <img class="common-image" :src="require('./static/images/error.png')" alt="error">

    <br />
    图标
    <i class="icon-close"></i>
  </div>
</template>

<script>
  import error from './static/images/error.png'
export default {
  name: 'App',
  data() {
    return {
      error
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  padding: 0;
  margin: 0;
}
  .common-image {
    display: block;
    width: 100px;
    height: 100px;
  }
</style>
