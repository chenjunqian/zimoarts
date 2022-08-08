<template>
  <div class="home">
    <HeaderComponent />
    <div class="home-container">
      <img class="home-school-icon" src="@/assets/black-red-logo.png" />
      <div class="home-dropdown-item-container">
        <div
          class="home-dropdown-item"
          style="background-color: #000000; color: #ffffff"
        >
          <div class="home-dropdown-text-container">
            <router-link slots="div" class="home-dropdown-text" to="/draw">
              <div class="home-dropdown-text">VISUAL</div>
            </router-link>
            <router-link slots="div" class="home-dropdown-text" to="/draw">
              <div class="home-dropdown-text">ART</div>
            </router-link>
          </div>
        </div>
        <div
          class="home-dropdown-item"
          style="background-color: #ab050f; color: #ffffff"
        >
          <div class="home-dropdown-text-container">
            <div class="home-dropdown-text">THEAFER &</div>
            <div class="home-dropdown-text">DANCE</div>
          </div>
        </div>
        <div
          class="home-dropdown-item"
          style="background-color: #ffce00; color: #ffffff"
        >
          <div class="home-dropdown-text-container">
            <div class="home-dropdown-text">MUSIC</div>
          </div>
        </div>
        <div
          class="home-dropdown-item"
          style="background-color: #c0c0c0; color: #ffffff"
        >
          <div class="home-dropdown-text-container">
            <div class="home-dropdown-text">ABOFUS</div>
          </div>
        </div>
        <div class="home-dropdown-item" style="background-color: white">
          <div class="home-dropdown-text-container" style="width: 80px">
            <div class="dropdown">
              <div class="home-dropdown-text" style="color: #000000">OTHER</div>
              <div class="dropdown-content">
                <router-link to="/about">About</router-link>
                <a href="https://academy.hubspot.com/">Academy</a>
                <a href="https://www.youtube.com/user/hubspot">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-big-pic-container">
        <div style="width: 100%;height: 800px; background-color: #ab050f; position: relative;" :style="{'background-image': `url(${require('@/assets/home-bg-001.png')})`}">
          <div class="video-container"></div>
        </div>
        <div style="width: 100%; height: 80px;"></div>
        
      </div>

      <div class="top-album-descrption-container">
        <div class="top-album-descrption-title-container">
          <div class="top-album-descrption-title" style="color: #ab050f">
            Upcoming
          </div>
          <div class="top-album-descrption-title">&nbsp;Events&nbsp;</div>
          <div>
            <div
              class="top-album-descrption-title"
              style="position: relative; font-size: 25px"
            >
              to be decided
            </div>
          </div>
        </div>
        <div class="top-album-descrption-text-container">
          <div class="top-album-descrption-text" style="margin-top: 10px">
            JGYTDETRTQWEESDFG Gsakf:hihzbnbooooogkdb qprpouposjalxnkjagdkj
            Hskahfoiqwhdnsmbxkjaln.aznkjl,a xH Gdskhqiohdbnakcnkja
            Cleofjlsknlnck
          </div>
        </div>
      </div>
      <div class="album-container">
        <div class="top-album-container">
          <div class="top-album-items-container">
            <div class="top-left-album-item-column">
              <div class="top-left-album-item-back">
                <div class="top-left-album-item-front"></div>
              </div>
              <div class="top-left-album-middler-placeholder"></div>
              <div class="top-left-album-item-text-container">
                <div class="top-left-album-item-text">JGYTDETRTQWEESDFG</div>
                <div class="top-left-album-item-text">GJHG JKHVJHG VHVHFV</div>
              </div>
            </div>

            <div class="top-middle-album-item-column">
              <div class="top-middle-album-item-text-container">
                <div class="top-middle-album-item-text">JGYTDETRTQWEESDFG</div>
                <div class="top-middle-album-item-text">CHGFD</div>
              </div>
              <div class="top-middle-album-item-back-left-block"></div>
              <div class="top-middle-album-item-back">
                <div class="top-middle-album-item-front"></div>
              </div>
            </div>

            <div class="top-right-album-item-column">
              <div class="top-right-album-middler-placeholder">
                <div class="top-right-album-item-text-container">
                  <div class="top-right-album-item-text">JGYTDETRTQWEESDFG</div>
                  <div class="top-right-album-item-text">
                    GDGHGHGDFGSDTSIUHIOVBBXZMIYTUXDG
                  </div>
                </div>
              </div>
              <div class="top-right-album-item-back">
                <div class="top-right-album-item-front"></div>
              </div>
            </div>

            <div
              style="
                justify-content: center;
                width: 100%;
                margin-top: 200px;
                color: #ab050f;
                font-size: 10px;
              "
            >
              <div style="">sadfkjanihgskbcjkooyeoqnmBslhflafkjsafl</div>
              <div style="">
                ;alksf;loskfmguugsdqozmxjhzvbn/dkdhfkjxhbckjvxlvklnvoqueobsahf
                lacjgluyioqyeowihds kxdaqoc
              </div>
            </div>
          </div>
        </div>

        <ColorDivider style="margin-top: 60px;"></ColorDivider>

        <div class="bottom-album-items-container">
          <div class="top-album-descrption-container">
            <div class="top-album-descrption-title-container">
              <div class="top-album-descrption-title" style="color: #ab050f">
                Visual Art&nbsp;
              </div>
              <div>
                <div
                  class="top-album-descrption-title"
                  style="position: relative; font-size: 25px"
                >
                  of&nbsp;
                </div>
              </div>
              <div class="top-album-descrption-title">the&nbsp;</div>
              <div class="top-album-descrption-title" style="color: #ffce00">
                fermm&nbsp;
              </div>
            </div>
          </div>

          <div class="bottom-album-columns-container">
            <div class="bottom-album-column">
              <img class="bottom-album-column-image" />
              <div class="bottom-album-column-circle-image"></div>
              <div class="bottom-album-column-text-container">
                <div class="bottom-album-column-text">JGYTDETRTQWEESDFG</div>
                <div class="bottom-album-column-text">
                  GDGHGHGDFGSDTSIUHIOVBBXZMIYTUXDG
                </div>
                <div class="bottom-album-column-text">
                  HJHFJH JHCH V FJ VJVCCCC H
                </div>
                <div class="bottom-album-column-text">GJHG JKHVJHG VHVHFV</div>
              </div>
            </div>
            <div class="bottom-album-column" style="margin-left: 15%">
              <img class="bottom-album-column-image" />
              <div class="bottom-album-column-circle-image"></div>
              <div class="bottom-album-column-text-container">
                <div class="bottom-album-column-text">JGYTDETRTQWEESDFG</div>
                <div class="bottom-album-column-text">
                  GDGHGHGDFGSDTSIUHIOVBBXZMIYTUXDG
                </div>
                <div class="bottom-album-column-text">
                  HJHFJH JHCH V FJ VJVCCCC H
                </div>
                <div class="bottom-album-column-text">GJHG JKHVJHG VHVHFV</div>
              </div>
            </div>
            <div class="bottom-album-column" style="margin-left: 15%">
              <img class="bottom-album-column-image" />
              <div class="bottom-album-column-circle-image"></div>
              <div class="bottom-album-column-text-container">
                <div class="bottom-album-column-text">JGYTDETRTQWEESDFG</div>
                <div class="bottom-album-column-text">
                  GDGHGHGDFGSDTSIUHIOVBBXZMIYTUXDG
                </div>
                <div class="bottom-album-column-text">
                  HJHFJH JHCH V FJ VJVCCCC H
                </div>
                <div class="bottom-album-column-text">GJHG JKHVJHG VHVHFV</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style="width: 100%;display: flex;justify-content: center;margin-top: 80px;margin-bottom: 200px;"
      >
        <div style="width: 30%">
          <div style="display: inline">
            <div style="color: #ab050f">anihgskbcjkooye</div>
            <div
              style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;word-break: break-all;word-wrap: break-word;"
            >
              alksf;loskfmguugsdqoz dkdhfkjxhbckjvxlvklnvoqueobsahf
              acjgluyioqyeowihds kxdaqoc
            </div>
          </div>
        </div>
        <div style="width: 30%">
          <div style="display: inline">
            <div style="color: #ffce00">anihgskbcjkooye</div>
            <div
              style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;word-break: break-all;word-wrap: break-word;"
            >
              alksf;loskfmguugsdqoz dkdhfkjxhbckjvxlvklnvoqueobsahf
              acjgluyioqyeowihds kxdaqoc
            </div>
          </div>
        </div>
        <div style="width: 30%">
          <div style="display: inline">
            <div style="color: #c0c0c0">anihgskbcjkooye</div>
            <div
              style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;word-break: break-all;word-wrap: break-word;"
            >
              alksf;loskfmguugsdqoz dkdhfkjxhbckjvxlvklnvoqueobsahf
              acjgluyioqyeowihds kxdaqoc
            </div>
          </div>
        </div>
      </div>

      <!-- interview block -->
      <div style="width: 100%; background-color: #c0c0c0" :style="{'background-image': `url(${require('@/assets/home-bg-002.png')})`}">
        <div
          style="
            width: 100%;
            padding-top: 50px;
            margin-bottom: 50px;
            font-size: 58px;
            font-weight: bolder;
            border-bottom: 1px solid #000000;
            display: flex;
            justify-content: center;
            color: #ffffff;
          "
        >
          <div>INTERVIEW</div>
        </div>

        <!-- top colomn -->
        <div
          style="
            width: 100%;
            border-bottom: 1px solid #000000;
            padding-top: 50px;
          "
        >
          <div style="margin-left: 5%; margin-right: 5%; display: flex;color: #ffffff;">
            <div
              style="width: 25%; height: 160px; border-left: 1px solid #000000"
            >
              <img
                style="
                  height: 90%;
                  width: 90%;
                  padding-top: 5%;
                  padding-left: 5%;
                  padding-right: 5%;
                "
              />
            </div>
            <div
              style="width: 25%; height: 160px; border-left: 1px solid #000000"
            >
              <div style="font-weight: bolder">sadfkjanihgskbcjkooye</div>
              <div
                style="
                  margin: 0 auto;
                  word-break: break-all;
                  word-wrap: break-word;
                "
              >
                oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
                alksf;loskfmguugsdqozmxjhzvbn/
              </div>
            </div>
            <div
              style="width: 25%; height: 160px; border-left: 1px solid #000000"
            >
              <img
                style="
                  height: 90%;
                  width: 90%;
                  padding-top: 5%;
                  padding-left: 5%;
                  padding-right: 5%;
                "
              />
            </div>
            <div
              style="
                width: 25%;
                height: 160px;
                border-left: 1px solid #000000;
                border-right: 1px solid #000000;
              "
            >
              <div style="font-weight: bolder">sadfkjanihgskbcjkooye</div>
              <div
                style="
                  margin: 0 auto;
                  word-break: break-all;
                  word-wrap: break-word;
                "
              >
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
            <div
              style="width: 25%; height: 160px; border-left: 1px solid #000000"
            >
              <div style="font-weight: bolder">sadfkjanihgskbcjkooye</div>
              <div
                style="
                  margin: 0 auto;
                  word-break: break-all;
                  word-wrap: break-word;
                "
              >
                oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
                alksf;loskfmguugsdqozmxjhzvbn/
              </div>
            </div>
            <div
              style="width: 25%; height: 160px; border-left: 1px solid #000000"
            >
              <img
                style="
                  height: 90%;
                  width: 90%;
                  padding-top: 5%;
                  padding-left: 5%;
                  padding-right: 5%;
                "
              />
            </div>
            <div
              style="
                width: 25%;
                height: 160px;
                border-left: 1px solid #000000;
                border-right: 1px solid #000000;
              "
            >
              <div style="font-weight: bolder">sadfkjanihgskbcjkooye</div>
              <div
                style="
                  margin: 0 auto;
                  word-break: break-all;
                  word-wrap: break-word;
                "
              >
                oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
                alksf;loskfmguugsdqozmxjhzvbn/
              </div>
            </div>
            <div
              style="width: 25%; height: 160px; border-right: 1px solid #000000"
            >
              <img
                style="
                  height: 90%;
                  width: 90%;
                  padding-top: 5%;
                  padding-left: 5%;
                  padding-right: 5%;
                "
              />
            </div>
          </div>
        </div>
      </div>
      <!-- bottom description block -->
      <div style="width: 100%">
        <!-- line one -->
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 100px;
          "
        >
          <div style="width: 30%">
            <div style="width: 80%">
              <div style="display: flex">
                <img style="width: 10px; height: 10px" src="" alt="" />
                <div style="text-align: left; color: #ffce00">
                  sadfkjanihgskbcjkooye
                </div>
              </div>
              <div
                style="
                  margin-left: 10px;
                  word-break: break-all;
                  word-wrap: break-word;
                  text-align: left;
                "
              >
                oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                dkdhfkjxhbckjvxlvklnvoqueobsahf lacjgluyioqyeowihds kxdaqoc
              </div>
            </div>
          </div>
          <div style="width: 30%">
            <div style="width: 80%">
              <div style="display: flex">
                <img style="width: 10px; height: 10px" src="" alt="" />
                <div style="text-align: left; color: #ffce00">
                  sadfkjanihgskbcjkooye
                </div>
              </div>
              <div
                style="
                  margin-left: 10px;
                  word-break: break-all;
                  word-wrap: break-word;
                  text-align: left;
                "
              >
                oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                dkdhfkjxhbckjvxlvklnvoqueobsahf lacjgluyioqyeowihds kxdaqoc
              </div>
            </div>
          </div>
          <div style="width: 30%">
            <div style="width: 80%">
              <div style="display: flex">
                <img style="width: 10px; height: 10px" src="" alt="" />
                <div style="text-align: left; color: #ffce00">
                  sadfkjanihgskbcjkooye
                </div>
              </div>
              <div
                style="
                  margin-left: 10px;
                  word-break: break-all;
                  word-wrap: break-word;
                  text-align: left;
                "
              >
                oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                dkdhfkjxhbckjvxlvklnvoqueobsahf lacjgluyioqyeowihds kxdaqoc
              </div>
            </div>
          </div>
        </div>
        <!-- line two -->
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 100px;
          "
        >
          <div style="width: 30%">
            <div style="width: 80%">
              <div style="display: flex">
                <img style="width: 10px; height: 10px" src="" alt="" />
                <div style="text-align: left; color: #ffce00">
                  sadfkjanihgskbcjkooye
                </div>
              </div>
              <div
                style="
                  margin-left: 10px;
                  word-break: break-all;
                  word-wrap: break-word;
                  text-align: left;
                "
              >
                oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                dkdhfkjxhbckjvxlvklnvoqueobsahf lacjgluyioqyeowihds kxdaqoc
              </div>
            </div>
          </div>
          <div style="width: 30%">
            <div style="width: 80%">
              <div style="display: flex">
                <img style="width: 10px; height: 10px" src="" alt="" />
                <div style="text-align: left; color: #ffce00">
                  sadfkjanihgskbcjkooye
                </div>
              </div>
              <div
                style="
                  margin-left: 10px;
                  word-break: break-all;
                  word-wrap: break-word;
                  text-align: left;
                "
              >
                oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                dkdhfkjxhbckjvxlvklnvoqueobsahf lacjgluyioqyeowihds kxdaqoc
              </div>
            </div>
          </div>
          <div style="width: 30%">
            <div style="width: 80%">
              <div style="display: flex">
                <img style="width: 10px; height: 10px" src="" alt="" />
                <div style="text-align: left; color: #ffce00">
                  sadfkjanihgskbcjkooye
                </div>
              </div>
              <div
                style="
                  margin-left: 10px;
                  word-break: break-all;
                  word-wrap: break-word;
                  text-align: left;
                "
              >
                oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                dkdhfkjxhbckjvxlvklnvoqueobsahf lacjgluyioqyeowihds kxdaqoc
              </div>
            </div>
          </div>
        </div>

        <div
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 150px;
            padding-bottom: 200px;
            color: #ffce00;
          "
        >
          <div style="width: 50%; word-break: break-all; word-wrap: break-word">
            sadfkjanihgskbcjkooyeoqnmBslhflafkjsafl
            ;alksf;loskfmguugsdqozmxjhzvbn/dkdhfkjxhbckjvxlvklnvoqueobsahf
            lacjgluyioqyeowihds kxdaqoc
          </div>
        </div>
      </div>
    </div>
    <FooterComponent style="margin-top: 20px" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FootComponent.vue";
