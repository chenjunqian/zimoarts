<template>
    <video muted="muted" :style="{'width': vWidth, 'height': vHeight}" :src="vSrc"
        type="video/mp4" autoplay="autoplay" controls="controls">
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
        methods: {
        }
    }
</script>