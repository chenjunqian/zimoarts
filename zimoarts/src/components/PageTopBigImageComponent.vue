<template>
  <div style="width: 100%; margin-top: 30px; background-color: #000000;box-shadow: 0 20px 80px #888888;">
    <div
      style="width: 100%; margin-top: 30px; background-color: #000000;background-size: 100% auto;background-repeat: no-repeat;height: 1065px;position: relative;"
      :style="{ 'background-image': `url('${backgroudPicUrl}')` }">
      <!-- text block -->
      <div style="padding-left: 100px; padding-top: 120px;">
        <!-- visual art title -->
        <div style="width: 100%; display: flex;">
          <div style="font-size: 60pt;" :style="{ 'color': titleColor }">{{ titleOne }}</div>
          <div style="font-size: 60pt;font-weight: bolder;" :style="{ 'color': titleColor }">{{ titleTwo }}</div>
        </div>
      </div>

      <div
        style="width: 600px;height: 337.5px;background-color: #c0c0c0;margin-left: 100px;position: absolute;bottom: -80px;">
        <VideoPlayerComponent ref="videoPlayerRef" vWidth="600px" vHeight="337.5px" :vSrc="videoUrl" />
      </div>
    </div>
    <div style="width: 100%; height: 80px;background-color: #ffffff;"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import VideoPlayerComponent from './VideoPlayerComponent.vue'
export default {
  name: "PageTopBigImageComponent",

  setup() {

    let titleOne = ref("")
    let titleTwo = ref("")
    let titleColor = ref("")
    let backgroudPicUrl = ref("")
    let videoUrl = ref("")
    let videoPlayerRef = ref()

    const setResourceData = (jsonData) => {
      titleOne.value = jsonData["titleOne"]
      titleTwo.value = jsonData["titleTwo"]
      titleColor.value = jsonData["titleColor"]
      backgroudPicUrl.value = jsonData["backgroudPicUrl"]
      videoUrl.value = jsonData["videoUrl"]
      videoPlayerRef.value.setVideoCompData(videoUrl.value)
    }

    return {
      setResourceData,
      titleOne,
      titleTwo,
      titleColor,
      backgroudPicUrl,
      videoUrl,
      videoPlayerRef
    }
  },
  components: { VideoPlayerComponent, VideoPlayerComponent }
}
</script>

<style>
</style>
