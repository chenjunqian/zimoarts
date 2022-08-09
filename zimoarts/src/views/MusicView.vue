<template>
    <div class="music">
        <HeaderComponent />
        <MenuItem dropdownTextColor="#ffffff" />
        <PageTopBigImageComponent titleOne="MUSIC" titleTwo="ART" titleColor="#000000"
            backgroudPicUrl="https://bbk12e1-cdn.myschoolcdn.com/542/photo/orig_photo698737_6746630.jpg?w=1920" />
        <InterviewComponent />
        <ColorDivider />
        <div style="width: 100%;margin-top: 150px;">
            <HorizontalScrollListView style="box-shadow: 0 20px 20px -2px #888888;"
                :images="['https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg']" />
        </div>
        <InterviewColumnComponent />
        <DescriptionColumnComponent style="box-shadow: 0 20px 20px -2px #888888;"/>
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

    export default {
        name: "MusicView",
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
    }
</script>

<style>
    .music {
        background-color: #ffffff;
        width: 1400px;
        margin: 0 auto;
    }
</style>