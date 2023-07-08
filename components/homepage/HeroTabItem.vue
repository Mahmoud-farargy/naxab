<template>
    <li ref="LiElement" @click="updateTab(tabId)" :class="`hero-tab-item capitalize ${isActive ? 'active-tab' : ''}`">{{ tabName }}</li>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            required: true,
            default: ""
        },
        tabName: {
            type: String,
            required: true,
            default: ""
        },
        tabId: {
            type: String,
            required: true,
            default: ""
        },
        updateTab:{
            type: Function,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
    .active-tab{
        position: relative;
        &::after{
            content: '';
            position: absolute;
            bottom: -3px;
            background: #FFF000;
            height: 4px;
            width: 100%;
            left:0;
            @media only screen and (max-width: 800px) {
                bottom: -2px;
                height: 2px;
            }
        }
    }
</style>
