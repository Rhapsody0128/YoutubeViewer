<template lang='pug'>
  #player
    Row(justify='center')
      Col(:xs="24" :sm="22" :md="22" :lg="20" :xl="16" :xxl="12")
        youtube(:video-id="videoId" ref="youtube" :fitParent="true" :resize='true')
        h1.title {{info.title}}
        h2 頻道:{{info.channelTitle}}
        h4 觀看次數:{{info.viewCount}}次
        h4 喜歡人次:{{info.likeCount}}人
        h4 留言人次:{{info.commentCount}}則
        Collapse.floating(:hide-arrow='false')
          Panel(name="1") 完整資訊
            p.info(slot="content") {{info.description}}
        Button(@click="drawerToggle = true" type="text" shape="circle" size='large')
          b 想看更多相關影片
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
        info.commentCount = response.items[0].statistics.commentCount
      })
      this.info = info
    },
    searchRelatedVideo () {
      const request = window.gapi.client.youtube.search.list({
        part: [
          'snippet'
        ],
        maxResults: 15,
        regionCode: 'TW',
        relatedToVideoId: this.videoId,
        type: 'video'
      })
      var cards = []
      request.execute(function (response) {
        response.items.map(item => {
          console.log(item)
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
        })
      })
      this.cards = cards
    }
  },
  async mounted () {
    await window.gapi.client.load('youtube', 'v3')
    await window.gapi.client.setApiKey(process.env.VUE_APP_YOUTUBE_API)
    this.getData()
    // this.playVideo()
    this.searchRelatedVideo()
  }
}
</script>
<style lang="stylus">
#player
  background white
  height 100%
</style>
