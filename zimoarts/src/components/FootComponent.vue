<template>
  <div class="footer-container">
    <div class="footer-container-left-placeholder"></div>
    <div class="footer-container-center-wrapper">
      <div class="left-footer-container">
        <div class="left-footer-top-text">Groton School</div>
        <div class="left-footer-text-bottom-container">
          <div class="left-footer-bottom-text">
            @2022 GROTON SCHOOL ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
      <div class="center-footer-container">
        <img class="center-footer-logo" src="@/assets/school-bagde.png" alt="" />
      </div>
      <div class="right-footer-container">
        <div class="right-footer-logo-container">
          <img class="right-footer-logo" src="http://www.grotonarts.com/static/others/red-black-school-name.png">
        </div>
        <div class="right-footer-text-column">
          <div class="right-footer-text">Communication:</div>
          <div class="right-footer-text">{{ pageData.email }}</div>
          <div class="right-footer-text">{{ pageData.phone }}</div>
          <div class="right-footer-text">{{ pageData.name }}</div>
        </div>
      </div>
    </div>
    <div class="footer-container-right-placeholder"></div>
  </div>
</template>

<script>
  import { httpRequest } from '@/libs/request';
  import { reactive } from 'vue';

  export default {
    name: "FooterComponent",
    setup() {
      let pageData = reactive({
        email: "",
        phone: "",
        name: ""
      })
      httpRequest.get("http://www.grotonarts.com/static/footer/footer-resource.json").then(function (response) {
        pageData.email = response["email"]
        pageData.phone = response["phone"]
        pageData.name = response["name"]

      }).catch(function (error) {
        console.log(error);
      });

      return {
        pageData
      }
    }
  };
</script>

<style scoped>
  .footer-container {
    width: 100%;
    height: 180px;
    display: flex;
    flex-wrap: wrap;
  }

  .footer-container-right-placeholder {
    width: 5%;
    height: 20px;
  }

  .footer-container-left-placeholder {
    width: 5%;
    height: 20px;
  }

  .footer-container-center-wrapper {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
  }

  .top-footer-rights {
    width: 90%;
  }

  /* left block */
  .left-footer-container {
    width: 30%;
    justify-content: center;
  }

  .left-footer-top-text {
    width: 100%;
    height: 30%;
    margin-top: 15px;
    display: flex;
    font-size: 23px;
    color: brown;
    font: bolder;
  }

  .left-footer-text-bottom-container {
    width: 100%;
    display: flex;
    height: 30%;
    position: relative;
  }

  .left-footer-bottom-text {
    width: 100%;
    display: flex;
    font-size: 10pt;
    position: absolute;
    bottom: 0;
  }

  /* center block */
  .center-footer-container {
    width: 40%;
    justify-content: center;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }

  .center-footer-logo {
    width: 81.25px;
    height: 100px;
    margin-top: 20px;
  }

  /* right block */
  .right-footer-container {
    width: 30%;
    justify-content: center;
  }

  .right-footer-logo-container {
    width: 100%;
    height: 25px;
    padding-top: 15px;
    position: relative;
  }

  .right-footer-logo {
    width: 150px;
    position: absolute;
    right: -8px;
  }

  .right-footer-text-column {
    padding-top: 20px;
  }

  .right-footer-text {
    width: 100%;
    font-size: 10pt;
    text-align: right;
  }
</style>