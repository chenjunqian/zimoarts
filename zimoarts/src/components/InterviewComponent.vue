<template>
  <div style="width: 100%; margin-top: 120px;">
    <div
      style="width: 100%;padding-top: 50px;font-size: 58px;border-bottom: 1px solid #000000;display: flex;justify-content: center; color: #ab050f;">
      <div>INTERVIEW</div>
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
          style="width: 90%; height: 80%; background-color: #c0c0c0; position: absolute; z-index: 99; right: 0; top: 10%;"
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
    <div style="width: 30%; position: relative;display: flex; z-index: 100;">
      <div style="width: 100%; position: absolute; right: 0; bottom: 200px;">
        <img style="width: 100%;height: 300px;" :src="imageUrl" alt="">
        <div style="font-weight: bolder;color: #000000;text-align: center;font-size: 15px;margin-top: 20px;">
          {{ contentImageDesc }}
        </div>
        <div style="color: #000000;text-align: center;font-size: 15px;">
          {{ contentImageSubDesc }}
        </div>
      </div>
    </div>
    <!-- article block -->
    <div
      style="width: 70%; margin-top: -70px; z-index: 99;height: 1200px; box-shadow: -20px 0px 20px -2px #888888; background-color: #ffffff; position: relative;">

      <div style="margin-left: 30px; text-align: left; font-size: 50px; margin-top: 70px;color: #ab050f;">
        {{ contentTitle }}
      </div>
      <div style="margin-left: 30px; margin-top: 20px;text-align: left;width: 90%;color: #000000;">
        {{ content }}
      </div>

      <div style="position: absolute;bottom: 20px; right: 50px;">
        <div style="font-weight: bolder;color: #000000;text-align: left;font-size: 15px;">
          {{ contentAuthor }}
        </div>
        <div style="color: #000000;text-align: left;font-size: 15px;">
          {{ contentAuthorTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "InterviewComponent",
  setup() {
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

    const setResourceData = (jsonData) => {
      leftBlockColor.value = jsonData["letfColor"]
      rightBlockColor.value = jsonData["rightColor"]
      descriptionColor.value = jsonData["desciptionColor"]
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
    }

    return {
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
      contentImageSubDesc
    }
  }
}
</script>

<style>
</style>
