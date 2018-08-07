<template>
    <div style="text-align: center">
        <h1>Game</h1>
        <div class="inline-flex-center">
            <black-hover-template v-for="(skill, game) in activityData.games" :key="game" class="block">
                <h2>{{game}}</h2>
                <p>{{skill}}</p>
            </black-hover-template>
        </div>
        <h1>Book</h1>
        <div class="inline-flex-center">
            <black-hover-template v-for="(value, attribute) in activityData.book" :key="attribute" class="block">
                <h2>{{attribute}}</h2>
                <p>{{value}}</p>
            </black-hover-template>
        </div>
        <h1>Others</h1>
        <div class="inline-flex-center">
            <black-hover-template v-for="activity in activityData.others" :key="activity" class="block">
                <h2>{{activity}}</h2>
            </black-hover-template>
        </div>
    </div>
</template>

<script>
    import BlackHoverTemplate from "../../components/template/BlackHoverTemplate"

    export default {
        name: "ActivityTab",
        data() {
            return {
                activityData: {
                    games: {
                        "League of Legends": "Ex Thai Pro Player (Diamond Rank)",
                        "Overwatch": "Rank 2400"
                    },
                    book: {
                        "Types": "Novel, Light Novel, Manga",
                        "Categories": "Fantasy, Action, Drama, Comedy, Romantic"
                    },
                    others: ["Sleeping", "Running", "Eating", "Using Internet", "Programming", "Watching Anime/Movie"]
                }
            }
        },
        components: {
            BlackHoverTemplate
        }
    }
</script>