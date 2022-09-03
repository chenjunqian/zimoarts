<template>
  <div class="header-container">
    <div class="header-icon-container">
      <div class="header-left-top-info">Publication Date: 2022. Sept.1</div>
    </div>
    <div class="header-middle-placeholder"></div>
    <div class="header-right-container">
      <div class="header-right-icon-placeholder"></div>
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
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.header-icon-container {
  width: 20%;
  display: inline;
}

.header-left-top-info {
  width: 50%;
  height: 100%;
  margin-top: 10px;
  font-size: 9px;
}

.header-right-container {
  width: 15%;
  height: 100%;
  position: relative;
}

.header-right-icon-placeholder {
  height: 50%;
}

.header-right-icon {
  max-width: 100%;
  max-height: 50%;
  display: table-cell;
  vertical-align: bottom
}

.header-middle-placeholder {
  width: 65%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

</style>
