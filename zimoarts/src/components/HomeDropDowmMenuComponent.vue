<template>
  <div class="home-dropdown-item-container">
    <div class="home-dropdown-item" style="background-color: #000000; color: #ffffff">
      <div class="home-dropdown-text-container">
        <router-link slots="div" class="home-dropdown-text" to="/art/draw">
          <div class="home-dropdown-text">VISUAL ART</div>
        </router-link>
      </div>
    </div>
    <div class="home-dropdown-item" style="background-color: #ab050f; color: #ffffff">
      <div class="home-dropdown-text-container">
        <router-link slots="div" class="home-dropdown-text" to="/theater">
          <div class="home-dropdown-text">THEATER &</div>
        </router-link>
        <router-link slots="div" class="home-dropdown-text" to="/theater">
          <div class="home-dropdown-text">DANCE</div>
        </router-link>
      </div>
    </div>
    <div class="home-dropdown-item" style="background-color: #ffce00; color: #ffffff">
      <div class="home-dropdown-text-container">
        <router-link slots="div" class="home-dropdown-text" to="/music">
          <div class="home-dropdown-text">MUSIC</div>
        </router-link>
      </div>
    </div>
    <div class="home-dropdown-item" style="background-color: #c0c0c0; color: #ffffff">
      <div class="home-dropdown-text-container">
        <router-link slots="div" class="home-dropdown-text" to="/about">
          <div class="home-dropdown-text">ABOUT US</div>
        </router-link>
      </div>
    </div>
    <div class="home-dropdown-item" style="background-color: white">
      <div class="home-dropdown-text-container">
        <div class="dropdown">
          <div class="home-dropdown-text" style="color: #000000">OTHER</div>
          <div class="dropdown-content">
            <router-link to="/" style="font-size: 13px;">HOME</router-link>
            <router-link to="/draw" style="font-size: 13px;">VISUAL ART</router-link>
            <router-link to="/theater" style="font-size: 12px;">THEATER DANCE</router-link>
            <router-link to="/music">MUSIC</router-link>
            <router-link to="/about">ABOUTUS</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeDropDownMenuComponent"
}
</script>

<style>
.home-dropdown-item-container {
  width: 800px;
  height: 280px;
  padding-right: 25px;
  float: right;
  position: relative;
  z-index: 99;
  display: flex;
  flex-wrap: wrap;
}

.home-dropdown-item {
  height: 100%;
  width: 110px;
  margin-left: 30px;
  background-color: wheat;
  display: flex;
  justify-content: center;
  border: 1px solid #ffffff;
}

.home-dropdown-text-container {
  width: 110px;
  position: absolute;
  bottom: 0px;
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
  width: 110px;
}

.dropdown-content {
  width: 110px;
  position: absolute;
  display: none;
  left: 0;
  overflow: auto;
  border: 1px solid #ffffff;
  background-color: #c0c0c0;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  color: #ffffff;
  margin-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  text-align: center;
}

.dropdown-content a:hover {
  color: #ffffff;
  background-color: #000000;
}
</style>
