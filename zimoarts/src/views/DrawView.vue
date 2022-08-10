<template>
    <div class="draw">
        <HeaderComponent />
        <MenuItem dropdownTextColor="#ffffff" />
        <PageTopBigImageComponent titleOne="VISUAL&nbsp;" titleTwo="ART" titleColor="#ffffff"
            backgroudPicUrl="https://bbk12e1-cdn.myschoolcdn.com/542/photo/orig_photo698737_6746630.jpg?w=1920"
            videoUrl="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" />
        <!-- interview block -->
        <InterviewComponent leftBlockColor="#000000" rightBlockColor="#ffffff" descriptionColor="#000000"
            imageUrl="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg" />
        <ColorDivider />
        <div style="width: 100%;margin-top: 150px;">
            <HorizontalScrollListView style="box-shadow: 0px 20px 10px -10px #888888;"
                :images="['https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg','https://bbk12e1-cdn.myschoolcdn.com/ftpimages/542/link/large_link1625891_91604.jpg']" />
        </div>

        <div style="width: 100%;display: flex;justify-content: center;margin-top: 80px;margin-bottom: 100px;">
            <div style="width: 30%">
                <div style="display: inline">
                    <div style="color: #ab050f">anihgskbcjkooye</div>
                    <div
                        style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;word-break: break-all;word-wrap: break-word;">
                        alksf;loskfmguugsdqoz dkdhfkjxhbckjvxlvklnvoqueobsahf
                        acjgluyioqyeowihds kxdaqoc
                    </div>
                </div>
            </div>
            <div style="width: 30%">
                <div style="display: inline">
                    <div style="color: #ffce00">anihgskbcjkooye</div>
                    <div
                        style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;word-break: break-all;word-wrap: break-word;">
                        alksf;loskfmguugsdqoz dkdhfkjxhbckjvxlvklnvoqueobsahf
                        acjgluyioqyeowihds kxdaqoc
                    </div>
                </div>
            </div>
            <div style="width: 30%">
                <div style="display: inline">
                    <div style="color: #c0c0c0">anihgskbcjkooye</div>
                    <div
                        style="width: 70%;text-align: center;margin: 0 auto;margin-top: 20px;word-break: break-all;word-wrap: break-word;">
                        alksf;loskfmguugsdqoz dkdhfkjxhbckjvxlvklnvoqueobsahf
                        acjgluyioqyeowihds kxdaqoc
                    </div>
                </div>
            </div>
        </div>
        <InterviewColumnComponent />
        <FooterComponent style="margin-top: 20px" />
    </div>
</template>

<script>
    import HeaderComponent from "@/components/HeaderComponent.vue";
    import FooterComponent from "@/components/FootComponent.vue";
    import MenuItem from "@/components/MenuItem.vue";
    import ColorDivider from "@/components/ColorDivider.vue";
    import HorizontalScrollListView from "@/components/HorizontalScrollListView.vue";
    import InterviewColumnComponent from "@/components/InterviewColumnComponent.vue";
    import InterviewComponent from "@/components/InterviewComponent.vue";
    import PageTopBigImageComponent from "@/components/PageTopBigImageComponent.vue";

    export default {
        name: "DrawView",
        components: {
            HeaderComponent,
            FooterComponent,
            MenuItem,
            ColorDivider,
            HorizontalScrollListView,
            InterviewColumnComponent,
            InterviewComponent,
            PageTopBigImageComponent
        },
    };
</script>

<style scoped>
    .draw {
        background-color: #ffffff;
        width: 1400px;
        margin: 0 auto;
    }

    .dropdown {
        position: relative;
        width: 100%;
    }

    .dropdown-content {
        position: absolute;
        display: none;
        left: 0;
        overflow: auto;
        width: 100%;
        border: 1px solid #ffffff;
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
        background-color: #c0c0c0;
    }
</style>