<template lang="pug">
  #app
    Modal(v-model="confirmLogout" title="登出" @on-ok="logout()" @on-cancel="cancel()")
      h2 {{name}}，即將登出您的帳號
    #nav
      Menu.navBar(mode="horizontal" active-name="")
        MenuItem(name="home" to="/")
          .logoAndWord
            Icon.logo(type="logo-youtube" size="45")
            h1 首頁
        MenuItem(name="search" to="/Search")
          h1 搜尋
        MenuItem.login(name="login" )
          .googleInfo(v-if='name.length>0' @click="checkLogout()")
            Avatar(size="45" style="color: #f56a00;background-color: #fde3cf") {{name}}
          .googleInfo(v-else @click="login()")
            Avatar(icon="ios-person" size="45")
    keep-alive
      router-view
</template>
<script src="https://apis.google.com/js/api.js"></script>
<script src="https://apis.google.com/js/client.js"></script>
<script>
export default {
  data () {
    return {
      confirmLogout: false,
    }
  },
  computed:{
    name () {
      return this.$store.getters.getName
    }
  },
  methods: {
    async login () {
      var name = ''
      window.gapi.load('auth2')
      this.$store.commit('login',name)
      await window.gapi.auth2.init({
        apiKey: process.env.VUE_APP_YOUTUBE_API,
        clientId: process.env.VUE_APP_CLIENT_ID
      })
      await window.gapi.auth2.getAuthInstance().signIn().then(async function (res) {
          name = res.Ts.Me
          console.log('Sign-in successful')
        }, function (err) {
          console.error('Error signing in', err)
        })
      this.$store.commit('login',name)
      window.gapi.auth2.getAuthInstance().disconnect()
    },
    checkLogout () {
      this.confirmLogout = true
    },
    cancel () {
      this.confirmLogout = false
    },
    logout () {
      this.confirmLogout = false
      this.$store.commit('logout')
    }
  },
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
    background white
    height 5%
    .navBar
      position fixed
      top 0
      opacity 0.95
      width 100%
    .logo
      color red
      transform translate(0,10%)
      margin-right 0.5rem
    .login
      float right
    .logoAndWord
      display flex
html,body
  height 100%
  margin 0
  padding 0
  background white
body::-webkit-scrollbar
  display: none;
  -ms-overflow-style: none
</style>
