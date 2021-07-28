<template lang="pug">
  .YoutubeCard
    Card
      iframe(width="100%" height="100%" :src="data.url" frameborder="0")
      h2 {{data.title}}
      p {{data.description}}
</template>
<script>
export default {
  props: {
    data: Object
  }
}
</script>
