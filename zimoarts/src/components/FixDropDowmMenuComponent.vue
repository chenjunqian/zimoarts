<template>
  <div class="fix-home-dropdown-item-container">
    <div class="fix-home-dropdown-item" style="background-color: #000000; color: #ffffff">
      <div class="fix-home-dropdown-text-container">
        <div class="fix-dropdown" style="width: 100%;">
          <div
            style="color: #ffffff; width: 100%; font-size: 13pt; text-align: center; font-weight: bolder; padding-bottom: 2px;">
            VISUAL ART
          </div>
          <div class="fix-dropdown-content">
            <router-link to="/art/draw" style="font-size: 11pt;  font-weight: bolder;height: 50px; line-height: 50px;">
              DRAWING</router-link>
            <router-link to="/art/sculpture"
              style="font-size: 11pt; font-weight: bolder; height: 50px; line-height: 50px;">SCULPTURE</router-link>
            <router-link to="/art/photography"
              style="font-size: 11pt; font-weight: bolder; height: 50px; line-height: 50px;">PHOTOGRAPHY</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="fix-home-dropdown-item" style="background-color: #ab050f; color: #ffffff">
      <div class="fix-home-dropdown-text-container">
        <router-link slots="div" class="fix-home-dropdown-text" to="/theater">
          <div
            style="color: #ffffff; width: 100%; font-size: 10pt; text-align: center; font-weight: bolder; padding-bottom: 5px;">
            THEATER&DANCE</div>
        </router-link>
      </div>
    </div>
    <div class="fix-home-dropdown-item" style="background-color: #ffce00; color: #ffffff">
      <div class="fix-home-dropdown-text-container">
        <router-link slots="div" class="fix-home-dropdown-text" to="/music">
          <div
            style="color: #ffffff; width: 100%; font-size: 13pt; text-align: center; font-weight: bolder; padding-bottom: 2px;">
            MUSIC</div>
        </router-link>
      </div>
    </div>
    <div class="fix-home-dropdown-item" style="background-color: #c0c0c0; color: #ffffff; ">
      <div class="fix-home-dropdown-text-container">
        <router-link slots="div" class="fix-home-dropdown-text" to="/about">
          <div
            style="color: #ffffff; width: 100%; font-size: 13pt; text-align: center; font-weight: bolder; padding-bottom: 2px;">
            ABOUT US</div>
        </router-link>
      </div>
    </div>
    <div class="fix-home-dropdown-item" style="background-color: #ffffff; border: 1px solid #c0c0c0;">
      <div class="fix-home-dropdown-text-container">
        <router-link slots="div" class="fix-home-dropdown-text" to="/">
          <div
            style="color: #000000; width: 100%; font-size: 13pt; text-align: center; font-weight: bolder; padding-bottom: 2px;">
            HOME</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FixDropDownMenuComponent"
}
</script>

<style>
.fix-home-dropdown-item-container {
  width: 750px;
  height: 40px;
  padding-right: 15px;
  float: right;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.fix-home-dropdown-item {
  height: 100%;
  width: 120px;
  margin-left: 15px;
  background-color: wheat;
  display: flex;
  justify-content: center;
  border: 1px solid #ffffff;
}

.fix-home-dropdown-text-container {
  width: 120px;
  position: absolute;
  bottom: 0px;
}

.fix0home-dropdown-text {
  font-size: 13pt;
  text-align: center !important;
  word-break: break-all;
  word-wrap: break-word;
  text-decoration: none;
  color: #ffffff;
  font-weight: bolder;
  padding-bottom: 15px;
}

.fix-dropdown {
  position: relative;
  width: 110px;
}

.fix-dropdown-content {
  width: 120px;
  position: absolute;
  display: none;
  left: 0;
  overflow: auto;
  border: 1px solid #ffffff;
  background-color: #c0c0c0;
}

.fix-dropdown:hover .fix-dropdown-content {
  display: block;
}

.fix-dropdown-content a {
  display: block;
  color: #ffffff;
  margin-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
  text-align: center;
  font-weight: bolder;
}

.fix-dropdown-content a:hover {
  color: #ffffff;
  background-color: #000000;
}
</style>
