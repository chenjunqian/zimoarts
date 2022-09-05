<template>
  <div class="home-header-container">
    <div class="home-header-icon-container">
      <div class="home-header-left-top-info">Publication Date: 2022. Sept.1</div>
    </div>
    <div class="home-header-middle-placeholder"></div>
    <div class="home-header-right-container">
      <div class="home-header-right-icon-placeholder">
        <img class="home-header-right-icon" src="http://www.grotonarts.com/static/others/red-black-school-name.png" alt="">
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "HomeHeaderComponent",
};
</script>

<style>
.home-header-container {
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.home-header-icon-container {
  width: 20%;
  display: inline;
}

.home-header-left-top-info {
  width: 50%;
  height: 100%;
  margin-top: 10px;
  font-size: 9px;
}

.home-header-right-container {
  width: 15%;
  height: 100%;
  position: relative;
}

.home-header-right-icon-placeholder {
  position: absolute;
  height: 50%;
  right: 40px;
  top: 10px;
}

.home-header-right-icon {
  max-width: 100%;
  max-height: 100%;
  display: table-cell;
  vertical-align: bottom
}

.home-header-middle-placeholder {
  width: 65%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

</style>
