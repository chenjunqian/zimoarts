<template>
  <div class="about">
    <HeaderComponent />
    <!-- menu items block -->
    <div
      style="width: 100%; display: flex; position: relative; margin-top: 40px"
    >
      <div style="position: absolute; right: 0; display: flex">
        <div
          style="
            width: 120px;
            height: 30px;
            background-color: #000000;
            line-height: 30px;
            color: #ffffff;
            font-size: 15px;
            font-weight: bolder;
          "
        >
          DRAWING
        </div>
        <div
          style="
            width: 120px;
            height: 30px;
            background-color: #ab050f;
            line-height: 30px;
            color: #ffffff;
            font-size: 15px;
            font-weight: bolder;
          "
        >
          SCALPTURE
        </div>
        <div
          style="
            width: 120px;
            height: 30px;
            background-color: #ffce00;
            line-height: 30px;
            color: #ffffff;
            font-size: 15px;
            font-weight: bolder;
          "
        >
          PHOFOGRCPHY
        </div>
        <div
          style="
            width: 120px;
            height: 30px;
            background-color: #c0c0c0;
            line-height: 30px;
            color: #ffffff;
            font-size: 15px;
            font-weight: bolder;
          "
        >
          HOME
        </div>
      </div>
    </div>
    <!-- school bagde block -->
    <div style="margin-top: 80px">
      <img
        style="width: 180px; height: 90px; float: left; margin-left: 80px"
        src="@/assets/black-red-logo.png"
      />
    </div>
    <!-- introduction block -->
    <div style="width: 100%; display: flex; border-bottom: 1px solid #c0c0c0">
      <div style="width: 50%; height: 20px;"></div>
      <div style="width: 50%;display: flex;">
        <div style="font-size: 60px; color: #ab050f">Introduc&nbsp;</div>
        <div style="font-size: 60px; color: #000000">tion</div>
      </div>
    </div>
    <FooterComponent style="margin-top: 20px" />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FootComponent.vue";

export default {
  name: "AboutView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
@media screen and (max-width: 1200px) {
  .about {
    background-color: #ffffff;
    width: 1500px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1200px) {
  .about {
    background-color: #ffffff;
    max-width: 1500px;
    margin: 0 auto;
  }
}
</style>
