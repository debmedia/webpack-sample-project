<!--reverser-message.vue-->
<template>
    <div class="superClass">
        <p>{{ message }}</p>
        <mySuperButton :onClick="reverseMessage" text="click me"></mySuperButton>
    </div>
</template>

<script>
    import mySuperButton from './mySuperButton.vue'

    export default {
        name: "reverse-message",
        components: {"mySuperButton": mySuperButton},
        props: {
            message: {type: String}
        },
        data: function () {
            return {
                someData: 'Reverse Message'
            }
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .superClass {
        background: burlywood;
    }
</style>