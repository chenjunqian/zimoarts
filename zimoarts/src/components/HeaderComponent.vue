<template>
  <div class="header-container">
    <div class="header-icon-container">
      <div class="header-icon">GROTONARTS</div>
    </div>
    <div class="nav-container">
      <div class="nav-item-container">item one</div>
      <div class="nav-item-container">item two</div>
      <div class="nav-item-container">item tree</div>
      <div class="nav-item-container">item four</div>
    </div>
    <div class="header-right-container">
      <div class="header-right-icon">Groton</div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "HeaderComponent",
};
</script>

<style>
.header-container {
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
}

.header-icon-container {
  width: 20%;
  display: inline;
}

.header-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
}

.header-right-container {
  width: 15%;
  height: 100%;
  position: relative;
}

.header-right-icon {
  width: 100%;
  bottom: 0;
  position: absolute;
  font-size: 36px;
  color: firebrick;
  font: bolder;
}

.nav-container {
  width: 65%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.nav-item-container {
  width: 25%;
  height: 100%;
  margin-top: 15px;
}
</style>
