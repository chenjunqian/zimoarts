<template>
  <iframe v-if="showYoutube" style="border: none;" :style="{ 'width': vWidth, 'height': vHeight }" :src="videoUrl"
    allowfullscreen>
  </iframe>
  <video v-else muted="muted" :style="{ 'width': vWidth, 'height': vHeight }" :src="videoUrl" type="video/mp4"
    autoplay="autoplay" controls="controls">
  </video>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "VideoPlayerComponent",
  props: {
    vWidth: String,
    vHeight: String
  },
  setup() {
    let showYoutube = ref("")
    let videoUrl = ref("")

    const formatVideoUrl = () => {
      if (videoUrl.value !== undefined && videoUrl.value !== null && (videoUrl.value.includes('youtube') || videoUrl.value.includes('youtu'))) {
        showYoutube.value = true
        let urlArray = videoUrl.value.split('/embed/')
        let surl = urlArray[1]
        let loopParam = "&playlist=" + surl
        videoUrl.value = videoUrl.value + "?autoplay=1&mute=1&loop=1" + loopParam
      }
    }

    const setVideoCompData = (videoUrlData) => {
      videoUrl.value = videoUrlData
      formatVideoUrl()
    }


    return {
      setVideoCompData,
      showYoutube,
      videoUrl
    }
  }
}
</script>
