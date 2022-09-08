<template>
    <div style="width: 100%; display: flex; justify-content: center;">
        <div style=" width: 90%; display: flex; justify-content: center; margin-top: 100px; margin-bottom: 50px;">
            <a-list :grid="{ gutter: 16, column: 3 }" :data-source="videoList">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <a-card style="border: none;display: flex; justify-content: center;">
                            <div style="width: 300px;">
                                <iframe class="video" :src="item.link" allowfullscreen>
                                </iframe>
                                <div style="width: 300px;text-align: left; color: #000000; font-size: 10pt;">
                                    {{ item.title }}
                                </div>
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