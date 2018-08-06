<template>
    <div style="text-align: center">
        <h1>Intenship</h1>
        <black-hover-template>
            <h2>{{experienceData.internship.name}}</h2>
            <p>{{experienceData.internship.description}}</p>
            <img src="https://d13uib79k8il37.cloudfront.net/uploads/1488589053-3444-0972-5594/s1600-w800_extra.jpg" alt="" style="width: 30%; padding: 2em">
        </black-hover-template>
    </div>
</template>

<script>
    import BlackHoverTemplate from "../../template/BlackHoverTemplate"

    export default {
        name: "ExperienceTab",
        data() {
            return {
                experienceData: {
                    internship: {
                        name: "DST Financial Services International (DST FSI)",
                        description: "I worked as Software developer, used Vaadin and Spring framework"
                    }
                }
            }
        },
        components: {
            BlackHoverTemplate
        }
    }
</script>