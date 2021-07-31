<template lang='pug'>
  #player
    Row(justify='center')
      Col(:xs="24" :sm="22" :md="22" :lg="20" :xl="16" :xxl="14")
        youtube(:video-id="videoId" ref="youtube" :fitParent="true" :resize='true')
        h1.title {{info.title}}
        Icon(type="md-contact" size='30')
        span.channelTitle
          b {{info.channelTitle}}
        br
        Icon(type="md-eye" size='24')
        span 觀看數:{{info.viewCount}}次
        br
        Icon(type="md-thumbs-up" size='24')
        span 喜歡:{{info.likeCount}}人
        br
        Icon(type="md-thumbs-down" size='24')
        span 不喜歡:{{info.dislikeCount}}人
        br
        Icon(type="ios-chatbubbles" size='24')
        span 留言人次:{{info.commentCount}}則
        br
        Icon(type="logo-youtube" size='24')
        a(@click="drawerToggle = true" type="text" shape="circle" size='large') 更多影片
        Collapse.floating(:hide-arrow='false')
          Panel(name="1") 完整資訊
            p(slot="content") {{info.description}}
    Drawer(title="猜你會喜歡..." :closable="true" v-model="drawerToggle" width="75%" )
      .card(v-for="(card , index) in cards" :key='index' @click="select()")
        YoutubeCard(:data="card" :type='1')

</template>
<script>
export default {
  data () {
    return {
      drawerToggle: false,
      videoId: this.$route.query.id,
      info: {},
      cards: ''
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },
  methods: {
    async playVideo () {
      await this.player.playVideo()
    },
    select () {
      this.drawerToggle = false
      this.$router.go(0)
    },
    getData () {
      const request = window.gapi.client.youtube.videos.list({
        part: [
          'snippet,contentDetails,statistics'
        ],
        id: [this.videoId]
      })
      var info = {}
      request.execute(function (response) {
        info.title = response.items[0].snippet.title
        info.description = response.items[0].snippet.description
        info.channelTitle = response.items[0].snippet.channelTitle
        info.viewCount = response.items[0].statistics.viewCount
        info.likeCount = response.items[0].statistics.likeCount
        info.dislikeCount = response.items[0].statistics.dislikeCount
        info.commentCount = response.items[0].statistics.commentCount
      })
      this.info = info
    },
    searchRelatedVideo () {
      const request = window.gapi.client.youtube.search.list({
        part: [
          'snippet'
        ],
        maxResults: 50,
        regionCode: 'TW',
        relatedToVideoId: this.videoId,
        type: 'video'
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
    window.gapi.client.setApiKey(process.env.VUE_APP_YOUTUBE_API)
    this.getData()
    this.playVideo()
    this.searchRelatedVideo()
  }
}
</script>
<style lang="stylus">
#player
  margin-top 1rem
  background white
  height 100%
  .channelTitle
    font-size 22px
</style>
