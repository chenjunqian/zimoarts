<template>
    <div style="width: 100%; display: flex; position: relative; padding-top: 40px">
        <div style="position: absolute; right: 0; display: flex">
            <router-link
                style="width: 120px; height: 30px; background-color: #000000; line-height: 30px; color: #ffffff; font-size: 15px; font-weight: bolder; text-decoration: none;"
                to="/draw">
                DRAWING
            </router-link>
            <div
                style="width: 120px;height: 30px;background-color: #ab050f;line-height: 30px;color: #ffffff;font-size: 15px;font-weight: bolder;">
                SCALPTURE
            </div>
            <div
                style="width: 120px;height: 30px;background-color: #ffce00;line-height: 30px;color: #ffffff;font-size: 15px;font-weight: bolder;">
                PHOFOGRCPHY
            </div>
            <div style="width: 120px;height: 30px;background-color: #c0c0c0;line-height: 30px;">
                <div class="dropdown">
                    <div style="color: #ffffff;font-size: 15px;font-weight: bolder;">HOME</div>
                    <div class="dropdown-content">
                        <router-link to="/" :style="{'color': dropdownTextColor}">Home</router-link>
                        <a :style="{'color': dropdownTextColor}" href="https://academy.hubspot.com/">Academy</a>
                        <a :style="{'color': dropdownTextColor}" href="https://www.youtube.com/user/hubspot">YouTube</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            dropdownTextColor: String,
        }
    };
</script>

<style scoped>
    .dropdown {
        position: relative;
        width: 100%;
    }

    .dropdown-content {
        position: absolute;
        width: 100%;
        display: none;
        left: 0;
        overflow: auto;
        border: 1px solid #ffffff;
        z-index: 99;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content a {
        display: block;
        color: #000000;
        margin-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        margin-right: 5px;
        text-decoration: none;
        text-align: center;
    }

    .dropdown-content a:hover {
        color: #ffffff;
        background-color: #c0c0c0;
    }
</style>