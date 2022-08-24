<template>
  <div class="music">
    <HeaderComponent />
    <HomeDropDowmMenuComponent />
    <PageTopBigImageComponent ref="topImageCompRef" />
    <InterviewComponent ref="interviewCompRef" />
    <ColorDivider />
    <div style="width: 100%;margin-top: 100px;">
      <HorizontalScrollListView style="box-shadow: 0px 20px 10px -10px #888888;" :images="imageList" />
    </div>
    <InterviewColumnComponent :backgroudPicUrl="interviewImage" style="margin-top: 80px;" />
    <DescriptionColumnComponent style="box-shadow: 0 20px 20px -2px #888888;" />
    <FooterComponent style="margin-top: 20px" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FootComponent.vue";
import InterviewComponent from "@/components/InterviewComponent.vue";
import PageTopBigImageComponent from "@/components/PageTopBigImageComponent.vue";
import ColorDivider from "@/components/ColorDivider.vue";
import HorizontalScrollListView from "@/components/HorizontalScrollListView.vue";
import InterviewColumnComponent from "@/components/InterviewColumnComponent.vue";
import DescriptionColumnComponent from "@/components/DescriptionColumnComponent.vue";
import { httpRequest } from "@/libs/request";
import { ref } from "vue";
import HomeDropDowmMenuComponent from "@/components/HomeDropDowmMenuComponent.vue";

export default {
  name: "MusicView",
  components: {
    HeaderComponent,
    FooterComponent,
    InterviewComponent,
    PageTopBigImageComponent,
    ColorDivider,
    HorizontalScrollListView,
    InterviewColumnComponent,
    DescriptionColumnComponent,
    HomeDropDowmMenuComponent
  },
  setup() {
    let imageList = ref([])
    let topBigImageUrl = ""
    let videoUrl = ""
    let topImageCompRef = ref()
    let interviewImage = ref("")
    let interviewTopImage = ref("")
    let interviewCompRef = ref()
    let topInterviewImage = ""
    httpRequest.get("http://www.grotonarts.com/static/music/music-resource.json").then(function (response) {
      let imageSourcePath = "http://www.grotonarts.com/static/music/image-list/"
      let allImageList = response["image-list"]
      for (var key in allImageList) {
        let itemImageList = allImageList[key]
        for (var i in itemImageList) {
          let imageItemPath = imageSourcePath + key + "/" + itemImageList[i]
          imageList.value.push(imageItemPath)
        }
      }

      topBigImageUrl = response['top-big-image']
      videoUrl = response['top-video']
      interviewImage.value = response['interview-image']
      topInterviewImage = response['top-interview-image']
      topImageCompRef.value.setResourceData("MUSIC", "ART", "#ffffff", topBigImageUrl, videoUrl)
      interviewCompRef.value.setResourceData("#ffce00", "#ffffff", "#ffce00", topInterviewImage)
    }).catch(function (error) {
      console.log(error);
    });

    return {
      imageList,
      topImageCompRef,
      interviewImage,
      interviewTopImage,
      interviewCompRef
    }
  }
}
</script>

<style>
.music {
  background-color: #ffffff;
  width: 1400px;
  margin: 0 auto;
}
</style>
