<template lang="pug">
  #home
    Row.search(:gutter="8" type="flex" justify="center")
      Col(:xs="20" :md="10")
        Input(v-model='searchValue' placeholder='今天想看...' :clearable='true')
      Col(:xs="20" :md="1")
        Button(type="primary" icon="ios-search" @click='search()') Search
    Row(:gutter="8" type="flex" justify="start")
      Col(v-for="(musicCard , index) in musicCards" :key='index' :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="6")
        YoutubeCard(:data="musicCard" :type='0')
</template>

<script>
export default {
  data: function () {
    return {
      searchValue: '',
      musicCards: [],
      videoDuration: 'medium'
    }
  },
  methods: {
    pageLength () {
      return this.musicCards / 12
    },
    search () {
      const request = window.gapi.client.youtube.search.list({
        part: 'snippet',
        regionCode: 'TW',
        q: this.searchValue,
        maxResults: 2,
        type: 'video',
        videoDuration: this.videoDuration
      })
      var musicCards = []
      request.execute(function (response) {
        console.log(response)
        // 將結果把所需部分進行擷取
        response.items.map(item => {
          if (!item.id.playlistId) {
            var musicCard = {}
            musicCard.id = item.id.videoId
            musicCard.title = item.snippet.title
            musicCard.url = 'https://www.youtube.com/embed/' + musicCard.id
            musicCard.description = item.snippet.description
            musicCard.channelTitle = item.snippet.channelTitle
            musicCard.src = 'http://img.youtube.com/vi/' + musicCard.id + '/0.jpg'
            musicCards.push(musicCard)
          }
        })
      })
      this.musicCards = musicCards
      console.log(this.musicCards)
    },
    recommend () {
      const request = window.gapi.client.youtube.videos.list({
        part: [
          'snippet,contentDetails,statistics'
        ],
        regionCode: 'tw',
        maxResults: 10,
        chart: 'mostPopular'
      })
      var musicCards = []
      request.execute(function (response) {
        console.log(response)
        // 將結果把所需部分進行擷取
        response.items.map(item => {
          if (!item.id.playlistId) {
            var musicCard = {}
            musicCard.id = item.id
            musicCard.title = item.snippet.title
            musicCard.url = 'https://www.youtube.com/embed/' + musicCard.id
            musicCard.description = item.snippet.description
            musicCard.channelTitle = item.snippet.channelTitle
            musicCard.src = 'http://img.youtube.com/vi/' + musicCard.id + '/0.jpg'
            musicCards.push(musicCard)
            musicCard.viewCount = item.statistics.viewCount
          }
        })
      })
      this.musicCards = musicCards
      console.log(this.musicCards)
    }
  },
  async mounted () {
    await window.gapi.client.load('youtube', 'v3')
    await window.gapi.client.setApiKey(process.env.VUE_APP_YOUTUBE_API)
    this.recommend()
  }
}

</script>
<style lang="stylus">
.search
  margin 20px
</style>
