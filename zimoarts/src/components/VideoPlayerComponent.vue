<template>
    <iframe v-if="showYoutube" refs="youtubeVideoPlayer" style="border: none;" :style="{'width': vWidth, 'height': vHeight}"
        :src="videoUrl" allowfullscreen>
    </iframe>
    <video v-else muted="muted" :style="{'width': vWidth, 'height': vHeight}" :src="videoUrl" type="video/mp4"
        autoplay="autoplay" controls="controls">
    </video>
</template>

<script>
    export default {
        name: "VideoPlayerComponent",
        props: {
            vWidth: String,
            vHeight: String,
            vSrc: String
        },
        data() {
            return {
                showYoutube: false,
                videoUrl: this.vSrc
            }
        },
        mounted() {
            console.log(this.vSrc)
            if (this.vSrc !== undefined && this.vSrc !== null && (this.vSrc.includes('youtube')||this.vSrc.includes('youtu'))) {
                this.showYoutube = true
                this.videoUrl = this.videoUrl + "?autoplay=1&mute=1"
                console.log("Link is youtube url")
                console.log(this.videoUrl)
            }
        }
    }
</script>