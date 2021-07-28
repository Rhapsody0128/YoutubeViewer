<template lang="pug">
  #app
    #nav
      router-link(to="/") Home /
      router-link(to="/about") About
    router-view
</template>
<script>
export default {
  mounted () {
    window.gapi.client.load('youtube', 'v3', function () {
      window.gapi.client.setApiKey(process.env.VUE_APP_YOUTUBE_API)
    })
  }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
