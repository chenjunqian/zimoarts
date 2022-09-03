<template>
    <div class="wrapper">
        <div class="top-album-descrption-container">
            <div class="top-album-descrption-title-container">
                <div class="top-album-descrption-title" style="color: #ab050f">
                    {{ title }}&nbsp;
                </div>
                <div>
                    <div class="top-album-descrption-title" style="position: relative; font-size: 25px">
                        of&nbsp;
                    </div>
                </div>
                <div class="top-album-descrption-title">the&nbsp;</div>
                <div class="top-album-descrption-title" style="color: #ffce00">
                    Term&nbsp;
                </div>
            </div>
        </div>
        <div class="list-view">
            <vue3-horizontal-list style="width: 1120px;" :items="images" :options="options">
                <template v-slot:default="{ item }">
                    <a-image class="item-img" :src="item" />
                </template>
            </vue3-horizontal-list>
        </div>
    </div>
</template>

<script>
    import vue3HorizontalList from "vue3-horizontal-list";
    import { ref } from 'vue';

    export default {
        name: "HorizontalScrollListView",
        components: {
            vue3HorizontalList,
        },
        props: {
            images: Array
        },
        setup() {
            let title = ref("")

            const setResourceData = (jsonData) => {
                title.value = jsonData["title"]
            }
            return{
                title,
                setResourceData
            }
        }, 
        data() {
            return {
                options: {
                    responsive: [
                        { size: 3 },
                    ],
                    list: {
                        windowed: 1120,
                        padding: 24,
                    },
                    item: {
                        class: "item-img",
                        padding: 24,
                    },
                    position: {
                        start: 1,
                    },
                    autoplay: {
                        // enable/disable playing slideshow
                        play: true,
                        // the delay duration between slides in milliseconds
                        speed: 1800,
                        // if setup, the slideshow will be in the loop.
                        repeat: true,
                    },
                },
                visible: ref(false),
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
    }

    .list-view {
        width: 1120px;
        padding-bottom: 20px;
        margin: 0 auto;
    }

    .item-img {
        width: 330px;
        height: 220px;
    }

    .top-album-descrption-container {
        margin-bottom: 80px;
    }

    .bottom-album-items-container {
        width: 100%;
    }

    .top-album-descrption-title-container {
        width: 100%;
        font-size: 58px;
        font-weight: bolder;
        border-bottom: 1px solid lightslategray;
        display: flex;
        justify-content: center;
    }

    .top-album-descrption-title {
        display: inline;
    }
</style>