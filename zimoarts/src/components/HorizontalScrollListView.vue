<template>
    <div class="wrapper">
        <div class="list-view">
            <vue3-horizontal-list :items="images">
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
        }
    };
</script>

<style scoped>
    .wrapper {
        width: 100%;
        justify-content: center;
        display: flex;
    }

    .list-view {
        width: 90%;
        padding-bottom: 50px;
    }

    .item-img {
        width: 100%;
        height: 200px;
        margin-left: 5px;
    }
</style>