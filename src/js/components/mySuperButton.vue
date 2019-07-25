<template>
    <button class="superButton xxx" @click="onButtonClick()" :disabled="!buttonEnable">{{text}}</button>
</template>

<script>
    export default {
        name: "mySuperButton",
        props: {
            text: {
                type: String,
                required: true
            },
            onClick: {
                type: Function
            }

        },
        data: function(){
            return {
                buttonEnable: true
            }
        },
        methods:{
            onButtonClick: function () {
                this.buttonEnable = false;
                setTimeout(() => {this.buttonEnable = true}, 3000);
                if(this.onClick !== undefined){
                    this.onClick();
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import './otrocss.css';
.superButton{
    color: white;
    background: darkcyan;
    &:disabled{
        background: black;
    }
}
</style>