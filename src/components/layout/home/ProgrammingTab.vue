<template>
    <div style="text-align: center">
        <div>
            <h1>Programming Skills</h1>
            <div class="inline-flex-center">
                <black-hover-template class="block" v-for="(skill, lang) in programmingData.programmingLanguages"
                                      :key="lang">
                    <h2>{{lang}}</h2>
                    <p>{{skill}}</p>
                </black-hover-template>
            </div>
        </div>
        <div>
            <h1>Others</h1>
            <h2>[Basic - Intermediate level]</h2>
            <div class="inline-flex-center">
                <black-hover-template v-for="skill in programmingData.others" :key="skill" class="block">
                    <h2> {{skill}} </h2>
                </black-hover-template>
            </div>
        </div>
    </div>
</template>

<script>
    import BlackHoverTemplate from "../../template/BlackHoverTemplate"

    export default {
        name: "ProgrammingTab",
        data() {
            return {
                programmingData: {
                    programmingLanguages: {
                        "Java": "JavaFX, Spring, Vaadin",
                        "Python": "Pandas, Matplotlib, Tkinter",
                        "Javascript": "React, Vue",
                        "C#": "Unity (2D)",
                        "C/C++": "(Basic)"
                    },
                    others: ["Unix", "HTML", "CSS", "Excel", "Photoshop"]
                }
            }
        },
        components: {
            BlackHoverTemplate
        }
    }
</script>