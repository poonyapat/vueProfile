<template>
    <div style="text-align: center">
        <black-hover-template>
            <h2>Primary & Secondary School</h2>
            <p>Bangkok Christian College</p>
            <img src="https://goo.gl/oMbXrs" alt="bcc" style="width: 100%;">
        </black-hover-template>
        <black-hover-template>
            <h2>Bachelor's Degree</h2>
            <p>Computer Science, Kasetsart University</p>
        </black-hover-template>
    </div>
</template>

<script>
    import BlackHoverTemplate from "../../template/BlackHoverTemplate"
    import BoxTemplate from "../../template/BoxTemplate"

    export default {
        name: "EducationTab",
        data() {
            return {
                educationData: {
                    primarySchool: "Bangkok Christian College",
                    secondarySchool: "Bangkok Christian College",
                    bachelorsDegree: {
                        university: "Kasetsart University",
                        faculty: "Science",
                        department: "Computer Science",
                    }
                }
            }
        },
        components: {
            BlackHoverTemplate, BoxTemplate
        }
    }
</script>
