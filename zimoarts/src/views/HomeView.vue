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
      <div class="album-container">
        <div class="top-album-container">
          <div class="top-album-descrption-container">
              <div class="top-album-descrption-title">oqhgdb askuc</div>
              <div class="top-album-descrption-text-container">
                <div class="right-footer-text" style="margin-top: 10px">JGYTDETRTQWEESDFG</div>
                <div class="right-footer-text">GDGHGHGDFGSDTSIUHIOVBBXZMIYTUXDG</div>
                <div class="right-footer-text">HJHFJH JHCH V FJ VJVCCCC H</div>
                <div class="right-footer-text">GJHG JKHVJHG VHVHFV</div>
                <div class="right-footer-text" style="margin-bottom: 10px">CHGFD</div>
              </div>
          </div>

          <div class="top-album-items-container">
            <div class="top-left-album-item-column">
              <div class="top-left-album-item-back">
                <div class="top-left-album-item-front"></div>
              </div>
              <div class="top-left-album-middler-placeholder"></div>
              <dir class="top-left-album-item-text-container">
                <div class="top-left-album-item-text">JGYTDETRTQWEESDFG</div>
                <div class="top-left-album-item-text">GJHG JKHVJHG VHVHFV</div>
              </dir>
            </div>
          </div>
        </div>
      </div>
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

<style scoped>

@media screen and (max-width: 1200px) {
  .home {
    background-color: #FFFFFF;
    width: 1200px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1200px) {
  .home {
    background-color: #FFFFFF;
    max-width: 1500px;
    margin: 0 auto;
  }
}

.home-container {
  width: 100%;
  padding-top: 50px;
  background-color: #FFFFFF;
}

/* top dropdown area */
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

/* main image area */
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

/* middle album area */
.album-container {
  width: 100%;
}

.top-album-container {
  width: 100%;
  margin-top: 150px;
}

.top-album-descrption-container {
  float: left;
  margin-left: 100px;
}

.top-album-descrption-title {
  font-size: 58px;
  font-weight: bolder;
}

.top-album-descrption-text-container {
  font-size: 9px;
  border-left: 1px solid lightslategray;
  border-top: 1px solid lightslategray;
}

.right-footer-text {
  width: 100%;
  font-size: 8px;
  margin-left: 10px;
  text-align: left;
}

.top-album-items-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

}

.top-left-album-item-column {
  width: 450px;
  height: 400px;
  margin-left: 100px;
  margin-top: 300px;
  display: flex;
  position: relative; 
}

.top-left-album-item-back {
  width: 150px;
  height: 400px;
  background-color: #AB050F;
  display: inline;
}

.top-left-album-middler-placeholder {
  width: 110px;
  height: 400px;
}

.top-left-album-item-front {
  width: 280px;
  height: 350px;
  background-color: #C0C0C0;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 25px;
  z-index: 99;
  position: absolute;
}

.top-left-album-item-text-container {
  width: 150px;
  position: absolute; 
  margin-bottom: 40px;
  bottom: 0;
  right: 0;
}

.top-left-album-item-text {
  font-size: 8px;
  text-align: right;
}
</style>
