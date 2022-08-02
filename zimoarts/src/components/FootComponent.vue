<template>
  <div class="footer-container">
    <div class="left-footer-container">
      <div class="left-footer-top-text">Groton School</div>
      <div class="left-footer-bottom-text">
        @2022 GROTON SCHOOL ALL RIGHTS RESERVED
      </div>
    </div>
    <div class="center-footer-container">
      <div class="center-footer-text-column">
        <div class="center-footer-text">JGYTDETRTQWEESDFG</div>
        <div class="center-footer-text">GDGHGHGDFGSDTSIUHIOVBBXZMIYTUXDG</div>
        <div class="center-footer-text">HJHFJH JHCH V FJ VJVCCCC H</div>
        <div class="center-footer-text">GJHG JKHVJHG VHVHFV</div>
        <div class="center-footer-text">CHGFD</div>
      </div>
      <div class="center-footer-text-column">
        <div class="center-footer-text">JGYTDETRTQWEESDFG</div>
        <div class="center-footer-text">GDGHGHGDFGSDTSIUHIOVBBXZMIYTUXDG</div>
        <div class="center-footer-text">HJHFJH JHCH V FJ VJVCCCC H</div>
        <div class="center-footer-text">GJHG JKHVJHG VHVHFV</div>
        <div class="center-footer-text">CHGFD</div>
      </div>
      <div class="center-footer-text-column">
        <div class="center-footer-text">JGYTDETRTQWEESDFG</div>
        <div class="center-footer-text">GDGHGHGDFGSDTSIUHIOVBBXZMIYTUXDG</div>
        <div class="center-footer-text">HJHFJH JHCH V FJ VJVCCCC H</div>
        <div class="center-footer-text">GJHG JKHVJHG VHVHFV</div>
        <div class="center-footer-text">CHGFD</div>
      </div>
    </div>
    <div class="right-footer-container">
      <div class="foot-logo">Here is logo</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
}

.left-footer-container {
  width: 20%;
  justify-content: center;
}

.left-footer-top-text {
  width: 100%;
  height: 30%;
  padding-top: 15px;
  padding-left: 20px;
  display: flex;
  font-size: 23px;
  color: firebrick;
  font: bolder;
}

.left-footer-bottom-text {
  width: 100%;
  height: 30%;
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  font-size: 8px;
  bottom: 0;
}

.center-footer-container {
  width: 70%;
  justify-content: center;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.center-footer-text-column {
  width: 30%;
  height: 100%;
  padding-top: 20px;
}

.center-footer-text {
  width: 100%;
  font-size: 8px;
  text-align: right;
}

.right-footer-container {
  width: 10%;
  justify-content: center;
}

.foot-logo {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
