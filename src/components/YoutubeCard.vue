<template lang="pug">
  .YoutubeCard
    Card(:padding='8')
      iframe(width="100%" height="240" :src="data.url" frameborder="0")
      h3.title {{data.title}}
      h5 {{data.channelTitle}}
      h5(v-if="data.vuewCount") 觀看次數:{{data.viewCount}}人次
      Collapse.floating(:hide-arrow='false')
        Panel(name="1") 完整資訊
          p(slot="content") {{data.description}}
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
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
