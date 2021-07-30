<template lang="pug">
  #home
    Row(type="flex" justify="start")
      Col(v-for="(card , index) in cards" :key='index' :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="6")
        YoutubeCard(:data="card" :type='0')
</template>

<script>
export default {
  data: function () {
    return {
      searchValue: '',
      cards: [],
      videoDuration: 'medium'
    }
  },
  methods: {
    recommend () {
      const request = window.gapi.client.youtube.videos.list({
        part: [
          'snippet,contentDetails,statistics'
        ],
        regionCode: 'tw',
        maxResults: 50,
        chart: 'mostPopular'
      })
      var cards = []
      request.execute(function (response) {
        response.items.map(item => {
          try {
            if (!item.id.playlistId) {
              var card = {}
              card.id = item.id
              card.title = item.snippet.title
              card.url = 'https://www.youtube.com/embed/' + card.id
              card.description = item.snippet.description
              card.channelTitle = item.snippet.channelTitle
              card.src = 'http://img.youtube.com/vi/' + card.id + '/0.jpg'
              cards.push(card)
              card.viewCount = item.statistics.viewCount
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
    await window.gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
    await window.gapi.client.setApiKey(process.env.VUE_APP_YOUTUBE_API)
    this.recommend()
  }
}

</script>
<style lang="stylus">
#home
  background white
  margin-top 1rem
</style>
