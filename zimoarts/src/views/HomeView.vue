<template>
  <div class="home">
    <HeaderComponent />
    <div class="home-container">
      <div class="home-dropdown-item-container">
        <div class="home-dropdown-item">
          <div class="home-dropdown-text">menu one</div>
        </div>
        <div class="home-dropdown-item">
          <div class="home-dropdown-text">menu two</div>
        </div>
        <div class="home-dropdown-item">
          <div class="home-dropdown-text">menu tree</div>
        </div>
        <div class="home-dropdown-item">
          <div class="home-dropdown-text">menu four</div>
        </div>
        <div class="home-dropdown-item">
          <div class="home-dropdown-text">menu five</div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FootComponent.vue"

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    FooterComponent
  },
};
</script>

<style>
.home-container {
  width: 100%;
  height: 800px;
  border-style: groove;
  border-color: lightgray;
  border-width: thin;
}

.home-dropdown-item-container {
  width: 700px;
  height: 250px;
  margin-right: 30px;
  float: right;
  position: relative;
  z-index: 99;
  display: flex;
  flex-wrap: wrap;
}

.home-dropdown-item {
  height: 100%;
  width: 100px;
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
</style>
