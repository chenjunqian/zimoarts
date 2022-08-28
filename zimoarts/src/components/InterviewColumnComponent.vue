<template>
  <div
    style="width: 100%; height: 850px; background-color: #c0c0c0;background-size: 100% auto;background-repeat: no-repeat;"
    :style="{ 'background-image': `url('${backgroundBigImage}')` }">
    <div
      style="width: 100%; padding-top: 50px; margin-bottom: 50px; font-size: 58px; font-weight: bolder; border-bottom: 1px solid #ffffff; display: flex; justify-content: center; color: #ffffff; ">
      <div>INTERVIEW</div>
    </div>

    <!-- top colomn -->
    <div style="width: 100%; border-bottom: 1px solid #ffffff; padding-top: 50px;
              ">
      <div style="margin-left: 5%; margin-right: 5%; display: flex;color: #ffffff;">
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff; position: relative;">
          <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;bottom: 0;right: 5%; left: 5%;"
            imageUrl="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg" />
        </div>
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff">
          <div style="font-weight: bolder; margin-top: 20px;">sadfkjanihgskbcjkooye</div>
          <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
            oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
            sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
            alksf;loskfmguugsdqozmxjhzvbn/
          </div>
        </div>
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff; position: relative;">
          <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;bottom: 0;right: 5%; left: 5%;"
            imageUrl="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg" />
        </div>
        <div style=" width: 25%; height: 201.7px; border-left: 1px solid #ffffff; border-right: 1px solid #ffffff; ">
          <div style="font-weight: bolder; margin-top: 20px;">sadfkjanihgskbcjkooye</div>
          <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
            oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
            sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
            alksf;loskfmguugsdqozmxjhzvbn/
          </div>
        </div>
      </div>
    </div>
    <!-- bottom colomn -->
    <div style="width: 100%; padding-bottom: 150px;color: #ffffff;">
      <div style="margin-left: 5%; margin-right: 5%; display: flex">
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff">
          <div style="font-weight: bolder; margin-top: 20px;">sadfkjanihgskbcjkooye</div>
          <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
            oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
            sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
            alksf;loskfmguugsdqozmxjhzvbn/
          </div>
        </div>
        <div style="width: 25%; height: 201.7px; border-left: 1px solid #ffffff;position: relative;">
          <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;top: 0;right: 5%; left: 5%;"
            imageUrl="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg" />
        </div>
        <div style=" width: 25%; height: 201.7px; border-left: 1px solid #ffffff; border-right: 1px solid #ffffff; ">
          <div style="font-weight: bolder; margin-top: 20px;">sadfkjanihgskbcjkooye</div>
          <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
            oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
            sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
            alksf;loskfmguugsdqozmxjhzvbn/
          </div>
        </div>
        <div style="width: 25%; height: 201.7px; border-right: 1px solid #ffffff;position: relative;">
          <TreeDRotateImg style=" height: 95%; width: 90%; position: absolute;top: 0;right: 5%; left: 5%;"
            imageUrl="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg" />
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
    props: {
      columnOneTitle: String,
      columnOneDesc: String,
      columnOneImgUrl: String,
      columnTwoTitle: String,
      columnTwoDesc: String,
      columnTwoImgUrl: String,
      columnTreeTitle: String,
      columnTreeDesc: String,
      columnTreeImgUrl: String,
      columnFourTitle: String,
      columnFourDesc: String,
      columnFourImgUrl: String,
      backgroudPicUrl: String,
      titleColor: String
    },
    components: { TreeDRotateImg },
    setup() {

      let backgroundBigImage = ref("")

      const setResourceData = (jsonData) => {
        backgroundBigImage.value = jsonData["interview-image-bg"]
      }

      return {
        backgroundBigImage,
        setResourceData
      }
    }
  }
</script>

<style>
</style>