import ColorDivider from "@/components/ColorDivider.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    FooterComponent,
    ColorDivider
},
};
</script>

<style scoped>
@media screen and (max-width: 1200px) {
  .home {
    background-color: #ffffff;
    width: 1500px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1200px) {
  .home {
    background-color: #ffffff;
    max-width: 1500px;
    margin: 0 auto;
  }
}

.home-container {
  width: 100%;
  padding-top: 50px;
  background-color: #ffffff;
  box-shadow: 0 20px 20px -2px #888888;
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

.home-dropdown-text-container {
  width: 60px;
  position: absolute;
  bottom: 5px;
}

.home-dropdown-text {
  font-size: 13px;
  text-align: center !important;
  word-break: break-all;
  word-wrap: break-word;
  text-decoration: none;
  color: #ffffff;
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
  text-align: left;
}

.dropdown-content a:hover {
  color: #ffffff;
  background-color: #c0c0c0;
}

/* main image area */
.home-big-pic-container {
  width: 100%;
  margin-top: 180px;
  box-shadow: 0 20px 20px -2px #888888;
}

.video-container {
  width: 500px;
  height: 300px;
  background-color: black;
  margin-left: 100px;
  position: absolute;
  bottom: -80px;
}

/* middle album area */
.album-container {
  width: 100%;
  box-shadow: 0 20px 20px -2px #888888;
}

.top-album-container {
  width: 1275px;
  margin: 0 auto;
}

.top-album-descrption-container {
  margin-bottom: 150px;
  margin-top: 150px;
}

.top-album-descrption-title-container {
  width: 100%;
  font-size: 58px;
  font-weight: bolder;
  border-bottom: 1px solid lightslategray;
  display: flex;
  justify-content: center;
}

.top-album-descrption-title {
  display: inline;
}

.top-album-descrption-text-container {
  font-size: 9px;
  margin-left: 300px;
}

.top-album-descrption-text {
  width: 20%;
  font-size: 8px;
  margin-left: 10px;
  text-align: left;
  word-break: break-all;
  word-wrap: break-word;
}

.top-album-items-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

/* left album */
.top-left-album-item-column {
  width: 300px;
  height: 400px;
  margin-left: 100px;
  margin-top: 300px;
  display: flex;
  position: relative;
}

.top-left-album-item-back {
  width: 150px;
  height: 400px;
  background-color: #ab050f;
  display: inline;
}

.top-left-album-middler-placeholder {
  width: 110px;
  height: 400px;
}

.top-left-album-item-front {
  width: 250px;
  height: 350px;
  background-color: #c0c0c0;
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
  right: -100px;
}

.top-left-album-item-text {
  font-size: 8px;
  text-align: right;
}

/* middel album */
.top-middle-album-item-column {
  width: 300px;
  height: 400px;
  margin-left: 180px;
  margin-right: -150px;
  margin-top: -20px;
  display: flex;
  position: relative;
}

.top-middle-album-item-back-left-block {
  width: 250px;
  height: 400px;
  display: inline;
}

.top-middle-album-item-back {
  width: 150px;
  height: 400px;
  background-color: #000000;
  display: inline;
}

.top-middle-album-item-front {
  width: 250px;
  height: 350px;
  background-color: #c0c0c0;
  float: right;
  margin-top: 25px;
  margin-right: 25px;
}

.top-middle-album-item-text-container {
  width: 150px;
  margin-bottom: 40px;
  position: absolute;
  bottom: 25px;
  left: -140px;
  list-style-type: disc;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}

.top-middle-album-item-text {
  font-size: 8px;
  text-align: right;
}

/* right album */
.top-right-album-item-column {
  width: 450px;
  height: 400px;
  margin-left: 15px;
  margin-top: 250px;
  display: flex;
  z-index: 99;
}

.top-right-album-item-back {
  width: 150px;
  height: 400px;
  background-color: #ffce00;
  display: inline;
}

.top-right-album-middler-placeholder {
  width: 110px;
  height: 100%;
  display: flex;
  position: relative;
}

.top-right-album-item-front {
  width: 250px;
  height: 350px;
  background-color: #c0c0c0;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 25px;
  z-index: 99;
  position: absolute;
}

.top-right-album-item-text-container {
  width: auto;
  position: absolute;
  left: -70px;
  bottom: 10px;
  display: block;
  list-style-type: disc;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}

.top-right-album-item-text {
  font-size: 8px;
  text-align: right;
}

/* bottom album */
.bottom-album-items-container {
  width: 100%;
  margin-top: 150px;
}

.bottom-album-title-container {
  width: 100%;
  border-bottom: 1px solid #c0c0c0;
  display: flex;
  justify-content: center;
}

.bottom-album-columns-container {
  width: 70%;
  margin: 0 auto;
  margin-top: 120px;
  padding-bottom: 120px;
  display: flex;
}

.bottom-album-column {
  width: 25%;
  display: inline;
}

.bottom-album-column-image {
  width: 100%;
  height: 150px;
  background-color: #888888;
}

.bottom-album-column-circle-image {
  width: 50%;
  height: 50px;
  background-color: #888888;
  margin: 0 auto;
  margin-top: 80px;
}

.bottom-album-column-text-container {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

.bottom-album-column-text {
  width: 100%;
  font-size: 9px;
  display: block;
}

/* bottom color block */
.bottom-color-block-container {
  width: 100%;
  height: 15px;
  margin-top: 60px;
  display: flex;
}

.bottom-color-block {
  width: 25%;
  height: 100%;
}
</style>
