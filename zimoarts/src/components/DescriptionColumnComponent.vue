<template>
    <div style="width: 100%; display: flex; justify-content: center;">
        <div style=" width: 90%; display: flex; justify-content: center; margin-top: 100px; margin-bottom: 50px;">
            <a-list :grid="{ gutter: 16, column: 3 }" :data-source="videoList">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <a-card style="border: none;">
                            <div style="width: 100%;text-align: center; color: #ffce00; font-size: 12pt;">
                                {{ item.title }}
                            </div>
                            <div style="margin-top: 10px;">
                                <iframe class="video" :src="item.link" allowfullscreen>
                                </iframe>
                            </div>
                        </a-card>
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