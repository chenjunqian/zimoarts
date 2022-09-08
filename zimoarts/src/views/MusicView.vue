<template>
  <div class="music">
    <HomeHeaderComponent />
    <HomeDropDowmMenuComponent />
    <img class="top-school-icon" src="@/assets/black-red-logo.png" />
    <PageTopBigImageComponent ref="topImageCompRef" style="margin-top: 180px;" />
    <InterviewComponent ref="interviewCompRef" />
    <ColorDivider />
    <div style="width: 100%;margin-top: 100px;margin-bottom: 100px;box-shadow: 0 20px 20px -2px #888888;">
      <HorizontalScrollListView ref="hScrollListViewRef" :itemSize="4" style="box-shadow: 0 20px 20px -2px #888888;"
        :images="imageList" />
    </div>
    <InterviewColumnComponent ref="interviewColumnRef" style="margin-top: 80px;" />
    <DescriptionColumnComponent ref="descCompRef" style="box-shadow: 0 20px 20px -2px #888888;" />
    <FooterComponent style="margin-top: 20px" />
  </div>
</template>

<script>
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
  import HomeHeaderComponent from "@/components/HomeHeaderComponent.vue";

  export default {
    name: "MusicView",
    components: {
      FooterComponent,
      InterviewComponent,
      PageTopBigImageComponent,
      ColorDivider,
      HorizontalScrollListView,
      InterviewColumnComponent,
      DescriptionColumnComponent,
      HomeDropDowmMenuComponent,
      HomeHeaderComponent
    },
    setup() {
      let imageList = ref([])
      let topImageCompRef = ref()
      let interviewColumnRef = ref()
      let interviewCompRef = ref()
      let hScrollListViewRef = ref()
      let descCompRef = ref()
      httpRequest.get("http://www.grotonarts.com/static/music/music-resource.json").then(function (response) {
        let allImageList = response["image-list"]
        for (var key in allImageList) {
          let itemImageList = allImageList[key]
          for (var i in itemImageList) {
            imageList.value.push(itemImageList[i])
          }
        }

        topImageCompRef.value.setResourceData(response["topBigImageComponent"])
        let interviewJsonData = response["interview"]
        interviewCompRef.value.setResourceData(interviewJsonData["topInterview"])
        interviewColumnRef.value.setResourceData(interviewJsonData["interviewColumn"])
        descCompRef.value.setResourceData(response["videoList"])
        hScrollListViewRef.value.setResourceData(response["albumList"])
      }).catch(function (error) {
        console.log(error);
      });

      return {
        imageList,
        topImageCompRef,
        interviewCompRef,
        interviewColumnRef,
        hScrollListViewRef,
        descCompRef
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

  .top-school-icon {
    width: 300px;
    height: 150px;
    float: left;
    margin-top: -20px;
    margin-left: 80px;
  }
</style>