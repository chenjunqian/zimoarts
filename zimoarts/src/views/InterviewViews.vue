<template>
    <div style="width: 100%;">
        <HomeHeaderComponent />
        <HomeDropDowmMenuComponent />
        <img class="interview-top-school-icon" src="@/assets/black-red-logo.png" />
        <div style="margin-top: 500px;">
            <InterviewComponent />
        </div>
        <ColorDivider />
        <div style="margin-top: 180px ;box-shadow: 0 20px 20px -2px #888888;">
            <InterviewColumnComponent />
        </div>
        <FootComponent style="margin-top: 50px;" />
    </div>
</template>


<script>
    import { useRoute } from 'vue-router'
    import HomeHeaderComponent from '@/components/HomeHeaderComponent.vue'
    import HomeDropDowmMenuComponent from '@/components/HomeDropDowmMenuComponent.vue'
    import InterviewComponent from '@/components/InterviewComponent.vue'
    import ColorDivider from '@/components/ColorDivider.vue'
    import InterviewColumnComponent from '@/components/InterviewColumnComponent.vue'
    import FootComponent from '@/components/FootComponent.vue'
    export default {
        name: "InterviewViews",
        components: {
            HomeHeaderComponent,
            HomeDropDowmMenuComponent,
            InterviewComponent,
            ColorDivider,
            InterviewColumnComponent,
            FootComponent
        },
        setup() {
            const route = useRoute()
            let pageId = route.params.id
            const setResourceData = (jsonData) => {

            }

            return {
                setResourceData
            }
        }
    }
</script>

<style>
    .interview-top-school-icon {
        width: 300px;
        height: 150px;
        float: left;
        margin-top: -20px;
        margin-left: 80px;
    }
</style>