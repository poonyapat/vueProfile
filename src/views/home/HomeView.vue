<template>
    <div>
        <box-template style="text-align: center">
            <h1>Home</h1>
            <p>{{author}}</p>
        </box-template>
        <multi-tab-template :tabs="tabs"></multi-tab-template>
    </div>
</template>

<script>
    import MultiTabTemplate from "../../components/multitab/MultiTabTemplate.vue"
    import BoxTemplate from "../../components/template/BoxTemplate.vue"
    // import {general, education, programming, experience, activity} from "../../../data/HomeData";
    import {Tab} from "../../components/multitab/Tab"
    import GeneralTab from "./GeneralTab"
    import EducationTab from "./EducationTab"
    import ProgrammingTab from "./ProgrammingTab"
    import ExperienceTab from "./ExperienceTab"
    import ActivityTab from "./ActivityTab"

    export default {
        name: "HomeView",
        components: {
            BoxTemplate,
            MultiTabTemplate
        },
        data() {
            return {
                tabs: [
                    new Tab("General", GeneralTab),
                    new Tab("Education", EducationTab),
                    new Tab("Programming", ProgrammingTab),
                    new Tab("Experience", ExperienceTab),
                    new Tab("Activity", ActivityTab)
                ]
            }
        },
    }
</script>