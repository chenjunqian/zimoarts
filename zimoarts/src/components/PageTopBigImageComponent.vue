<template>
    <div
        style="width: 100%; margin-top: 30px; background-color: #000000;box-shadow: 0 20px 20px -2px #888888;">
        <div style="width: 100%; margin-top: 30px; background-color: #000000;background-size: 100% auto;;background-repeat: no-repeat;height: 1080px;position: relative;"
            :style="{'background-image': `url(${require('@/assets/home-bg-001.png')})`}">
            <!-- text block -->
            <div style="padding-left: 100px; padding-top: 120px;">
                <!-- visual art title -->
                <div style="width: 100%; display: flex;" :style="{'color': titleColor }">
                    <div style="font-size: 70px;">{{titleOne}}</div>
                    <div style="font-size: 70px;font-weight: bolder;">{{titleTwo}}</div>
                </div>
            </div>

            <div
                style="width: 500px;height: 300px;background-color: #c0c0c0;margin-left: 100px;position: absolute;bottom: -80px;">
            </div>
        </div>
        <div style="width: 100%; height: 80px;background-color: #ffffff;"></div>
    </div>
</template>

<script>
    export default {
        name: "PageTopBigImageComponent",
        props: {
            titleOne: String,
            titleTwo: String,
            titleColor: String,
            backgroudPicUrl: String,
            videoUrl: String
        },
        setup(props) {
            console.log(props.backgroudPicUrl)
        }
    }
</script>

<style>

</style>