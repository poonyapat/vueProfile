<template>
    <div>
        <template v-for="(value, key) in data">
            <template v-if="isString(value) || value.constructor === Array">
                <p :key="key"> {{key}} : {{generateValue(value)}} </p>
            </template>
            <template v-else-if="value instanceof Object">
                <p :key="key"> {{key}}: </p>
                <ul :key="key">
                    <li v-for="(objValue, objKey) in value" :key="objKey">
                        {{objKey}} : {{generateValue(objValue)}}
                    </li>
                </ul>
            </template>
        </template>
    </div>
</template>

<script>
    export default {
        name: "ContainerATemplate",
        props: {
            data: {
                type: Object,
                required: true
            },
        },
        methods: {
            generateValue(value) {
                if (this.isString(value))
                {
                    return value
                }
                else{
                    let output = ""
                    for (let i = 0; i < value.length; i++){
                        output += value[i]
                        if (i < value.length-1)
                            output += ", "
                    }
                    return output
                }
            },
            isString(value)
            {
                return value instanceof String || typeof value === 'string'
            }
        },
    }
</script>

<style scoped>
    div {
        padding: 1em;
    }

    p, li{
        padding: 1em;
        font-size: 1em;
    }
</style>