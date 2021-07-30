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
          console.log(res)
          this.name = res.tt.Ad
          console.log('Sign-in successful')
        }, function (err) {
          console.error('Error signing in', err)
        })
      // const auth2 = window.gapi.auth2.getAuthInstance()// 取得GoogleAuth物件
      // await auth2.signIn().then(function (GoogleUser) {
      //   this.name = GoogleUser.tt.Ad
      //   window.gapi.client.people.people.get({
      //     resourceName: 'people/me',
      //     // 通常你會想要知道的用戶個資↓
      //     personFields: 'names,emailAddresses,photos'
      //   }).then(function (res) {
      //     // success
      //     console.log(res)
      //     console.log(res.result)
      //   })
      //   console.log(name)
      //   console.log(id)
      //   console.log(photoSrc)
      //   console.log(googlemail)
      // },
      // function (error) {
      //   console.log('Google登入失敗')
      //   console.log(error)
      // })
      // this.$router.go(0)
    },
    checkLogout () {
      console.log(this.name.length)
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
    // window.gapi.load('client', function () {
    //   window.gapi.client.init({
    //     clientId: process.env.VUE_APP_CLIENT_ID,
    //     scope: 'profile',
    //     discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/people/v1/rest']
    //   })
    // })
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
