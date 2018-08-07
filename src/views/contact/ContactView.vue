<template>
    <div>
        <box-template style="text-align: center">
            <h1>Contact</h1>
            <p>{{author}}</p>
        </box-template>
        <box-template style="display: flex; justify-content: center">
            <logo-bind-url url="https://www.facebook.com/deity.ngo"
                           image-source="http://www.stickpng.com/assets/images/584ac2d03ac3a570f94a666d.png"></logo-bind-url>
            <logo-bind-url url="https://github.com/poonyapat"
                           image-source="https://avatars0.githubusercontent.com/u/9919?s=280&v=4"></logo-bind-url>
            <logo-bind-url url="https://www.linkedin.com/in/poonyapat-yanvisit-85a998155/"
                           image-source="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"></logo-bind-url>
        </box-template>
    </div>
</template>

<script>
    import BoxTemplate from "../../components/template/BoxTemplate"
    import BoxLinkTemplate from "../../components/template/BoxLinkTemplate"
    import LogoBindUrl from "../../components/LogoBindUrl"

    export default {
        name: "ContactView",
        components: {
            BoxTemplate, BoxLinkTemplate, LogoBindUrl
        }
    }
</script>

<style scoped>

</style>