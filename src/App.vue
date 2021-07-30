<template lang="pug">
  #app
    Modal(v-model="confirmLogout" title="Common Modal dialog box title" @on-ok="logout()" @on-cancel="cancel()")
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    #nav
      Menu.navBar(mode="horizontal" active-name="home")
        MenuItem(name="home" to="/")
          .logoAndWord
            Icon.logo(type="logo-youtube" size="45")
            h1 首頁
        MenuItem(name="search" to="/Search")
          h1 搜尋
        MenuItem.login(name="login" )
          .googleInfo(v-if='name.length>0' @click="checkLogout()")
            Avatar(size="45" ) {{name}}
          .googleInfo(v-else @click="login()")
            Avatar(icon="ios-person" size="45")
    router-view()
</template>
<script>
export default {
  data () {
    return {
      confirmLogout: false,
      name: ''
    }
  },
  methods: {
    async login () {
      await window.gapi.auth2.getAuthInstance()
        .signIn({ scope: 'https://www.googleapis.com/auth/youtube.readonly' })
        .then(function (res) {
          this.name = res.Ts.TR
          console.log('Sign-in successful')
        }, function (err) {
          console.error('Error signing in', err)
        })
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
    window.gapi.load('client:auth2', function () {
      window.gapi.auth2.init({ client_id: process.env.VUE_APP_CLIENT_ID })
    })
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
