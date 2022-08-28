<template>
  <div class="theater">
    <HeaderComponent />
    <HomeDropDowmMenuComponent />
    <PageTopBigImageComponent ref="topImageCompRef" />
    <InterviewComponent ref="interviewCompRef" />
    <ColorDivider />
    <div style="width: 100%;margin-top: 100px;">
      <HorizontalScrollListView style="box-shadow: 0px 20px 10px -10px #888888;" :images="imageList" />
    </div>
    <InterviewColumnComponent ref="interviewColumnRef" style="margin-top: 80px;" />
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
    name: "TheaterView",
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
      let topImageCompRef = ref()
      let interviewCompRef = ref()
      let interviewColumnRef = ref()

      httpRequest.get("http://www.grotonarts.com/static/theater/theater-resource.json").then(function (response) {
        let imageSourcePath = "http://www.grotonarts.com/static/theater/image-list/"
        let allImageList = response["image-list"]
        for (var key in allImageList) {
          let itemImageList = allImageList[key]
          for (var i in itemImageList) {
            let imageItemPath = imageSourcePath + key + "/" + itemImageList[i]
            imageList.value.push(imageItemPath)
          }
        }

        topImageCompRef.value.setResourceData(response["topBigImageComponent"])

        let interviewJsonData = response["interview"]
        interviewCompRef.value.setResourceData(interviewJsonData["top-interview"])
        interviewColumnRef.value.setResourceData(interviewJsonData["interviewColumn"])
      }).catch(function (error) {
        console.log(error);
      });

      return {
        imageList,
        topImageCompRef,
        interviewCompRef,
        interviewColumnRef
      }
    }
  }
</script>

<style>
  .theater {
    background-color: #ffffff;
    width: 1400px;
    margin: 0 auto;
  }
</style>