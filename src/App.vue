<template lang="pug">
  #app
    #nav
      Menu.navBar(mode="horizontal" active-name="home" accordion)
        MenuItem(name="home" to="/")
          .logoAndWord
            Icon.logo(type="logo-youtube" size="45")
            h1 首頁
        MenuItem(name="search" to="/Search")
          h1 搜尋
        MenuItem.login(name="login" )
          .googleInfo(@click="login()")
            Avatar(icon="ios-person" size="45" :style="{background: color}")
          //- Avatar(size="45") {{}}
    keep-alive
      router-view(:key="$route.path")
</template>
<script>
export default {
  data () {
    return {
      color: 'gray'
    }
  },
  methods: {
    async login () {
      console.log('object')
      const auth2 = window.gapi.auth2.getAuthInstance()// 取得GoogleAuth物件
      var name = ''
      var id = ''
      var photoSrc = ''
      var googlemail = ''
      await auth2.signIn().then(function (GoogleUser) {
        console.log('Google登入成功')
        console.log(GoogleUser)
        name = GoogleUser.tt.Ad
        id = GoogleUser.tt.aU
        googlemail = GoogleUser.tt.bu
        photoSrc = GoogleUser.tt.jK
        // const user_id = GoogleUser.getId()// 取得user id，不過要發送至Server端的話，為了資安請使用id_token，本人另一篇文章有範例：https://dotblogs.com.tw/shadow/2019/01/31/113026
        // console.log(`user_id:${user_id}`)
        // const AuthResponse = GoogleUser.getAuthResponse(true) // true會回傳包含access token ，false則不會
        // const id_token = AuthResponse.id_token// 取得id_token
        // people.get方法參考：https://developers.google.com/people/api/rest/v1/people/get
        window.gapi.client.people.people.get({
          resourceName: 'people/me',
          // 通常你會想要知道的用戶個資↓
          personFields: 'names,emailAddresses,photos'
        }).then(function (res) {
          // success
          console.log(res)
          console.log(res.result)
        })
        console.log(name)
        console.log(id)
        console.log(photoSrc)
        console.log(googlemail)
      },
      function (error) {
        console.log('Google登入失敗')
        console.log(error)
      })
    }
  },
  mounted () {
    console.log(process.env.VUE_APP_CLIENT_ID)
    window.gapi.load('client', function () {
      window.gapi.client.init({
        clientId: process.env.VUE_APP_CLIENT_ID,
        scope: 'profile',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/people/v1/rest']
      })
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
    height 5%
    background white
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
