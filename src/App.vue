<template lang="pug">
  #app
    #nav
      router-link(to="/") 首頁
      span /
      router-link(to="/Search") 搜尋
    router-view
</template>
<script>
export default {
  mounted () {

  }
}
</script>
<style lang="stylus">
#app
  color #2c3e50
  background white
  height 95%
  margin 0
  padding 0
  #nav
    height 5%
    overflow hidden
    background white
html,body
  height 110%
  margin 0
  padding 0
  background white
</style>
