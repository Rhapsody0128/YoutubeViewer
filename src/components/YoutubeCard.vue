<template lang="pug">
  .YoutubeCard(v-if="type===0")
    Card(:padding='8')
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
</template>
<script>
export default {
  props: {
    type: Number,
    data: Object
  }
}
</script>
<style lang="stylus">
.YoutubeCard
  cursor pointer
.img
  width:100%
  height:300px
  img
    width 100%
    height 100%
    object-fit cover
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

.playIcon
  pointer-events none
  position absolute
  top 10rem
  left 50%
  opacity 0
  transition 1s
  color black
  transform translate(-30%,-30%) rotate(30deg)

.YoutubeCard:hover
  .playIcon
    opacity 1
    transform translate(-50%,-50%)
    color red
</style>
