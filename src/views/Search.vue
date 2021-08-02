<template lang="pug">
  #search
    Layout.sider
      Sider.sider(breakpoint="md" v-model="isCollapsed" collapsible :collapsed-width="0")
        div(slot='trigger')
        Menu.menu(width="auto")
          h1 搜尋條件
          Submenu(name='1')
            template(slot='title')
              h2 影片長度
            RadioGroup(v-model='videoDuration' vertical size='large')
              Radio(label='any')
                span 任意
              Radio(label='short')
                span 短
              Radio(label='medium')
                span 中
              Radio(label='long')
                span 長
          Submenu(name='2')
            template(slot='title')
              h2 直播狀態
            RadioGroup(v-model='eventType' vertical size='large')
              Radio(label='none')
                span 無直播
              Radio(label='completed')
                span 已下播
              Radio(label='live')
                span 直播中
              Radio(label='upcoming')
                span 即將推出
          Submenu(name='3')
            template(slot='title')
              h2 搜尋權重
            RadioGroup(v-model='order' vertical size='large')
              Radio(label='relevance')
                span 相關性
              Radio(label='date')
                span 上傳日期
              Radio(label='title')
                span 標題字
              Radio(label='viewCount')
                span 瀏覽數
              Radio(label='rating')
                span 評分
      Layout.contentanier
        Header.header
          Row.search(:gutter="8" type="flex" justify="center")
            Col(:xs="18" :md="14")
              Input(v-model='searchValue' placeholder='今天想看...' :clearable='true' size='large')
            Col
              Button(type="primary" icon="ios-search" @click='search()' size='large' shape="circle")
        Content
          Row(:gutter="8" type="flex" justify="start")
            Col(v-for="(card , index) in cards" :key='index' span="24")
              YoutubeCard(:data="card" :type='1')
</template>
<script>
export default {
  data () {
    return {
      isCollapsed: false,
      searchValue: '',
      videoDuration: 'any',
      eventType: 'none',
      order: 'relevance',
      cards: []
    }
  },
  methods: {
    search () {
      const request = window.gapi.client.youtube.search.list({
        part: [
          'snippet'
        ],
        eventType: this.eventType,
        maxResults: 50,
        order: this.order,
        q: this.searchValue,
        regionCode: 'TW',
        type: [
          'video'
        ],
        videoDuration: this.videoDuration
      })
      var cards = []
      request.execute(function (response) {
        response.items.map(item => {
          try {
            if (!item.id.playlistId) {
              var card = {}
              card.id = item.id.videoId
              card.title = item.snippet.title
              card.url = 'https://www.youtube.com/embed/' + card.id
              card.description = item.snippet.description
              card.channelTitle = item.snippet.channelTitle
              card.src = 'http://img.youtube.com/vi/' + card.id + '/0.jpg'
              cards.push(card)
            }
          } catch (error) {
            console.log(error)
          }
        })
      })
      this.cards = cards
    }
  },
  async mounted () {
    await window.gapi.client.load('youtube', 'v3')
    await window.gapi.client.setApiKey(process.env.VUE_APP_YOUTUBE_API)
  }
}
</script>
<style lang="stylus">
#search
  height 100%
  .sider
    background white
    z-index 1
    height 100%
    .menu
      margin-top 3rem
      background white
      padding 1rem
  .contentanier
    background white
    height 100%
  .header
    background white
    margin 1rem

</style>
