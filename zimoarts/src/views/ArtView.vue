<template>
  <div class="draw">
    <HeaderComponent />
    <MenuItem dropdownTextColor="#ffffff" />
    <PageTopBigImageComponent ref="topImageRef" backgroudPicUrl="http://www.grotonarts.com/static/draw/draw-top-bg.png"
      videoUrl="https://www.youtube.com/embed/tgbNymZ7vqY" />
    <!-- interview block -->
    <InterviewComponent ref="interviewCompRef" />
    <ColorDivider />
    <div style="width: 100%;margin-top: 150px;">
      <HorizontalScrollListView style="box-shadow: 0px 20px 10px -10px #888888;" :images="imageList" />
    </div>

    <div style="width: 100%;display: flex;justify-content: center;margin-top: 80px;margin-bottom: 100px;">
      <div style="width: 30%">
        <div style="display: inline">
          <div style="color: #ab050f">anihgskbcjkooye</div>
          <div
            style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;word-break: break-all;word-wrap: break-word;">
            alksf;loskfmguugsdqoz dkdhfkjxhbckjvxlvklnvoqueobsahf
            acjgluyioqyeowihds kxdaqoc
          </div>
        </div>
      </div>
      <div style="width: 30%">
        <div style="display: inline">
          <div style="color: #ffce00">anihgskbcjkooye</div>
          <div
            style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;word-break: break-all;word-wrap: break-word;">
            alksf;loskfmguugsdqoz dkdhfkjxhbckjvxlvklnvoqueobsahf
            acjgluyioqyeowihds kxdaqoc
          </div>
        </div>
      </div>
      <div style="width: 30%">
        <div style="display: inline">
          <div style="color: #c0c0c0">anihgskbcjkooye</div>
          <div
            style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;word-break: break-all;word-wrap: break-word;">
            alksf;loskfmguugsdqoz dkdhfkjxhbckjvxlvklnvoqueobsahf
            acjgluyioqyeowihds kxdaqoc
          </div>
        </div>
      </div>
    </div>
    <InterviewColumnComponent ref="interviewColumnRef" />
    <FooterComponent style="margin-top: 20px" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FootComponent.vue";
import MenuItem from "@/components/MenuItem.vue";
import ColorDivider from "@/components/ColorDivider.vue";
import HorizontalScrollListView from "@/components/HorizontalScrollListView.vue";
import InterviewColumnComponent from "@/components/InterviewColumnComponent.vue";
import InterviewComponent from "@/components/InterviewComponent.vue";
import PageTopBigImageComponent from "@/components/PageTopBigImageComponent.vue";
import { reactive, ref, watch } from "vue";
import { httpRequest } from "@/libs/request"
import { useRoute, useRouter } from "vue-router";

export default {
  name: "ArtView",
  components: {
    HeaderComponent,
    FooterComponent,
    MenuItem,
    ColorDivider,
    HorizontalScrollListView,
    InterviewColumnComponent,
    InterviewComponent,
    PageTopBigImageComponent
  },

  setup() {
    const route = useRoute()
    let topImageRef = ref()
    let interviewCompRef = ref()
    let interviewColumnRef = ref()
    let topInterviewImage = ref()
    let imageList = ref([])

    async function getDrawResource() {
      let respJson;
      let pageId = route.params.id
      let url = "http://www.grotonarts.com/static/art/" + pageId + "/" + pageId + "-resource.json"
      await httpRequest.get(url).then(function (response) {
        respJson = response
      }).catch(function (error) {
        console.log(error);
      });
      return respJson;
    }

    async function updateData() {
      let respJson = await getDrawResource()
      imageList.value = []

      let allImageList = respJson["image-list"]
      for (var key in allImageList) {
        let itemImageList = allImageList[key]
        for (var i in itemImageList) {
          imageList.value.push(itemImageList[i])
        }
      }

      topImageRef.value.setResourceData(respJson["topBigImageComponent"])
      let interviewData = respJson["interview"]
      let topInterviewJsonData = interviewData["top-interview"]
      interviewCompRef.value.setResourceData(topInterviewJsonData)
      interviewColumnRef.value.setResourceData(interviewData["interviewColumn"])
    }

    const useRouterCurrent = reactive(useRouter())
    watch(useRouterCurrent, () => {
      updateData()
    })

    updateData()

    return {
      topImageRef,
      interviewCompRef,
      interviewColumnRef,
      topInterviewImage,
      imageList
    }
  }
};
</script>

<style scoped>
.draw {
  background-color: #ffffff;
  width: 1400px;
  margin: 0 auto;
}

.dropdown {
  position: relative;
  width: 100%;
}

.dropdown-content {
  position: absolute;
  display: none;
  left: 0;
  overflow: auto;
  width: 100%;
  border: 1px solid #ffffff;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  color: #000000;
  margin-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  text-align: center;
}

.dropdown-content a:hover {
  color: #ffffff;
  background-color: #c0c0c0;
}
</style>
