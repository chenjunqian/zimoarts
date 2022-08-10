<template>
    <div class="wrapper">
        <div class="top-album-descrption-container">
            <div class="top-album-descrption-title-container">
                <div class="top-album-descrption-title" style="color: #ab050f">
                    Visual Art&nbsp;
                </div>
                <div>
                    <div class="top-album-descrption-title" style="position: relative; font-size: 25px">
                        of&nbsp;
                    </div>
                </div>
                <div class="top-album-descrption-title">the&nbsp;</div>
                <div class="top-album-descrption-title" style="color: #ffce00">
                    fermm&nbsp;
                </div>
            </div>
        </div>
        <div class="list-view">
            <vue3-horizontal-list :items="images" :options="options">
                <template v-slot:default="{ item }">
                    <img class="item-img" :src="item" alt="">
                </template>
            </vue3-horizontal-list>
        </div>
    </div>
</template>

<script>
    import vue3HorizontalList from "vue3-horizontal-list";
    export default {
        name: "HorizontalScrollListView",
        components: {
            vue3HorizontalList,
        },
        props: {
            images: Array
        },
        data() {
            return {
                options: {
                    responsive: [
                        { size: 3 },
                    ],
                    list: {
                        windowed: 1200,
                        padding: 24,
                    },
                }
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
        justify-content: center;
    }

    .list-view {
        width: 90%;
        padding-bottom: 20px;
        margin: 0 auto;
    }

    .item-img {
        width: 100%;
        height: 250px;
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