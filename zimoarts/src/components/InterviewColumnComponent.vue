<template>
    <div style="width: 100%; background-color: #c0c0c0"
        :style="{'background-image': `url(${require('@/assets/home-bg-002.png')})`}">
        <div
            style="width: 100%; padding-top: 50px; margin-bottom: 50px; font-size: 58px; font-weight: bolder; border-bottom: 1px solid #000000; display: flex; justify-content: center; color: #ffffff; ">
            <div>INTERVIEW</div>
        </div>

        <!-- top colomn -->
        <div style="width: 100%; border-bottom: 1px solid #000000; padding-top: 50px;
              ">
            <div style="margin-left: 5%; margin-right: 5%; display: flex;color: #ffffff;">
                <div style="width: 25%; height: 160px; border-left: 1px solid #000000">
                    <img style=" height: 90%; width: 90%; padding-top: 5%; padding-left: 5%; padding-right: 5%; " />
                </div>
                <div style="width: 25%; height: 160px; border-left: 1px solid #000000">
                    <div style="font-weight: bolder">sadfkjanihgskbcjkooye</div>
                    <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
                        oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                        sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
                        alksf;loskfmguugsdqozmxjhzvbn/
                    </div>
                </div>
                <div style="width: 25%; height: 160px; border-left: 1px solid #000000">
                    <img style=" height: 90%; width: 90%; padding-top: 5%; padding-left: 5%; padding-right: 5%; " />
                </div>
                <div
                    style=" width: 25%; height: 160px; border-left: 1px solid #000000; border-right: 1px solid #000000; ">
                    <div style="font-weight: bolder">sadfkjanihgskbcjkooye</div>
                    <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
                        oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                        sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
                        alksf;loskfmguugsdqozmxjhzvbn/
                    </div>
                </div>
            </div>
        </div>
        <!-- bottom colomn -->
        <div style="width: 100%; padding-bottom: 150px;color: #ffffff;">
            <div style="margin-left: 5%; margin-right: 5%; display: flex">
                <div style="width: 25%; height: 160px; border-left: 1px solid #000000">
                    <div style="font-weight: bolder">sadfkjanihgskbcjkooye</div>
                    <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
                        oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                        sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
                        alksf;loskfmguugsdqozmxjhzvbn/
                    </div>
                </div>
                <div style="width: 25%; height: 160px; border-left: 1px solid #000000">
                    <img style=" height: 90%; width: 90%; padding-top: 5%; padding-left: 5%; padding-right: 5%; " />
                </div>
                <div
                    style=" width: 25%; height: 160px; border-left: 1px solid #000000; border-right: 1px solid #000000; ">
                    <div style="font-weight: bolder">sadfkjanihgskbcjkooye</div>
                    <div style=" margin: 0 auto; word-break: break-all; word-wrap: break-word; ">
                        oqnmBslhflafkjsafl alksf;loskfmguugsdqozmxjhzvbn/
                        sadfkjanihgskbcjkooye oqnmBslhflafkjsafl
                        alksf;loskfmguugsdqozmxjhzvbn/
                    </div>
                </div>
                <div style="width: 25%; height: 160px; border-right: 1px solid #000000">
                    <img style=" height: 90%; width: 90%; padding-top: 5%; padding-left: 5%; padding-right: 5%; " />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InterviewColumnComponent",
        props: {
            columnOneTitle: String,
            columnOneDesc: String,
            columnOneImgUrl: String,

            columnTwoTitle: String,
            columnTwoDesc: String,
            columnTwoImgUrl: String,

            columnTreeTitle: String,
            columnTreeDesc: String,
            columnTreeImgUrl: String,

            columnFourTitle: String,
            columnFourDesc: String,
            columnFourImgUrl: String,

            backgroundImgUrl: String
        }
    }
</script>

<style>

</style>