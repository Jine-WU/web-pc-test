<!--  -->
<template>
    <div class='woyun-words-num'>
        <span class="woyun-active-num">{{textNum}}</span>
        <span class="woyun-max-num">/{{maxValue}}</span>
    </div>
</template>

<script>
//@group 公共组件
//WordsNum
export default {
    components: {},
    name: 'WordsNum',
    data() {
        return {
            textNum: this.text.length
        }
    },
    props: {
        // text
        text: {
            type: String,
            default: ''
        },
        // maxValue
        maxValue: {
            type: [String, Number],
            default: 20
        }
    },
    computed: {},
    watch: {
        text(val) {
            this.textNum = val.length
        }
    },
    created() {
    },
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {}
}
</script>
<style lang='scss' scoped>
.woyun-words-num {
    font-size: 12px;
    font-weight: 500;
    color: #CCCCCC;
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
