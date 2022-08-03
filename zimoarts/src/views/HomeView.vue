<template>
  <div class="home">
    <HeaderComponent />
    <div class="home-container">
      <img class="home-school-icon" src="@/assets/black-red-logo.png">
      <div class="home-dropdown-item-container">
        <div class="home-dropdown-item" style="background-color: #000000;color: #FFFFFF">
          <div class="home-dropdown-text">menu one</div>
        </div>
        <div class="home-dropdown-item" style="background-color: #AB050F;color: #FFFFFF">
          <div class="home-dropdown-text">menu two</div>
        </div>
        <div class="home-dropdown-item" style="background-color: #FFCE00;color: #FFFFFF">
          <div class="home-dropdown-text">menu tree</div>
        </div>
        <div class="home-dropdown-item" style="background-color: #C0C0C0;color: #FFFFFF">
          <div class="home-dropdown-text">menu four</div>
        </div>
        <div class="home-dropdown-item" style="background-color: white;color: #000000">
          <div class="home-dropdown-text">menu five</div>
        </div>
      </div>
      <div class="home-big-pic-container"></div>
      <div class="video-container"></div>
      <div class="album-container"></div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FootComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>

.home {
  background-color: #FFFFFF;
}

.home-container {
  width: 100%;
  padding-top: 50px;
  background-color: #FFFFFF;
}

.home-school-icon {
  width: 180px;
  height: 90px;
  float: left;
  margin-left: 80px;
}

.home-dropdown-item-container {
  width: 600px;
  height: 200px;
  padding-right: 25px;
  padding-top: 30px;
  float: right;
  position: relative;
  z-index: 99;
  display: flex;
  flex-wrap: wrap;
}

.home-dropdown-item {
  height: 100%;
  width: 80px;
  margin-left: 30px;
  background-color: wheat;
  display: flex;
  justify-content: center;
  box-shadow: -25px 0px 25px -7px #888888;
}

.home-dropdown-text {
  position: absolute;
  bottom: 0;
  text-align: center !important;
}

.home-big-pic-container {
  width: 100%;
  height: 800px;
  background-color:antiquewhite;
  margin-top: 180px;
}

.video-container {
  width: 400px;
  height: 300px;
  background-color: black;
  margin-left: 100px;
  margin-top: -220px;
}

.album-container {
  width: 100%;
  color: aqua;
}
</style>
