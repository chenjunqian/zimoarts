<template>
  <a-affix :offset-top="5" style="width: 100%; display: flex; position: relative;z-index: 100;">
    <div style="position: absolute; right: 0; display: flex; ">
      <router-link
        style="width: 120px; height: 50px; background-color: #000000; line-height: 50px; color: #ffffff; font-size: 15px; font-weight: bolder; text-decoration: none;"
        to="/art/draw">
        DRAWING
      </router-link>
      <router-link
        style="width: 120px;height: 50px;background-color: #ab050f;line-height: 50px;color: #ffffff;font-size: 15px;font-weight: bolder;"
        to="/art/sculpture">
        SCULPTURE
      </router-link>
      <router-link
        style="width: 120px;height: 50px;background-color: #ffce00;line-height: 50px;color: #ffffff;font-size: 15px;font-weight: bolder;"
        to="/art/photography">
        PHOTOGRAPHY
      </router-link>
      <div style="width: 120px;height: 50px;background-color: #c0c0c0;line-height: 50px;">
        <div class="dropdown">
          <div style="color: #ffffff;font-size: 15px;font-weight: bolder;">HOME</div>
          <div class="dropdown-content">
            <router-link to="/" :style="{ 'color': dropdownTextColor }" style="height: 30px;line-height: 30px">Home</router-link>
            <router-link to="/theater" style="font-size: 9pt;height: 30px;line-height: 30px" :style="{ 'color': dropdownTextColor }">
              THEAFER&DANCE</router-link>
            <router-link to="/music" :style="{ 'color': dropdownTextColor }" style="height: 30px;line-height: 30px">MUSIC</router-link>
            <router-link to="/about" :style="{ 'color': dropdownTextColor }" style="height: 30px;line-height: 30px">ABOUTUS</router-link>
          </div>
        </div>
      </div>

    </div>
  </a-affix>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    dropdownTextColor: String,
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  width: 100%;
}

.dropdown-content {
  position: absolute;
  width: 100%;
  display: none;
  left: 0;
  overflow: auto;
  border: 1px solid #ffffff;
  z-index: 99;
  background-color: #c0c0c0;
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
  text-align: center;
}

.dropdown-content a:hover {
  color: #ffffff;
  background-color: #000000;
}
</style>
