<template lang="pug">
  .YoutubeCard(style="margin:8px")
    Card(v-if="type===0" :padding='8')
      .topCard(@click="play(data.id)")
        .img
          .playIcon
            Icon(type="logo-youtube" size='100')
          img( :src="data.src")
      h3.title {{data.title}}
      h5 {{data.channelTitle}}
      h5 觀看次數:{{data.viewCount}}人次
      Collapse.floating(:hide-arrow='false')
        Panel(name="1") 完整資訊
          p.info(slot="content") {{data.description}}
    Card.searchCard(v-else-if="type===1" :padding='8')
      .card(@click="play(data.id)")
        Row(justify='space-around')
          Col
            .img2
              .playIcon
                Icon(type="logo-youtube" size='100')
              img( :src="data.src")
          Col.infoCard(:xs="24" :sm="12" :md="12" :lg="14" :xl="16" :xxl="18")
            h3.title {{data.title}}
            h5 {{data.channelTitle}}
            p.info {{data.description}}
</template>
<script>
export default {
  props: {
    type: Number,
    data: Object
  },
  methods: {
    play (id) {
      this.$router.go(0)
      this.$router.push({
        name: 'Player',
        query: { id: id }
      })
    }
  }
}
</script>
<style lang="stylus">
.YoutubeCard
  cursor pointer
.img
  position relative
  width:100%
  height:300px
  img
    width 100%
    height 100%
    object-fit cover

.playIcon
  pointer-events none
  position absolute
  top 50%
  left 50%
  opacity 0
  transition 1s
  color black
  transform translate(-30%,-30%) rotate(30deg)

.img2
  width:100%
  height:200px
  position relative
  img
    width 100%
    height 100%
    object-fit cover

.searchCard
  .infoCard
    padding 0.5rem
    text-align start
.title
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

.info
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;

.YoutubeCard:hover
  .playIcon
    opacity 1
    transform translate(-50%,-50%)
    color red
</style>
