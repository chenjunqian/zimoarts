<template>
    <div class="theater">
        <HeaderComponent />
        <MenuItem dropdownTextColor="#ffffff" />
        <PageTopBigImageComponent titleOne="Theater " titleTwo="DANCE" titleColor="#ffffff"
            backgroudPicUrl="http://www.grotonarts.com/static/theater/theater-top-bg.png"
            videoUrl="https://www.youtube.com/embed/tgbNymZ7vqY" />
        <InterviewComponent leftBlockColor="#ab050f" rightBlockColor="#ffffff" descriptionColor="#ab050f"
            imageUrl="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg" />
        <ColorDivider />
        <div style="width: 100%;margin-top: 100px;">
            <HorizontalScrollListView style="box-shadow: 0px 20px 10px -10px #888888;" :images="imageList" />
        </div>
        <InterviewColumnComponent backgroudPicUrl="http://www.grotonarts.com/static/theater/theater-interview-bg.png"
            style="margin-top: 80px;" />
        <DescriptionColumnComponent style="box-shadow: 0 20px 20px -2px #888888;" />
        <FooterComponent style="margin-top: 20px" />
    </div>
</template>

<script>
    import HeaderComponent from "@/components/HeaderComponent.vue";
    import FooterComponent from "@/components/FootComponent.vue";
    import MenuItem from "@/components/MenuItem.vue";
    import InterviewComponent from "@/components/InterviewComponent.vue";
    import PageTopBigImageComponent from "@/components/PageTopBigImageComponent.vue";
    import ColorDivider from "@/components/ColorDivider.vue";
    import HorizontalScrollListView from "@/components/HorizontalScrollListView.vue";
    import InterviewColumnComponent from "@/components/InterviewColumnComponent.vue";
    import DescriptionColumnComponent from "@/components/DescriptionColumnComponent.vue";
    import { httpRequest } from "@/libs/request";

    export default {
        name: "TheaterView",
        components: {
            HeaderComponent,
            FooterComponent,
            MenuItem,
            InterviewComponent,
            PageTopBigImageComponent,
            ColorDivider,
            HorizontalScrollListView,
            InterviewColumnComponent,
            DescriptionColumnComponent
        },
        data() {
            return {
                imageList: []
            }
        },
        mounted() {
            let tempImageList = this.imageList
            httpRequest.get("http://www.grotonarts.com/static/theater/theater-image-list.json").then(function (response) {
                let imageSourcePath = "http://www.grotonarts.com/static/theater/image-list/"
                let allImageList = response["image_list"]
                for(var key in allImageList) {
                    let itemImageList = allImageList[key]
                    for(var i in itemImageList) {
                        let imageItemPath = imageSourcePath + key + "/" + itemImageList[i]
                        tempImageList.push(imageItemPath)
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
            this.imageList = tempImageList
        }
    }
</script>

<style>
    .theater {
        background-color: #ffffff;
        width: 1400px;
        margin: 0 auto;
    }
</style>