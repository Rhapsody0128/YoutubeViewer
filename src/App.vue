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
  text-align center
  color #2c3e50
  margin-top 60px
</style>
