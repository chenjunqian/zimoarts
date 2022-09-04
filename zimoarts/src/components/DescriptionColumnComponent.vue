<template>
    <div style="width: 100%; display: flex; justify-content: center;">
        <div style=" width: 90%; display: flex; justify-content: center; margin-top: 100px; margin-bottom: 50px;">
            <a-list :grid="{ gutter: 16, column: 3 }" :data-source="videoList">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <div style="display: flex; min-width: 300px;">
                            <!-- <img style="width: 10px; height: 10px" src="" alt="" /> -->
                            <div style="text-align: left; color: #ffce00; font-size: 12pt;">
                                {{ item.title }}
                            </div>
                        </div>
                        <div style="margin-top: 10px; word-break: break-all; word-wrap: break-word; text-align: left; ">
                            <iframe class="video" :src="item.link" allowfullscreen>
                            </iframe>
                        </div>
                    </a-list-item>
                </template>
            </a-list>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: "DescriptionColumnComponent",
        components: {},
        setup() {
            let videoList = ref()

            const setResourceData = (jsonData) => {
                videoList.value = jsonData
            }

            return {
                videoList,
                setResourceData
            }
        }
    }
</script>

<style>
    .video {
        width: 300px;
        height: 168.75px;
        border: none;
    }
</style>