<template>
    <div class="box">
        <img class="front" :src="imageUrl" />
        <img class="back" />
    </div>
</template>

<script>
    export default {
        name: "TreeDRotateImg",
        props: {
            imageUrl: String
        }
    }
</script>

<style>
    .box {
        position: relative;
        width: 300px;
        height: 300px;
        cursor: pointer;
        transform-style: preserve-3d;
    }

    .box:hover {
        animation: rotate 5s cubic-bezier(0.5, 0.2, 0.1, 1);
    }

    .front,
    .back {
        position: absolute;
        bottom: 0;
        left: 1%;
        right: 1%;
        color: #fff;
        width: 98%;
        height: 100%;
        /* 隐藏元素背面 */
        backface-visibility: hidden;
    }

    .back {
        opacity: 0.5;
        background-color: skyblue;
        transform: rotateY(180deg);
    }

    @keyframes rotate {
        0% {
            transform: rotateY(0deg);
        }

        100% {
            transform: rotateY(360deg);
        }
    }

    @keyframes rotate-reverse {
        0% {
            transform: rotateY(360deg);
        }

        100% {
            transform: rotateY(0deg);
        }
    }
</style>