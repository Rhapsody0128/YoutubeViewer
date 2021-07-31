<template lang="pug">
  #home
    Row(type="flex" justify="start")
      Col(v-for="(card , index) in cards" :key='index' :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="6")
        YoutubeCard(:data="card" :type='0')
</template>
<script src="https://apis.google.com/js/client.js"></script>
<script>
export default {
  data: function () {
    return {
      searchValue: '',
      cards: [],
      videoDuration: 'medium',
      dataReady: false
    }
  },
  methods: {
    recommend () {
      if (this.dataReady === true) {
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
                card.viewCount = item.statistics.viewCount
                cards.splice(Math.floor(Math.random()*cards.length),0,card)
              }
            } catch (error) {
              console.log(error)
            }
          })
        })
        this.cards = cards
      }
    },
    async setApi () {
      try {
        await window.gapi.client.load('youtube', 'v3')
        window.gapi.client.setApiKey(process.env.VUE_APP_YOUTUBE_API)
        this.dataReady = true
      } catch (error) {
        console.log(error);
        this.$router.go(0)
      }
    }
  },
  mounted: async function () {
    await this.setApi()
    this.recommend()
  }
}

</script>
<style lang="stylus">
#home
  background white
  margin-top 1rem
</style>
