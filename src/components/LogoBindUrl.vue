<template>
    <a :href="url">
        <img :src="imageSource" alt="image error">
    </a>
</template>

<script>
    export default {
        name: "LogoBindUrl",
        props: {
            url: {
                type: String,
                required: true
            },
            imageSource: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>
    a {
        display: flex;
        padding: 2em;
    }

    img {
        transition: all 0.5s ease-in-out;
        width: 10em;
        height: 10em;
    }

    img:hover {
        transform: scale(1.1);
        background-color: #aaeeff;
        border: solid #aaeeff 3px;
        box-shadow: 0 4px 20px #71b7ee;
    }
</style>