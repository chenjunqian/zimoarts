<template>
    <div
        style="width: 100%; margin-top: 30px; background-color: #000000;height: 800px;box-shadow: 0 20px 20px -2px #888888;">
        <div style="width: 100%; margin-top: 30px; background-color: #000000;height: 720px;position: relative;"
            :style="{'background-image': `url(${backgroudPicUrl})`}">
            <!-- text block -->
            <div style="padding-left: 100px; padding-top: 120px;">
                <!-- visual art title -->
                <div style="width: 100%; display: flex;" :style="{'color': titleColor }">
                    <div style="font-size: 70px;">{{titleOne}}</div>
                    <div style="font-size: 70px;font-weight: bolder;">{{titleTwo}}</div>
                </div>
                <!-- visual art description -->
                <!-- <div
                                                style="text-align: left;font-size: 13px;word-break: break-all; word-wrap: break-word; width: 200px; color: #ffffff;">
                                                Jsgjkjlakncklshnk uwiqdosnacbjknz jdkl Gsakf:hihzbnbooooogkdb qprpouposjalxnkjagdkj
                                                Hskahfoiqwhdnsmbxkjaln.aznkjl,a
                                                xH Gdskhqiohdbnakcnkja Cleofjlsknlnck
                                            </div> -->
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