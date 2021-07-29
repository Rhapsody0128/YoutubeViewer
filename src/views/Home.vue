<template lang="pug">
  #home
    Row(type="flex" justify="center")
      Col(:xs="20" :md="10")
        Input(v-model='searchValue' placeholder='今天想看...' :clearable='true')
      Col(:xs="20" :md="2")
        Button(type="primary" icon="ios-search" @click='search()') Search
    Row(:gutter='16' type="flex" justify="space-around")
      Col(v-for="(musicCard , index) in musicCards" :key='index' :xs="20" :sm="16" :md="12" :lg="8" :xl="4")
        YoutubeCard(:data="musicCard")
    Button(@click="recommend()") 測試
</template>

<script>
export default {
  data: function () {
    return {
      searchValue: '',
      musicCards: [],
      videoDuration: 'medium',
      start: false
    }
  },
  methods: {
    search () {
      const request = window.gapi.client.youtube.search.list({
        part: 'snippet',
        regionCode: 'TW',
        location: '23.684655 120.948618',
        locationRadius: '10mi',
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
        maxResults: 1,
        chart: 'mostPopular',
        key: process.env.VUE_APP_YOUTUBE_API
      })
      console.log('後')
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
            // musicCard.duration = item.fileDetails.durationMs
          }
        })
      })
      this.musicCards = musicCards
      console.log(this.musicCards)
    },
    async setApi () {
      try {
        await window.gapi.client.load('youtube', 'v3')
        await window.gapi.client.setApiKey(process.env.VUE_APP_YOUTUBE_API)
      } catch (error) {
        return error
      }
    }
  },
  async mounted () {
    await this.setApi()
    this.recommend()
  }
}
</script>
