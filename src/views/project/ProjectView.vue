<template>
    <div style="text-align: center">
        <box-template>
            <h1>Project</h1>
            <p>{{author}}</p>
        </box-template>
        <box-template>
            <h1>Github</h1>
            <div style="display: flex; justify-content: center">
                <box-link-template add-on-class="block" url="https://github.com/poonyapat/Minimal2D">
                    <h2>Minimal2D</h2>
                    <p>[Unity (2D game)]</p>
                </box-link-template>

                <box-link-template add-on-class="block" url="https://github.com/poonyapat/Minimal2D">
                    <h2>VueProfile</h2>
                    <p>[This website]</p>
                </box-link-template>
                <box-link-template add-on-class="block" url="https://github.com/poonyapat/Java_note">
                    <h2>Note Program</h2>
                    <p>[JavaFX]</p>
                </box-link-template>
            </div>
            <h1>Bitbucket</h1>
            <div style="display: flex; justify-content: center">
                <box-link-template add-on-class="block" url="https://bitbucket.org/5910401106/animal-animation/">
                    <h2>2D Animation</h2>
                    <p>[JavaFX]</p>
                </box-link-template>
                <box-link-template add-on-class="block" url="https://bitbucket.org/5910401106/breakout-game">
                    <h2>Breakout Game</h2>
                    <p>[SDL C++]</p>
                </box-link-template>
            </div>
        </box-template>
    </div>
</template>

<script>
    import BoxTemplate from "../../components/template/BoxTemplate"
    import BlackHoverTemplate from "../../components/template/BlackHoverTemplate"
    import BoxLinkTemplate from "../../components/template/BoxLinkTemplate"

    export default {
        name: "ProjectView",
        components: {
            BoxTemplate, BlackHoverTemplate, BoxLinkTemplate
        }
    }
</script>