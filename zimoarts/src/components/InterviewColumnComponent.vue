<template>
  <div
    style="width: 100%; height: 850px; background-color: #c0c0c0;background-size: 100% auto;background-repeat: no-repeat;"
    :style="{ 'background-image': `url('${backgroundBigImage}')` }">
    <div
      style="width: 100%; padding-top: 50px; margin-bottom: 50px; font-size: 58px; font-weight: bolder; display: flex; justify-content: center; "
      :style="{ 'color': themeColor , 'border-bottom': '1px solid '+ themeColor}">
      <div>PAST STORIES</div>
    </div>

    <div style="display: flex; justify-content: center;">
      <div style="width: 100px; height: 201.7px; margin-top: 81px;"
        :style="{ 'border-bottom': '1px solid '+ themeColor }"></div>
      <a-list :grid="{ gutter: 0, column: 4 }" :data-source="items" style="width: 1200px; margin-top: 80px;">
        <template #renderItem="{ item }">
          <a-list-item v-if="item.index%2==0" style="width: 300px;">
            <div>
              <div style="width: 100%; height: 201.7px;"
                :style="{ 'border-left': '1px solid '+ themeColor,'border-right': '1px solid '+ themeColor , 'color': ''+themeColor}">
                <div class="columnItem" @click="columnItemOnClick(item.pageId)"
                  style="font-weight: bolder; padding-top: 20px;">{{ item.title }}</div>
                <div class="columnItem" @click="columnItemOnClick(item.pageId)"
                  style="margin-left: 5%; margin-right: 5%; word-break: break-all; word-wrap: break-word; ">
                  {{ item.description }}
                </div>
              </div>
              <div class="columnItem" @click="columnItemOnClick(item.pageId)" style="width: 100%;"
                :style="{ 'border-top': '1px solid '+ themeColor }">
                <div style="width: 100%; height: 201.7px;position: relative;"
                  :style="{ 'border-left': '1px solid '+ themeColor, 'border-right': '1px solid '+ themeColor  }">
                  <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;bottom: 0;right: 5%; left: 5%;"
                    :imageUrl="item.imageUrl" />
                </div>
              </div>
            </div>
          </a-list-item>
          <a-list-item v-else style="width: 300px;">
            <div @click="columnItemOnClick(item.pageId)" class="columnItem" style="width: 100%;"
              :style="{ 'border-bottom': '1px solid '+ themeColor }">
              <div style="width: 100%; height: 201.7px;position: relative;"
                :style="{ 'border-right': '1px solid '+ themeColor, 'border-left': '1px solid '+ themeColor  }">
                <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;bottom: 0;right: 5%; left: 5%;"
                  :imageUrl="item.imageUrl" />
              </div>
            </div>
            <div style="width: 100%; height: 201.7px;"
              :style="{ 'border-right': '1px solid '+ themeColor,'border-left': '1px solid '+ themeColor, 'color': ''+themeColor}">
              <div class="columnItem" @click="columnItemOnClick(item.pageId)"
                style="font-weight: bolder; padding-top: 20px;">{{ item.title }}</div>
              <div class="columnItem" @click="columnItemOnClick(item.pageId)"
                style="margin-left: 5%; margin-right: 5%; word-break: break-all; word-wrap: break-word; ">
                {{ item.description }}
              </div>
            </div>
          </a-list-item>
        </template>
      </a-list>
      <div style="width: 100px; height: 201.7px; margin-top: 81px;"
        :style="{ 'border-bottom': '1px solid '+ themeColor }"></div>
    </div>
  </div>
  <div style="width: 100%; height: 80px;"></div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import TreeDRotateImg from './TreeDRotateImg.vue';
export default {
  name: "InterviewColumnComponent",
  components: { TreeDRotateImg },
  setup() {

    let backgroundBigImage = ref("")
    let themeColor = ref("")
    let items = ref([])
    const router = useRouter()

    const setResourceData = (jsonData) => {
      themeColor.value = jsonData["themeColor"]
      backgroundBigImage.value = jsonData["interviewImageBg"]
      items.value = jsonData["items"]
      console.log(items.value)
    }


    const columnItemOnClick = (linkParam) => {
      if (linkParam === undefined || linkParam === null || linkParam === "") {
        return
      }
      router.push({ path: '/interview/' + linkParam })
    }

    return {
      backgroundBigImage,
      themeColor,
      items,
      setResourceData,
      columnItemOnClick
    }
  }
}
</script>

<style>
.columnItem:hover {
  cursor: pointer;
}
</style>
