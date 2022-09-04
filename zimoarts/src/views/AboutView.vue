<template>
  <div class="about">
    <HeaderComponent />
    <MenuItem />
    <HomeDropDowmMenuComponent />
    <!-- school bagde block -->
    <div style="margin-top: 80px">
      <img style="width: 240px; height: 120px; float: left; margin-left: 80px" src="@/assets/black-red-logo.png" />
    </div>

    <div style="width: 100%;">
      <!-- introduction block -->
      <div style="width: 100%;padding-top: 50px; display: flex; border-bottom: 1px solid #c0c0c0">
        <div style="width: 50%; height: 20px;"></div>
        <div style="width: 50%;display: flex;">
          <div style="font-size: 48pt; color: #ab050f">Introduc</div>
          <div style="font-size: 48pt; color: #000000">tion</div>
        </div>
      </div>
      <!-- introduction detail -->
      <div style="width: 100%;display: flex;">
        <!-- introduction left pic block -->
        <div style="width: 50%;">
          <div style="margin-top: 100px;width: 300px; height: 400px; background-color: #ab050f;">
            <div style="width: 350px; height: 350px;margin-top: 25px; margin-bottom: 25px; margin-left: 50px;z-index: 99;position: absolute;">
              <img :src="introduction.leftImageUrl" style="width: 100%; height: auto;" alt="">
            </div>
          </div>
        </div>
        <!-- introduction right description block -->
        <div style="width: 50%;">
          <div style="width: 70%;text-align: left;margin-top: 50px;font-size: 28pt;color: #000000;">
            {{ introduction.title }}
          </div>
          <div style="width: 70%;text-align: right;font-size: 20pt;color: #000000;">
            {{ introduction.subTitle }}
          </div>
          <div v-for="item in introduction.content" :key="item"
            style="width: 70%; margin-top: 20px;text-align: left;font-size: 11pt;">
            {{ item }}
          </div>
          <div style="width: 70%;text-align: right;color: #000000;font-weight: bolder;margin-top: 50px;">
            {{ introduction.author }}
          </div>
          <div style="width: 70%;text-align: right;color: #000000;"> {{ introduction.authorTitle }} </div>
          <div style="width: 100%;display: flex;margin-top: 40px;">
            <img style="width: 282.59px;height: 191.61px;" :src="introduction.descImage">
          </div>
        </div>
      </div>
      <ColorDivider style="margin-top: 160px;" />
      <!-- our team block -->
      <div style="width: 100%;">
        <!-- our team title -->
        <div style="width: 100%; justify-content: center;display: flex;margin-top: 150px;">
          <div style="color: #ab050f; font-size: 60px;">Our&nbsp;</div>
          <div style="color: #000000; font-size: 60px;">Team</div>
        </div>

        <!-- team member detail block -->
        <div style="width: 100%;border-bottom: 1px solid #c0c0c0;margin-top: 10px;">
          <div style="font-size: 35px;color: #ab050f;">{{memberData.title}}</div>
        </div>
        <div style="width: 100%;;margin-top: 100px;">
          <!-- founder block -->
          <div style="width: 80%; display: flex; margin: 0 auto;">
            <img style="width: 18%; height: auto;" :src="memberData.chefImageUrl" alt="">
            <div style="width: 72%; border: 1px solid #c0c0c0; margin-left: 9%;">
              <div
                style="text-align: left; padding-top: 50px;color: #ab050f; margin-top: 5px; margin-left: 15px; font-size: 20pt;">
                {{memberData.chefDescTitle}}
              </div>
              <div v-for="item in memberData.chefDesc" :key="item"
                style="text-align: left; width: 95%;margin-left: 15pt;">
                {{ item }}
              </div>
              <div style="display: flex; min-height: 50px; position: relative;">
                <div v-for="item in memberData.chefSubDesc" :key="item"
                  style="width: 30%;font-size: 8px; color: #000000; margin-top: 5px;  margin-left: 15px; text-align: left;word-break: break-all; word-wrap: break-word;">
                  {{ item }}
                </div>
                <div style="position: absolute; right: 30px; bottom: 0px;">
                  <div style="font-size: 12px; color: #000000; font-weight: bold; text-align: left;">
                    {{memberData.chefDescAuthor}}</div>
                  <div style="font-size: 10px; color: #000000; text-align: left;">{{memberData.chefDescAuthorTitle}}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- member block -->

          <a-list style="width: 83%; display: flex; margin: 0 auto; margin-top: 80px;" :grid="{ gutter: 16, column: 4 }"
            :data-source="memberDataList">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-card style="border: none;">
                  <img style="width: 238.8px; height: 298.74px; background-color: #c0c0c0;" :src="item.imageUrl" />
                  <div style="width: 100%;color: #000000;font-size: 12pt; font-weight: bolder;margin-top: 10px;">
                    {{item.name }}
                  </div>
                  <div style="width: 100%;color: #000000;font-size: 10pt;">{{ item.title }}</div>
                </a-card>
              </a-list-item>
            </template>
          </a-list>

          <!-- vice chef block  -->
          <div style="width: 83%; display: flex; justify-content: center; margin: 0 auto; margin-top: 80px;">
            <div style="width: 96%; border: 1px solid #c0c0c0;">
              <div style="text-align: center; color: #000000; margin-top: 5px; margin-left: 15px; font-size: 30px;">
                Other Members
              </div>
              <div style="width: 100%; margin-top: 20px; display: flex;">
                <!-- member desciption column -->
                <div style="width: 25%; border-right: 1px solid #c0c0c0;">
                  <div style="width: 100%;color: #000000;font-size: 10px; font-weight: bolder; margin-left: 10px;">
                    Beenson Han</div>
                  <div style="display: flex; justify-content: center;">
                    <img style="width: 10px; height: 10px" src="" alt="" />
                    <div style="color: #000000;font-size: 10px;">Art Director</div>
                  </div>

                  <div
                    style="width: 100%;color: #000000;font-size: 10px; font-weight: bolder; margin-left: 10px; margin-top: 20px;">
                    Beenson Han</div>
                  <div style="display: flex;width: 100%; justify-content: center;">
                    <img style="width: 10px; height: 10px" src="" alt="" />
                    <div style="color: #000000;font-size: 10px;">Art Director</div>
                  </div>
                </div>
                <!-- member desciption column -->
                <div style="width: 25%; border-right: 1px solid #c0c0c0;">
                  <div style="width: 100%;color: #000000;font-size: 10px; font-weight: bolder; margin-left: 10px;">
                    Beenson Han</div>
                  <div style="display: flex; justify-content: center;">
                    <img style="width: 10px; height: 10px" src="" alt="" />
                    <div style="color: #000000;font-size: 10px;">Art Director</div>
                  </div>

                  <div
                    style="width: 100%;color: #000000;font-size: 10px; font-weight: bolder; margin-left: 10px; margin-top: 20px;">
                    Beenson Han</div>
                  <div style="display: flex;width: 100%; justify-content: center;">
                    <img style="width: 10px; height: 10px" src="" alt="" />
                    <div style="color: #000000;font-size: 10px;">Art Director</div>
                  </div>
                </div>
                <!-- member desciption column -->
                <div style="width: 25%; border-right: 1px solid #c0c0c0;">
                  <div style="width: 100%;color: #000000;font-size: 10px; font-weight: bolder; margin-left: 10px;">
                    Beenson Han</div>
                  <div style="display: flex; justify-content: center;">
                    <img style="width: 10px; height: 10px" src="" alt="" />
                    <div style="color: #000000;font-size: 10px;">Art Director</div>
                  </div>

                  <div
                    style="width: 100%;color: #000000;font-size: 10px; font-weight: bolder; margin-left: 10px; margin-top: 20px;">
                    Beenson Han</div>
                  <div style="display: flex;width: 100%; justify-content: center;">
                    <img style="width: 10px; height: 10px" src="" alt="" />
                    <div style="color: #000000;font-size: 10px;">Art Director</div>
                  </div>
                </div>
                <!-- member desciption column -->
                <div style="width: 25%; border-right: 1px solid #c0c0c0;">
                  <div style="width: 100%;color: #000000;font-size: 10px; font-weight: bolder; margin-left: 10px;">
                    Beenson Han</div>
                  <div style="display: flex; justify-content: center;">
                    <img style="width: 10px; height: 10px" src="" alt="" />
                    <div style="color: #000000;font-size: 10px;">Art Director</div>
                  </div>

                  <div
                    style="width: 100%;color: #000000;font-size: 10px; font-weight: bolder; margin-left: 10px; margin-top: 20px;">
                    Beenson Han</div>
                  <div style="display: flex;width: 100%; justify-content: center;">
                    <img style="width: 10px; height: 10px" src="" alt="" />
                    <div style="color: #000000;font-size: 10px;">Art Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- teacher group -->
          <!-- sub title -->
          <div style="width: 100%;border-bottom: 1px solid #c0c0c0;margin-top: 100px;">
            <div style="font-size: 35px;color: #ab050f;">{{ teacherBlockTitle }}</div>
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
            <div style="width :100%; color: #ffffff; font-size: 30px; padding-top: 30px;">{{ joinUs.title }}</div>
            <div style="width :100%; color: #ffffff; font-size: 30px; padding-top: 10px;">{{ joinUs.subTitle }}</div>
            <div style="justify-content: center;display: flex; padding-bottom: 30px;">
              <div style="width :50%; color: #ffffff; font-size: 15px; padding-top: 30px; text-align: center;">
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
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FootComponent.vue";
  import ColorDivider from "@/components/ColorDivider.vue";
  import { httpRequest } from "@/libs/request";
  import { ref, reactive } from "vue";
  import HomeDropDowmMenuComponent from "@/components/HomeDropDowmMenuComponent.vue";

  export default {
    name: "AboutView",
    components: {
      HeaderComponent,
      FooterComponent,
      ColorDivider,
      HomeDropDowmMenuComponent
    },
    setup() {
      let teacherDataList = ref()
      let teacherBlockTitle = ref()
      let memberDataList = ref()
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
        introduction.leftImageUrl = response["introduction"]["leftImageUrl"]
        console.log("left image url : ", introduction.leftImageUrl)
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
    }
  }

  @media screen and (min-width: 1200px) {
    .about {
      background-color: #ffffff;
      max-width: 1500px;
      margin: 0 auto;
    }
  }
</style>