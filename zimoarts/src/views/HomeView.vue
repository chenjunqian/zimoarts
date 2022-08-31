<template>
  <div class="home">
    <HeaderComponent />
    <div class="home-container">
      <img class="home-school-icon" src="@/assets/black-red-logo.png" />
      <HomeDropDowmMenuComponent style="margin-top: 30px" />
      <PageTopBigImageComponent ref="topImageComp" style="margin-top: 180px;" />
      <div class="top-album-descrption-container">
        <div class="top-album-descrption-title-container">
          <div class="top-album-descrption-title" style="color: #ab050f">
            Upcoming
          </div>
          <div class="top-album-descrption-title">&nbsp;Events&nbsp;</div>
          <div>
            <div class="top-album-descrption-title" style="position: relative; font-size: 25px">
              to be decided
            </div>
          </div>
        </div>
        <div class="top-album-descrption-text-container">
          <div class="top-album-descrption-text" style="margin-top: 10px">
            {{ pageData.upcomingEvent.upcomingEventsText }}
          </div>
        </div>
      </div>
      <div class="album-container">
        <div class="top-album-container">
          <div class="top-album-items-container">
            <div class="top-left-album-item-column">
              <div class="top-left-album-item-back">
                <div class="top-left-album-item-front">
                  <img style="width: 100%; height: auto;"
                    src="http://www.grotonarts.com/static/home/upcomingLeftImage.png" />
                </div>
              </div>
              <div class="top-left-album-middler-placeholder"></div>
              <div class="top-left-album-item-text-container">
                <div class="top-left-album-item-text">{{ pageData.upcomingEvent.leftBlock.topText }}</div>
                <div class="top-left-album-item-text">{{ pageData.upcomingEvent.leftBlock.bottomText }}</div>
              </div>
            </div>

            <div class="top-middle-album-item-column">
              <div class="top-middle-album-item-text-container">
                <div class="top-middle-album-item-text">{{ pageData.upcomingEvent.middleBlock.topText }}</div>
                <div class="top-middle-album-item-text">{{ pageData.upcomingEvent.middleBlock.bottomText }}</div>
              </div>
              <div class="top-middle-album-item-back-left-block"></div>
              <div class="top-middle-album-item-back">
                <div class="top-middle-album-item-front">
                  <img style="width: 100%; height: auto;"
                    src="http://www.grotonarts.com/static/home/upcomingMiddleImage.png" />
                </div>
              </div>
            </div>

            <div class="top-right-album-item-column">
              <div class="top-right-album-middler-placeholder">
                <div class="top-right-album-item-text-container">
                  <div class="top-right-album-item-text">{{ pageData.upcomingEvent.rightBlock.topText }}</div>
                  <div class="top-right-album-item-text">
                    {{ pageData.upcomingEvent.rightBlock.bottomText }}
                  </div>
                </div>
              </div>
              <div class="top-right-album-item-back">
                <div class="top-right-album-item-front">
                  <img style="width: 100%; height: auto;"
                    src="http://www.grotonarts.com/static/home/upcomingRightImage.png" />
                </div>
              </div>
            </div>

            <div style="
                justify-content: center;
                display: flex;
                width: 100%;
                margin-top: 200px;
                color: #ab050f;
                font-size: 10pt;
              ">
              <div style="width: 50%;">{{ pageData.bottomText }}</div>
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
                <div class="top-album-descrption-title" style="position: relative; font-size: 25px">
                  of&nbsp;
                </div>
              </div>
              <div class="top-album-descrption-title">the&nbsp;</div>
              <div class="top-album-descrption-title" style="color: #ffce00">
                Term&nbsp;
              </div>
            </div>
          </div>

          <div class="bottom-album-columns-container">
            <div class="bottom-album-column">
              <img class="bottom-album-column-image" :src="pageData.visualArtOfTheTerm.leftBlock.topImage" />
              <div class="bottom-album-column-circle-image">
                <img style="width: 100%; height: auto;" :src="pageData.visualArtOfTheTerm.leftBlock.bottomImage" />
              </div>
              <div class="bottom-album-column-text-container">
                <div class="bottom-album-column-text">{{ pageData.visualArtOfTheTerm.leftBlock.nameOfArt }}</div>
                <div class="bottom-album-column-text">
                  {{ pageData.visualArtOfTheTerm.leftBlock.author }}
                </div>
                <div class="bottom-album-column-text">
                  {{ pageData.visualArtOfTheTerm.leftBlock.theme }}
                </div>
                <div class="bottom-album-column-text">{{ pageData.visualArtOfTheTerm.leftBlock.qoute }}</div>
              </div>
            </div>
            <div class="bottom-album-column" style="margin-left: 15%">
              <img class="bottom-album-column-image" :src="pageData.visualArtOfTheTerm.middleBlock.topImage" />
              <div class="bottom-album-column-circle-image">
                <img style="width: 100%; height: auto;" :src="pageData.visualArtOfTheTerm.middleBlock.bottomImage" />
              </div>
              <div class="bottom-album-column-text-container">
                <div class="bottom-album-column-text">{{ pageData.visualArtOfTheTerm.middleBlock.nameOfArt }}</div>
                <div class="bottom-album-column-text">
                  {{ pageData.visualArtOfTheTerm.middleBlock.author }}
                </div>
                <div class="bottom-album-column-text">
                  {{ pageData.visualArtOfTheTerm.middleBlock.theme }}
                </div>
                <div class="bottom-album-column-text">{{ pageData.visualArtOfTheTerm.middleBlock.qoute }}</div>
              </div>
            </div>
            <div class="bottom-album-column" style="margin-left: 15%">
              <img class="bottom-album-column-image" :src="pageData.visualArtOfTheTerm.rightBlock.topImage" />
              <div class="bottom-album-column-circle-image">
                <img style="width: 100%; height: auto;" :src="pageData.visualArtOfTheTerm.rightBlock.bottomImage" />
              </div>
              <div class="bottom-album-column-text-container">
                <div class="bottom-album-column-text">{{ pageData.visualArtOfTheTerm.rightBlock.nameOfArt }}</div>
                <div class="bottom-album-column-text">
                  {{ pageData.visualArtOfTheTerm.rightBlock.author }}
                </div>
                <div class="bottom-album-column-text">
                  {{ pageData.visualArtOfTheTerm.rightBlock.theme }}
                </div>
                <div class="bottom-album-column-text">{{ pageData.visualArtOfTheTerm.rightBlock.qoute }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- interview block -->
      <InterviewColumnComponent ref="interviewColumnRef" />
      <!-- bottom description block -->
      <DescriptionColumnComponent />
    </div>
    <FooterComponent style="margin-top: 20px" />
  </div>
</template>

<script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FootComponent.vue";
  import ColorDivider from "@/components/ColorDivider.vue";
  import InterviewColumnComponent from "@/components/InterviewColumnComponent.vue";
  import DescriptionColumnComponent from "@/components/DescriptionColumnComponent.vue";
  import HomeDropDowmMenuComponent from "@/components/HomeDropDowmMenuComponent.vue";
  import PageTopBigImageComponent from "@/components/PageTopBigImageComponent.vue";
  import { httpRequest } from "@/libs/request";
  import { ref, reactive } from "vue";

  export default {
    name: "HomeView",
    components: {
      HeaderComponent,
      FooterComponent,
      ColorDivider,
      InterviewColumnComponent,
      DescriptionColumnComponent,
      HomeDropDowmMenuComponent,
      PageTopBigImageComponent
    },
    setup() {
      let topImageComp = ref()
      let interviewColumnRef = ref()
      let pageData = reactive({
        upcomingEvent: {
          upcomingEventsText: "",
          middleBlock: {
            topText: "",
            bottomText: "",
            imageUrl: ""
          },
          leftBlock: {
            topText: "",
            bottomText: "",
            imageUrl: ""
          },
          rightBlock: {
            topText: "",
            bottomText: "",
            imageUrl: ""
          },
          bottomText: ""
        },
        visualArtOfTheTerm: {
          leftBlock: {
            nameOfArt: "",
            author: "",
            theme: "",
            qoute: ""
          },
          middleBlock: {
            nameOfArt: "",
            author: "",
            theme: "",
            qoute: ""
          },
          rightBlock: {
            nameOfArt: "",
            author: "",
            theme: "",
            qoute: ""
          }
        },
        interview: {
          interviewColumn: {
            interviewImageBg: "",
            topLeftTextTitle: "",
            topLeftText: "",
            topLeftImageUrl: "",
            topRightTextTitle: "",
            topRightText: "",
            topRightImageUrl: "",
            bottomLeftTitle: "",
            bottomLeftText: "",
            bottomLeftImageUrl: "",
            bottomRightTitle: "",
            bottomRightText: "",
            bottomRightImageUrl: ""
          },
          topInterview: {
            letfColor: "",
            rightColor: "",
            descriptionColor: "",
            topImageUrl: "",
            topDesc: "",
            topAuthor: "",
            topAuthorTitle: "",
            contentTitle: "",
            content: "",
            contentAuthor: "",
            contentAuthorTitle: "",
            contentImageUrl: "",
            contentImageDesc: "",
            contentImageSubDesc: ""
          }
        }
      })

      function getHomeResource() {
        httpRequest.get("http://www.grotonarts.com/static/home/home-resource.json").then(function (response) {
          topImageComp.value.setResourceData(response["topBigImageComponent"])
          interviewColumnRef.value.setResourceData(response["interview"]["interviewColumn"])
          pageData.upcomingEvent.upcomingEventsText = response['upcomingEvent']['upcomingEventsText']
          pageData.upcomingEvent.middleBlock.topText = response['upcomingEvent']['middleBlock']['topText']
          pageData.upcomingEvent.middleBlock.bottomText = response['upcomingEvent']['middleBlock']['bottomText']
          pageData.upcomingEvent.middleBlock.imageUrl = response['upcomingEvent']['middleBlock']['imageUrl']
          pageData.upcomingEvent.leftBlock.topText = response['upcomingEvent']['leftBlock']['topText']
          pageData.upcomingEvent.leftBlock.bottomText = response['upcomingEvent']['leftBlock']['bottomText']
          pageData.upcomingEvent.leftBlock.imageUrl = response['upcomingEvent']['leftBlock']['imageUrl']
          pageData.upcomingEvent.rightBlock.topText = response['upcomingEvent']['rightBlock']['topText']
          pageData.upcomingEvent.rightBlock.bottomText = response['upcomingEvent']['rightBlock']['bottomText']
          pageData.upcomingEvent.rightBlock.imageUrl = response['upcomingEvent']['rightBlock']['imageUrl']
          pageData.bottomText = response['upcomingEvent']['bottomText']
          pageData.visualArtOfTheTerm.leftBlock.nameOfArt = response['visualArtOfTheTerm']['leftBlock']['nameOfArt']
          pageData.visualArtOfTheTerm.leftBlock.author = response['visualArtOfTheTerm']['leftBlock']['author']
          pageData.visualArtOfTheTerm.leftBlock.theme = response['visualArtOfTheTerm']['leftBlock']['theme']
          pageData.visualArtOfTheTerm.leftBlock.qoute = response['visualArtOfTheTerm']['leftBlock']['qoute']
          pageData.visualArtOfTheTerm.leftBlock.topImage = response['visualArtOfTheTerm']['leftBlock']['topImage']
          pageData.visualArtOfTheTerm.leftBlock.bottomImage = response['visualArtOfTheTerm']['leftBlock']['bottomImage']

          pageData.visualArtOfTheTerm.middleBlock.nameOfArt = response['visualArtOfTheTerm']['middleBlock']['nameOfArt']
          pageData.visualArtOfTheTerm.middleBlock.author = response['visualArtOfTheTerm']['middleBlock']['author']
          pageData.visualArtOfTheTerm.middleBlock.theme = response['visualArtOfTheTerm']['middleBlock']['theme']
          pageData.visualArtOfTheTerm.middleBlock.qoute = response['visualArtOfTheTerm']['middleBlock']['qoute']
          pageData.visualArtOfTheTerm.middleBlock.topImage = response['visualArtOfTheTerm']['middleBlock']['topImage']
          pageData.visualArtOfTheTerm.middleBlock.bottomImage = response['visualArtOfTheTerm']['middleBlock']['bottomImage']

          pageData.visualArtOfTheTerm.rightBlock.nameOfArt = response['visualArtOfTheTerm']['rightBlock']['nameOfArt']
          pageData.visualArtOfTheTerm.rightBlock.author = response['visualArtOfTheTerm']['rightBlock']['author']
          pageData.visualArtOfTheTerm.rightBlock.theme = response['visualArtOfTheTerm']['rightBlock']['theme']
          pageData.visualArtOfTheTerm.rightBlock.qoute = response['visualArtOfTheTerm']['rightBlock']['qoute']
          pageData.visualArtOfTheTerm.rightBlock.topImage = response['visualArtOfTheTerm']['rightBlock']['topImage']
          pageData.visualArtOfTheTerm.rightBlock.bottomImage = response['visualArtOfTheTerm']['rightBlock']['bottomImage']

        }).catch(function (error) {
          console.log(error);
        });

      }

      getHomeResource()

      return {
        topImageComp,
        interviewColumnRef,
        pageData
      }
    }
  };
</script>

<style scoped>
  .home {
    background-color: #ffffff;
    width: 1400px;
    margin: 0 auto;
  }

  .home-container {
    width: 100%;
    padding-top: 50px;
    background-color: #ffffff;
    box-shadow: 0px 20px 10px -10px #888888;
  }

  /* top dropdown area */
  .home-school-icon {
    width: 240px;
    height: 120px;
    float: left;
    margin-left: 80px;
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
    width: 30%;
    font-size: 12px;
    margin-left: 10px;
    text-align: left;
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
    font-size: 8pt;
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
    font-size: 8pt;
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
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 25px;
    z-index: 99;
    position: absolute;
  }

  .top-right-album-item-text-container {
    width: 100%;
    position: absolute;
    left: -20px;
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
    font-size: 8pt;
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
    width: 400px;
    margin: 0 auto;
    margin-top: 120px;
    padding-bottom: 120px;
    display: flex;
    justify-content: center;
  }

  .bottom-album-column {
    display: inline;
  }

  .bottom-album-column-image {
    width: 350px;
    height: 350px;
    background-color: #888888;
  }

  .bottom-album-column-circle-image {
    width: 120px;
    height: 120px;
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
    font-size: 8pt;
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