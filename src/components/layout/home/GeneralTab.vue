<template>
    <!--<container-a-template :data="general"></container-a-template>-->
    <div style="text-align: center">
        <black-hover-template>
            <h2>My Name</h2>
            <p>{{generalData.name}}</p>
            <img src="https://poonyapat.github.io/myPic3.jpg" alt="Poon's pic" style="width: 75%">
        </black-hover-template>
        <div class="inline-flex-center">
            <black-hover-template class="block">
                <h2>Nickname</h2>
                <p>{{generalData.nickname}}</p>
            </black-hover-template>
            <black-hover-template class="block">
                <h2>Age</h2>
                <p>{{generalData.age}}</p>
            </black-hover-template>
            <black-hover-template class="block">
                <h2>Birth Date</h2>
                <p>{{generalData.birthDate}}</p>
            </black-hover-template>
            <black-hover-template class="block">
                <h2>Gender</h2>
                <p>{{generalData.gender}}</p>
            </black-hover-template>
            <black-hover-template class="block">
                <h2>Job</h2>
                <p>{{generalData.job}}</p>
            </black-hover-template>
        </div>
        <black-hover-template>
            <h2>Location</h2>
            <p>{{generalData.location}}</p>
        </black-hover-template>
    </div>
</template>

<script>
    import BlackHoverTemplate from "../../template/BlackHoverTemplate"

    export default {
        name: "GeneralTab",
        data() {
            return {
                generalData: {
                    name: "Poonyapat Yanvisit",
                    nickname: "Poon",
                    age: "20 years old",
                    birthDate: "April 10, 1998",
                    gender: "Male",
                    job: "Student",
                    location: "Bangkok, Thailand"
                }
            }
        },
        components: {
            BlackHoverTemplate
        }
    }
</script>

<style scoped>
    .block {
        width: 10em;
        height: 8em;
    }

    .inline-flex-center {
        display: flex;
        flex-wrap: wrap;
        justify-content: center
    }
</style>