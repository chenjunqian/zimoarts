<template>
  <div style="width: 100%; margin-top: 120px;">
    <div
      style="width: 100%;padding-top: 50px;font-size: 58px; font-weight: bolder;border-bottom: 1px solid #000000;display: flex;justify-content: center; color: #ab050f;">
      <div>{{ title }}</div>
    </div>
    <div style="width: 100%; height: 700px;display: flex;">
      <!-- interview media block -->
      <div style="width: 75%; display: flex; position: relative;box-shadow: 20px 0px 20px -2px #888888;">
        <div style="width: 40%; height: 100%; background-color: #000000;"
          :style="{ 'background-color': leftBlockColor }">
        </div>
        <div style="width: 60%; height: 100%; background-color: #ffffff;"
          :style="{ 'background-color': rightBlockColor }"></div>
        <img
          style="max-width: 90%; max-height: 80%; background-color: #c0c0c0; position: absolute; z-index: 9; right: 0; top: 10%;"
          :src="topImageUrl">
      </div>
      <!-- interview text block -->
      <div style="width: 25%; position: relative;">
        <div style="position: absolute;width: 80%; height: 250px; background-color: #000000; bottom: 70px;"
          :style="{ 'background-color': descriptionColor }">
          <div style="position: absolute;bottom: 20px;">
            <div style="color: #ffffff; text-align: left; margin-left: 20px;border-bottom: 1px solid #ffffff;">
              {{ topDesc }}
            </div>
            <div
              style="font-weight: bolder;color: #ffffff;text-align: left; margin-left: 20px; margin-top: 5px;font-size: 15px;">
              {{ topAuthor }}
            </div>
            <div style="color: #ffffff;text-align: left; margin-left: 20px; margin-top: 5px;font-size: 15px;">
              {{ topAuthorTitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- person article block -->
  <div style="width: 100%;display: flex;">
    <!-- photo block -->
    <div style="width: 30%; position: relative;display: flex; z-index: 9;">
      <div style="width: 100%; position: absolute; right: 0; top: 200px;">
        <div style="width: 100%; display: flex; justify-content: center;">
          <div style="width: 30%;height: 50px;"></div>
          <img style="width: 70%; margin-right: 0;" :src="contentImageUrl" alt="">
        </div>
        <div style="width: 100%; display: flex; justify-content: center;">
          <div style="width: 30%;height: 50px;">
          </div>
          <div style="width: 70%; margin-right: 0;">
            <div style="font-weight: bolder;color: #000000;text-align: left;font-size: 15px;margin-top: 20px;">
              {{ contentImageDesc }}
            </div>
            <div style="color: #000000;text-align: left;font-size: 15px;">
              {{ contentImageSubDesc }}
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- article block -->
    <div
      style="width: 70%; margin-top: -70px; z-index: 9;  box-shadow: -20px 0px 20px -2px #888888; background-color: #ffffff; position: relative;">
      <div
        style="margin-left: 30px; text-align: center;font-size: 30pt; font-weight: bolder; margin-top: 70px;color: #000000;">
        {{ contentTitle }}
      </div>
      <div
        style="margin-left: 30px; min-height: 600px;margin-top: 20px;text-align: left;width: 90%;color: #000000; font-size: 15pt;"
        v-html="content">
      </div>

      <div style="display: flex; justify-content: left;">
        <div style="width: 900px; min-height: 30px;">
          <div v-show="isShowVideo" style="width: 600px;height: 337.5px;background-color: #c0c0c0;margin-left: 20px;">
            <VideoPlayerComponent ref="videoPlayerRef" vWidth="600px" vHeight="337.5px" :vSrc="videoUrl" />
          </div>
        </div>
        <div style="min-width: 200px; position: relative; margin-right: 60px;">
          <div style="width: 100%; min-height: 30px; position: absolute; bottom: 5px;">
            <div style="font-weight: bolder;color: #000000;text-align: left;font-size: 15pt;">
              {{ contentAuthor }}
            </div>
            <div style="color: #000000;text-align: left;font-size: 15pt;">
              {{ contentAuthorTitle }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VideoPlayerComponent from './VideoPlayerComponent.vue'

export default {
  name: "InterviewComponent",
  setup() {
    let title = ref("")
    let topImageUrl = ref("")
    let leftBlockColor = ref("")
    let rightBlockColor = ref("")
    let descriptionColor = ref("")
    let topDesc = ref("")
    let topAuthor = ref("")
    let topAuthorTitle = ref("")
    let contentImageUrl = ref("")
    let contentTitle = ref("")
    let content = ref("")
    let contentAuthor = ref("")
    let contentAuthorTitle = ref("")
    let contentImageDesc = ref("")
    let contentImageSubDesc = ref("")
    let videoUrl = ref("")
    let isShowVideo = ref(true)
    let videoPlayerRef = ref()

    const setResourceData = (jsonData) => {
      title.value = jsonData["title"]
      leftBlockColor.value = jsonData["letfColor"]
      rightBlockColor.value = jsonData["rightColor"]
      descriptionColor.value = jsonData["descriptionColor"]
      topImageUrl.value = jsonData["topImageUrl"]
      topDesc.value = jsonData["topDesc"]
      topAuthor.value = jsonData["topAuthor"]
      topAuthorTitle.value = jsonData["topAuthorTitle"]
      contentImageUrl.value = jsonData["contentImageUrl"]
      contentTitle.value = jsonData["contentTitle"]
      content.value = jsonData["content"]
      contentAuthor.value = jsonData["contentAuthor"]
      contentAuthorTitle.value = jsonData["contentAuthorTitle"]
      contentImageDesc.value = jsonData["contentImageDesc"]
      contentImageSubDesc.value = jsonData["contentImageSubDesc"]
      videoUrl.value = jsonData["videoUrl"]
      if (videoUrl.value === undefined || videoUrl.value === null || videoUrl.value === "") {
        isShowVideo.value = false
      } else {
        isShowVideo.value = true
        videoPlayerRef.value.setVideoCompData(videoUrl.value)
      }
    }

    return {
      title,
      leftBlockColor,
      rightBlockColor,
      descriptionColor,
      topImageUrl,
      topDesc,
      topAuthor,
      topAuthorTitle,
      setResourceData,
      contentImageUrl,
      contentTitle,
      content,
      contentAuthor,
      contentAuthorTitle,
      contentImageDesc,
      videoUrl,
      videoPlayerRef,
      isShowVideo,
      contentImageSubDesc
    }
  },
  components: { VideoPlayerComponent, VideoPlayerComponent }
}
</script>

<style>

</style>
