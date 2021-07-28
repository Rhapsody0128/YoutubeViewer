<template lang="pug">
  #home
    //- YoutubeCard(v-for="(musicCard , index) in musicCards" :key='index' :data="musicCard")
    Button(@click="search()") 測試
</template>

<script>
export default {
  data: function () {
    return {
      musicCards: []
    }
  },
  methods: {
    search () {
      const request = window.gapi.client.youtube.videos.list({
        part: 'snippet',
        q: '伯恩',
        regionCode: 'TW',
        maxResults: 2
      })
      var musicCards = []
      request.execute(function (response) {
        console.log(response)
        // 將結果把所需部分進行擷取
        response.items.map(item => {
          if (!item.id.playlistId) {
            var musicCard = {}
            musicCard._id = item.id.videoId
            musicCard.title = item.snippet.title
            musicCard.url = 'https://www.youtube.com/embed/' + musicCard._id
            musicCard.description = item.snippet.description
            musicCard.src = 'http://img.youtube.com/vi/' + musicCard._id + '/0.jpg'
            musicCards.push(musicCard)
          }
        })
      })
      this.musicCards = musicCards
    },
    recommend () {
      return window.gapi.client.youtube.videos.list({
        part: [
          'snippet,contentDetails,statistics'
        ],
        chart: 'mostPopular',
        regionCode: 'TW',
        maxResults: 2
      }).then(async function (response) {
        const musicCards = []
        await response.result.items.map(item => {
          if (!item.id.playlistId) {
            var musicCard = {}
            musicCard.id = item.id
            musicCard.title = item.snippet.title
            musicCard.chennelTitle = item.snippet.channelTitle
            musicCard.url = 'https://www.youtube.com/embed/' + musicCard.id
            musicCard.description = item.snippet.description
            musicCard.src = 'http://img.youtube.com/vi/' + musicCard.id + '/0.jpg'
            musicCards.push(musicCard)
          }
        })
        console.log(this.musicCards)
        console.log(musicCards)
        this.musicCards = musicCards
      },
      function (err) { console.error('Execute error', err) })
    }
  },
  mounted () {
    this.recommend()
  }
}
</script>
