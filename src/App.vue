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
          .googleInfo(@click="checkLogout()")
            Avatar(size="45" ) {{name}}
          .googleInfo(@click="login()")
            Avatar(icon="ios-person" size="45")
    router-view()
</template>
<script src="https://apis.google.com/js/api.js"></script>
<script src="https://apis.google.com/js/client.js"></script>
<script>
export default {
  data () {
    return {
      confirmLogout: false,
      name: ''
    }
  },
  methods: {
    // v-if='name.length>0'
    async login () {
      var name = ''
      await window.gapi.load('auth2', function() {
        window.gapi.auth2.init({
          apiKey: process.env.VUE_APP_YOUTUBE_API,
          clientId: process.env.VUE_APP_CLIENT_ID,
          scope:'https://www.googleapis.com/auth/youtube.readonly'
        })
        window.gapi.auth2.getAuthInstance()
          .signIn({ scope: 'https://www.googleapis.com/auth/youtube.readonly' })
          .then(function (res) {
            console.log(res);
            name = res.Ts.TR
            console.log('Sign-in successful')
          }, function (err) {
            console.error('Error signing in', err)
          })
      });
      this.name = name
    },
    checkLogout () {
      this.confirmLogout = true
    },
    cancel () {
      this.confirmLogout = false
    },
    logout () {
      this.confirmLogout = false
      window.gapi.auth2.getAuthInstance().disconnect()
      this.name = ''
    }
  },
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
