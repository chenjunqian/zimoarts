<template>
  <div class="about">
    <HomeHeaderComponent />
    <MenuItem />
    <HomeDropDowmMenuComponent />
    <!-- school bagde block -->
    <div style="top: 150px; position: absolute;">
      <img style="width: 300px; height: 150px; float: left; margin-left: 80px" src="@/assets/black-red-logo.png" />
    </div>

    <div style="width: 100%;">
      <!-- introduction block -->
      <div style="width: 100%;padding-top: 120px; display: flex; border-bottom: 1px solid #c0c0c0">
        <div style="width: 50%; height: 20px;"></div>
        <div style="width: 50%;display: flex;">
          <div style="font-size: 48pt; font-weight: bolder; margin-bottom: -20px; color: #ab050f">INTRODUCTION</div>
        </div>
      </div>
      <!-- introduction detail -->
      <div
        style="background-image: url('http://www.grotonarts.com/static/others/circle-bg.png');background-repeat: no-repeat;background-size: 2500px auto;">
        <div style="width: 100%;display: flex;">
          <!-- introduction left pic block -->
          <div style="width: 50%;">
            <div style="margin-top: 100px;width: 400px; height: 407.14px; background-color: #ab050f;">
              <div
                style="width: 500px; height: 357.14px;margin-top: 25px; margin-bottom: 25px; margin-left: 80px;z-index: 99;position: absolute;">
                <img :src="introduction.leftImageUrl" style="width: 100%; height: auto;" alt="">
              </div>
            </div>
          </div>
          <!-- introduction right description block -->
          <div style="width: 50%;">
            <div style="width: 70%;text-align: left;margin-top: 50px;font-size: 28pt;color: #000000;">
              {{ introduction.title }}
            </div>
            <div style="width: 70%;text-align: right;font-size: 20pt;color: #000000;margin-bottom: 30px;">
              {{ introduction.subTitle }}
            </div>
            <div v-for="item in introduction.content" :key="item"
              style="width: 70%; margin-top: 10px;text-align: left;font-size: 13pt;">
              {{ item }}
            </div>
            <div
              style="width: 70%;text-align: right;color: #000000;font-weight: bolder;margin-top: 50px; font-size: 13pt;">
              {{ introduction.author }}
            </div>
            <div style="width: 70%;text-align: right;color: #000000;font-size: 13pt;"> {{ introduction.authorTitle }}
            </div>
            <div style="width: 100%;display: flex;margin-top: 40px;">
              <img style="width: 320px;height: 228.57px;" :src="introduction.descImage">
            </div>
          </div>
        </div>
        <ColorDivider style="margin-top: 160px;" />
        <!-- our team block -->
        <div style="width: 100%;">
          <!-- our team title -->
          <div style="width: 100%; justify-content: center;display: flex;margin-top: 150px;">
            <div style="color: #ab050f; font-size: 60px; font-weight: bolder;">OUR TEAM</div>
          </div>

          <!-- team member detail block -->
          <div style="width: 100%;border-top: 1px solid #c0c0c0;margin-top: 0px;">
            <div style="font-size: 35px;color: #000000;">{{memberData.title}}</div>
          </div>
          <div style="width: 100%;;margin-top: 100px;">
            <!-- founder block -->
            <div style="width: 80%; display: flex; margin: 0 auto;">
              <div style="display: flex; position: relative;">
                <img style="width: 220px; height: 275px; background-color: #c0c0c0;" :src="memberData.chefImageUrl" />
                <div style="width: 200px ;position: absolute; bottom: 0px; left: 230px;">
                  <div
                    style="width: 100%;color: #000000;font-size: 12pt; font-weight: bolder; text-align: left;margin-top: 10px;">
                    {{ memberData.chefDescAuthor }}
                  </div>
                  <div style="width: 100%;color: #000000;font-size: 10pt; text-align: left;">{{ memberData.chefDescAuthorTitle }}</div>
                </div>
              </div>
              <div style="width: 80%; border: 1px solid #c0c0c0; margin-left: 17%;">
                <div style="text-align: left; padding-top: 30px;color: #ab050f; margin-left: 15px; font-size: 25pt;">
                  {{memberData.chefDescTitle}}
                </div>
                <div v-for="item in memberData.chefDesc" :key="item"
                  style="text-align: left; width: 95%;margin-left: 15pt; font-size: 15pt;">
                  {{ item }}
                </div>
                <div style="display: flex; min-height: 90px; position: relative;">
                  <div v-for="item in memberData.chefSubDesc" :key="item"
                    style="width: 30%;font-size: 8px; color: #000000; margin-top: 5px;  margin-left: 15px; text-align: left;word-break: break-all; word-wrap: break-word;">
                    {{ item }}
                  </div>
                  <div style="position: absolute; right: 30px; bottom: 0px;">
                    <div style="font-size: 12pt; color: #000000; font-weight: bold; text-align: left;">
                      {{memberData.chefDescAuthor}}</div>
                    <div style="font-size: 10pt; color: #000000; text-align: left;">{{memberData.chefDescAuthorTitle}}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- member block -->

            <a-list style="width: 83%; display: flex; margin: 0 auto; margin-top: 80px;"
              :grid="{ gutter: 60, column: 3 }" :data-source="memberDataList">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-card style="border: none; background-color: transparent;">
                    <div style="display: flex; position: relative;">
                      <img style="width: 220px; height: 275px; background-color: #c0c0c0;" :src="item.imageUrl" />
                      <div style="width: 200px ;position: absolute; bottom: 0px; left: 230px;">
                        <div
                          style="width: 100%;color: #000000;font-size: 12pt; font-weight: bolder; text-align: left;margin-top: 10px;">
                          {{item.name }}
                        </div>
                        <div style="width: 100%;color: #000000;font-size: 10pt; text-align: left;">{{ item.title }}
                        </div>
                      </div>
                    </div>
                  </a-card>
                </a-list-item>
              </template>
            </a-list>

            <!-- vice chef block  -->
            <div style="width: 83%; display: flex; justify-content: center; margin: 0 auto; margin-top: 80px;">
              <div style="width: 96%;background-color: #edebeb;">
                <div style="text-align: center; color: #000000; margin-top: 5px; margin-left: 15px; font-size: 30px;">
                  Other Members
                </div>

                <div style="width: 100%; margin-top: 20px; display: flex; justify-content: center;">
                  <a-list style="width: 100%;" :grid="{ gutter: 16, column: 3 }" :data-source="otherMemberList">
                    <template #renderItem="{ item }">
                      <a-list-item>
                        <a-card style="border: none; background-color: transparent;">
                          <div
                            style="width: 100%;color: #000000;font-size: 12pt; font-weight: bolder;margin-top: 10px;">
                            {{item.name }}
                          </div>
                          <div style="width: 100%;color: #000000;font-size: 12pt;">{{ item.title }}</div>
                        </a-card>
                      </a-list-item>
                    </template>
                  </a-list>
                </div>
              </div>
            </div>
          </div>

          <!-- teacher group -->
          <!-- sub title -->
          <div style="width: 100%;border-bottom: 1px solid #c0c0c0;margin-top: 100px;">
            <div style="font-size: 35px;color: #000000;">{{ teacherBlockTitle }}</div>
          </div>
          <a-list style="margin-top: 120px;" :grid="{ gutter: 16, column: 2 }" :data-source="teacherDataList">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-card style="border: none;">
                  <div style="display: flex; justify-content: center;">
                    <img style="width: 250px; height: 250px;" :src="item.imageUrl" />
                    <div style="width: 30%; height: 250px;position: relative;">
                      <div style="width: 100%; position: absolute; bottom: 0;text-align: left; margin-left: 30px;">
                        <div style="color: grey; font-size: 10pt;">{{ item.title }}</div>
                        <div style="color: #000000; font-weight: bolder;font-size: 12pt;">{{ item.name }}</div>
                      </div>
                    </div>
                  </div>
                </a-card>
              </a-list-item>
            </template>
          </a-list>
          <!-- join us block -->
          <div style="width: 100%; background-color: #ab050f; margin-top: 150px;">
            <div style="width :100%; color: #ffffff; font-size: 30pt; font-weight: bolder; padding-top: 30px;">{{
              joinUs.title }}</div>
            <div style="width :100%; color: #ffffff; font-size: 30pt; font-weight: bolder; padding-top: 10px;">{{
              joinUs.subTitle }}</div>
            <div style="justify-content: center;display: flex; padding-bottom: 30px;">
              <div style="width :50%; color: #ffffff; font-size: 13pt; padding-top: 30px; text-align: center;">
                {{ joinUs.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent style="margin-top: 20px" />
  </div>
</template>

<script>
  import FooterComponent from "@/components/FootComponent.vue";
  import ColorDivider from "@/components/ColorDivider.vue";
  import { httpRequest } from "@/libs/request";
  import { ref, reactive } from "vue";
  import HomeDropDowmMenuComponent from "@/components/HomeDropDowmMenuComponent.vue";
  import HomeHeaderComponent from "@/components/HomeHeaderComponent.vue";

  export default {
    name: "AboutView",
    components: {
      FooterComponent,
      ColorDivider,
      HomeDropDowmMenuComponent,
      HomeHeaderComponent
    },
    setup() {
      let teacherDataList = ref()
      let teacherBlockTitle = ref()
      let memberDataList = ref()
      let otherMemberList = ref()
      let introduction = reactive({
        leftImageUrl: "",
        title: "",
        content: [],
        author: "",
        authorTitle: ""
      })
      let memberData = reactive({
        title: "",
        chefImageUrl: "",
        chefDescTitle: "",
        chefDesc: [],
        chefSubDesc: [],
        chefDescAuthor: "",
        chefDescAuthorTitle: "",
        viceChefImageUrl: "",
        viceChefName: "",
        viceChefTitle: "",
        viceChefDescTitle: "",
      })
      let joinUs = reactive({
        title: "",
        subTitle: "",
        desc: ""
      })

      httpRequest.get("http://www.grotonarts.com/static/aboutus/aboutus-resource.json").then(function (response) {
        console.log("aboutus-resource : ", response)
        teacherDataList.value = response["team"]['teacherDataList']
        teacherBlockTitle.value = response["team"]['teacherBlockTitle']
        memberDataList.value = response["team"]["memberData"]["memberList"]
        otherMemberList.value = response["team"]["memberData"]["otherMemberList"]
        introduction.leftImageUrl = response["introduction"]["leftImageUrl"]
        introduction.title = response["introduction"]["title"]
        introduction.subTitle = response["introduction"]["subTitle"]
        introduction.descImage = response["introduction"]["descImage"]
        introduction.content = response["introduction"]["content"]
        introduction.author = response["introduction"]["author"]
        introduction.authorTitle = response["introduction"]["authorTitle"]

        memberData.title = response["team"]["memberData"]["title"]
        memberData.chefImageUrl = response["team"]["memberData"]["chefImageUrl"]
        memberData.chefDescTitle = response["team"]["memberData"]["chefDescTitle"]
        memberData.chefDesc = response["team"]["memberData"]["chefDesc"]
        memberData.chefSubDesc = response["team"]["memberData"]["chefSubDesc"]
        memberData.chefDescAuthor = response["team"]["memberData"]["chefDescAuthor"]
        memberData.chefDescAuthorTitle = response["team"]["memberData"]["chefDescAuthorTitle"]
        memberData.viceChefImageUrl = response["team"]["memberData"]["viceChefImageUrl"]
        memberData.viceChefName = response["team"]["memberData"]["viceChefName"]
        memberData.viceChefTitle = response["team"]["memberData"]["viceChefTitle"]
        memberData.viceChefDescTitle = response["team"]["memberData"]["viceChefDescTitle"]

        joinUs.title = response["joinUs"]["title"]
        joinUs.subTitle = response["joinUs"]["subTitle"]
        joinUs.desc = response["joinUs"]["desc"]
      }).catch(function (error) {
        console.log(error);
      });

      return {
        teacherDataList,
        teacherBlockTitle,
        memberDataList,
        otherMemberList,
        memberData,
        joinUs,
        introduction
      }
    }
  };
</script>

<style scoped>
  @media screen and (max-width: 1200px) {
    .about {
      background-color: #ffffff;
      width: 1500px;
      margin: 0 auto;
      position: relative;
    }
  }

  @media screen and (min-width: 1200px) {
    .about {
      background-color: #ffffff;
      max-width: 1500px;
      margin: 0 auto;
      position: relative;
    }
  }
</style>