<template>
    <page-header class="go-back" :title="title" v-if="historyList.length > 1"></page-header>
</template>
<script>
import PageHeader from '@/components/header/page-header'
//@group 公共组件
//返回组件
export default {
    name: 'GoBack',
    components: {
        PageHeader
    },
    data() {
        return {
            historyList: this.$router.options.meta.historyList
        }
    },
    computed: {
        title() {
            if (this.historyList[this.historyList.length - 1].meta.titles) {
                return this.historyList[this.historyList.length - 1].meta.titles[this.historyList[this.historyList.length - 1].query.pageType]
            }
            else {
                return this.historyList[this.historyList.length - 1].meta.title
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .go-back{
        margin:0 0px 15px 0;
        padding:0;
        height: 50px;
    }
</style>>
