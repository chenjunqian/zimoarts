<template>
  <div style="width: 100%;">
    <HomeHeaderComponent />
    <HomeDropDowmMenuComponent />
    <img class="interview-top-school-icon" src="@/assets/black-red-logo.png" />
    <div style="margin-top: 200px;">
      <InterviewComponent ref="topInterviewRef" />
    </div>
    <ColorDivider />
    <div style="margin-top: 180px ;box-shadow: 0 20px 20px -2px #888888;">
      <InterviewColumnComponent ref="interviewColomnRef" />
    </div>
    <FootComponent style="margin-top: 50px;" />
  </div>
</template>


<script>
import { useRoute, useRouter } from 'vue-router'
import HomeHeaderComponent from '@/components/HomeHeaderComponent.vue'
import HomeDropDowmMenuComponent from '@/components/HomeDropDowmMenuComponent.vue'
import InterviewComponent from '@/components/InterviewComponent.vue'
import ColorDivider from '@/components/ColorDivider.vue'
import InterviewColumnComponent from '@/components/InterviewColumnComponent.vue'
import FootComponent from '@/components/FootComponent.vue'
import { httpRequest } from '@/libs/request'
import { reactive, ref, watch } from 'vue'
export default {
  name: "InterviewViews",
  components: {
    HomeHeaderComponent,
    HomeDropDowmMenuComponent,
    InterviewComponent,
    ColorDivider,
    InterviewColumnComponent,
    FootComponent
  },
  setup() {
    const route = useRoute()
    let interviewId = ref()
    let interviewType = ref()
    let topInterviewRef = ref()
    let interviewColomnRef = ref()
    let url = ref()

    function updateData() {
      interviewId.value = route.params.id
      interviewType.value = route.params.type
      url.value = "http://www.grotonarts.com/static/interviews/" + interviewType.value + "/" + interviewId.value + ".json"
      httpRequest.get(url.value).then(function (response) {
        topInterviewRef.value.setResourceData(response["topInterview"])
        interviewColomnRef.value.setResourceData(response["interviewColumn"])
      }).catch(function (error) {
        console.log(error);
      });
    }

    const useRouterCurrent = reactive(useRouter())
    watch(useRouterCurrent, () => {
      updateData()
    })

    updateData()

    return {
      topInterviewRef,
      url,
      interviewId,
      interviewType,
      interviewColomnRef
    }
  }
}
</script>

<style>
.interview-top-school-icon {
  width: 300px;
  height: 150px;
  float: left;
  margin-top: -20px;
  margin-left: 80px;
}
</style>
