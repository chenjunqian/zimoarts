<template>
  <div
    style="width: 100%; height: 850px; background-color: #c0c0c0;background-size: 100% auto;background-repeat: no-repeat;"
    :style="{ 'background-image': `url('${backgroundBigImage}')` }">
    <div
      style="width: 100%; padding-top: 50px; margin-bottom: 50px; font-size: 58px; font-weight: bolder; border-bottom: 1px solid #ffffff; display: flex; justify-content: center; color: #ffffff; ">
      <div>Past Stories</div>
    </div>

    <!-- top colomn -->
    <div style="width: 100%; border-bottom: 1px solid #ffffff; padding-top: 50px;
              ">
      <div style="margin-left: 5%; margin-right: 5%; display: flex;color: #ffffff;">
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff; position: relative;">
          <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;bottom: 0;right: 5%; left: 5%;"
            :imageUrl="topLeftImageUrl" />
        </div>
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff">
          <div style="font-weight: bolder; margin-top: 20px;">{{ topLeftTextTitle }}</div>
          <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
            {{ topLeftText }}
          </div>
        </div>
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff; position: relative;">
          <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;bottom: 0;right: 5%; left: 5%;"
            :imageUrl="topRightImageUrl" />
        </div>
        <div style=" width: 25%; height: 201.7px; border-left: 1px solid #ffffff; border-right: 1px solid #ffffff; ">
          <div style="font-weight: bolder; margin-top: 20px;">{{ topRightTextTitle }}</div>
          <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
            {{ topRightText }}
          </div>
        </div>
      </div>
    </div>
    <!-- bottom colomn -->
    <div style="width: 100%; padding-bottom: 150px;color: #ffffff;">
      <div style="margin-left: 5%; margin-right: 5%; display: flex">
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff">
          <div style="font-weight: bolder; margin-top: 20px;">{{ bottomLeftTitle }}</div>
          <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
            {{ bottomLeftText }}
          </div>
        </div>
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff;position: relative;">
          <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;top: 0;right: 5%; left: 5%;"
            :imageUrl="bottomLeftImageUrl" />
        </div>
        <div style=" width: 25%; height: 201.7px; border-left: 1px solid #ffffff; border-right: 1px solid #ffffff; ">
          <div style="font-weight: bolder; margin-top: 20px;">{{ bottomRightTitle }}</div>
          <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
            {{ bottomRightText }}
          </div>
        </div>
        <div style="width: 25%; height: 201.7px; border-right: 1px solid #ffffff;position: relative;">
          <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;top: 0;right: 5%; left: 5%;"
            :imageUrl="bottomRightImageUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import TreeDRotateImg from './TreeDRotateImg.vue';
  export default {
    name: "InterviewColumnComponent",
    components: { TreeDRotateImg },
    setup() {

      let backgroundBigImage = ref("")
      let topLeftTextTitle = ref("")
      let topLeftText = ref("")
      let topLeftImageUrl = ref("")
      let topRightTextTitle = ref("")
      let topRightText = ref("")
      let topRightImageUrl = ref("")
      let bottomLeftTitle = ref("")
      let bottomLeftText = ref("")
      let bottomLeftImageUrl = ref("")
      let bottomRightTitle = ref("")
      let bottomRightText = ref("")
      let bottomRightImageUrl = ref("")

      const setResourceData = (jsonData) => {
        backgroundBigImage.value = jsonData["interviewImageBg"]
        topLeftTextTitle.value = jsonData["topLeftTextTitle"]
        topLeftText.value = jsonData["topLeftText"]
        topLeftImageUrl.value = jsonData["topLeftImageUrl"]
        topRightTextTitle.value = jsonData["topRightTextTitle"]
        topRightText.value = jsonData["topRightText"]
        topRightImageUrl.value = jsonData["topRightImageUrl"]
        bottomLeftTitle.value = jsonData["bottomLeftTitle"]
        bottomLeftText.value = jsonData["bottomLeftText"]
        bottomLeftImageUrl.value = jsonData["bottomLeftImageUrl"]
        bottomRightTitle.value = jsonData["bottomRightTitle"]
        bottomRightText.value = jsonData["bottomRightText"]
        bottomRightImageUrl.value = jsonData["bottomRightImageUrl"]
      }

      return {
        backgroundBigImage,
        topLeftTextTitle,
        topLeftText,
        topLeftImageUrl,
        topRightTextTitle,
        topRightText,
        topRightImageUrl,
        bottomLeftTitle,
        bottomLeftText,
        bottomLeftImageUrl,
        bottomRightTitle,
        bottomRightText,
        bottomRightImageUrl,
        setResourceData
      }
    }
  }
</script>

<style>
</style>