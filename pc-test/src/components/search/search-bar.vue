<template>
    <div class="page-search box-shadow" style="padding-right: 40px">
        <p class="search-title" v-if="titleFlag">{{title ? title : '标题'}}</p>
        <div class="search-body">
            <slot name="body"></slot>
        </div>
        <div class="search-btn" v-if="btnFlag">
            <slot name="btn">按钮</slot>
        </div>
    </div>
</template>

<script>
//@group 公共组件
//搜索组件-SearchBar
export default {
    name: 'SearchBar',
    props: {
        // 标题
        title: {
            type: String,
            default: ''
        },
        // 是否显示标题
        titleFlag: {
            type: Boolean,
            default: false
        },
        // 是否显示按钮
        btnFlag: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped lang="scss">
    .page-search {
        border: 1px solid $line-color;
        padding: 2px;
        border-radius: 3px;
        transition: .2s;
        .search-title {
            margin: 0;
            padding: 5px 0 5px 10px;
            background-color: #8CACD2;
            border-radius: 3px 3px 0 0;
            color: #FFFFFF;
        }
        .search-body {
            padding: 5px;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            > div {
                min-width: 370px;
                margin: 10px 0;
                label {
                    display: inline-block;
                    width: 120px;
                    font-size: 12px;
                    text-align: right;
                    margin-right: 5px;
                }
                .search-body-item {
                    width: 200px;
                }
            }
        }
        .search-btn {
            margin: 0 50px 10px 0;
            text-align: right;
        }
    }
</style>
