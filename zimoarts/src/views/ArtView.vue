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
      <HorizontalScrollListView ref="hScrollListViewRef" style="box-shadow: 0px 20px 10px -10px #888888;"
        :images="imageList" />
    </div>

    <div style="width: 100%;display: flex;justify-content: center;margin-top: 80px;margin-bottom: 100px;">
      <a-list :grid="{ gutter: 16, column: 3 }" :data-source="nameList">
        <template #renderItem="{ item }">
          <a-list-item>
            <div style="display: inline">
              <div style="color: #000000">{{ item.name }}</div>
              <div style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;">
                
              </div>
            </div>
          </a-list-item>
        </template>
      </a-list>
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
      let hScrollListViewRef = ref()
      let imageList = ref([])
      let nameList = ref()

      async function getDrawResource() {
        let respJson;
        let pageId = route.params.id
        let url = "http://www.grotonarts.com/static/art/" + pageId + "/" + pageId + "-resource.json"
        console.log(url)
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
        interviewCompRef.value.setResourceData(respJson["interview"]["topInterview"])
        interviewColumnRef.value.setResourceData(respJson["interview"]["interviewColumn"])
        hScrollListViewRef.value.setResourceData(respJson["albumList"])
        nameList.value = respJson["nameList"]
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
        hScrollListViewRef,
        nameList,
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