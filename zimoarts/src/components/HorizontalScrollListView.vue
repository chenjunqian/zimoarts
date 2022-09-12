<template>
    <div style="width: 100%;">
        <div class="top-album-descrption-container">
            <div class="top-album-descrption-title-container">
                <div class="top-album-descrption-title" style="color: #ab050f">
                    {{ title }}
                </div>
            </div>
        </div>
        <div class="list-view" v-if="showMusic" style="margin-bottom: 80px;">
            <vue3-horizontal-list  style="width: 100%;" :items="musics" :options="musicOptions">
                <template v-slot:default="{ item }">
                    <img class="item-music-img" :src="item.imageUrl" @click="musicRecordOnClick(item.pdfLink)" />
                    <div class="item-music-text" :style="{ 'color': item.textColor }"
                        @click="musicRecordOnClick(item.pdfLink)">{{item.pdfFileName}}</div>
                </template>
            </vue3-horizontal-list>
        </div>
        <div class="list-view" style="padding-bottom: 80px;"> 
            <vue3-horizontal-list style="width: 100%;" :items="images" :options="options">
                <template v-slot:default="{ item }">
                    <a-image class="item-img" :src="item" />
                </template>
            </vue3-horizontal-list>
        </div>
    </div>
</template>

<script>
    import vue3HorizontalList from "vue3-horizontal-list";
    import { ref, reactive } from 'vue';

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
            let musics = ref()
            let pdfs = ref()
            let showMusic = ref(false)
            let options = reactive({
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
                    play: true,
                    speed: 1800,
                    repeat: true,
                },

            })
            let musicOptions = reactive({
                responsive: [
                    { size: 4 },
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
                    play: true,
                    speed: 1800,
                    repeat: true,
                },

            })

            const setResourceData = (jsonData) => {
                title.value = jsonData["title"]
                let musicsJson = jsonData["musics"]
                if (musicsJson === null || musicsJson === undefined) {
                    musics.value = []
                } else {
                    musics.value = jsonData["musics"]
                    // showMusic.value = true
                }
            }

            const musicRecordOnClick = (link) => {
                window.open(link)
            }

            return {
                title,
                musics,
                showMusic,
                pdfs,
                options,
                musicOptions,
                musicRecordOnClick,
                setResourceData
            }
        },
    }
</script>

<style scoped>
    .list-view {
        width: 1320px;
        padding-bottom: 20px;
        margin: 0 auto;
    }

    .item-img {
        width: 330px;
        height: 220px;
    }

    .item-music-img {
        width: 200px;
        height: 200px;
        cursor: pointer;
    }

    .item-music-text {
        text-align: center;
        font-size: 15pt;
        cursor: pointer;
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