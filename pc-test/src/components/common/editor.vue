<template lang="html">
    <div class="editor">
        <div ref="toolbar" class="toolbar"></div>
        <div ref="editor" class="c-border-top text"></div>
        <!-- toolbar元素高度 + p元素margin-top值 + editor元素padding-top值 -->
        <div
            class="placeholder"
            :style="`top:${toolbarH + 10 + 6}px`"
            v-show="!info_ && !focusStatus">{{placeholder}}</div>
    </div>
</template>

<script>
import E from 'wangeditor'
//@group 公共组件
//编辑器
export default {
    name: 'EditorItem',
    data() {
        return {
            // uploadPath,
            editor: null,
            info_: this.value || null,
            focusStatus: false
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        // 内容
        value: {
            type: String,
            default: ''
        },
        // 默认提示
        placeholder: {
            type: String,
            default: '正文'
        },
        // 是否清除
        isClear: {
            type: Boolean,
            default: false
        },
        // 菜单
        menus: {
            type: Array,
            default: () => {
                return [
                    'head', // 标题
                    'bold', // 粗体
                    'italic', // 斜体
                    'underline', // 下划线
                    'fontSize', // 字号
                    'list', // 列表
                    'image', // 插入图片
                    'undo', // 撤销
                    'redo' // 重复
                    // 'fontName', // 字体
                    // 'strikeThrough', // 删除线
                    // 'foreColor', // 文字颜色
                    // 'backColor', // 背景颜色
                    // 'link', // 插入链接
                    // 'justify', // 对齐方式
                    // 'quote', // 引用
                    // 'emoticon', // 表情
                    // 'table', // 表格
                    // 'video', // 插入视频
                    // 'code', // 插入代码
                    // 'fullscreen' // 全屏
                ]
            }
        }
    },
    watch: {
        isClear(val) {
            // 触发清除文本域内容
            if (val) {
                this.editor.txt.clear()
                this.info_ = null
            }
        },
        value: function(value) {
            console.log('value.indexOf', value.indexOf('>正文<'))
            if (value.indexOf('>正文<') > -1) {
                this.editor.txt.clear()
                this.$emit('change', this.info_)
            }
            else {
                if (value !== this.editor.txt.html()) {
                    this.editor.txt.html(this.value)
                }
            }
            console.log('value---watch', value)
        }
        //value为编辑框输入的内容，这里我监听了一下值，当父组件调用得时候，如果给value赋值了，子组件将会显示父组件赋给的值
    },
    mounted() {
        this.seteditor()
        console.log('mounted', (!this.info_ && !this.focusStatus))
        if (this.value) {
            this.editor.txt.html(this.value)
        }
        this.toolbarH = this.$refs.toolbar.offsetHeight
    },
    methods: {
        /**
         * @vuese
         * seteditor
         * @arg
         * */
        seteditor() {
            // http://192.168.2.125:8080/admin/storage/create
            this.editor = new E(this.$refs.toolbar, this.$refs.editor)
            this.editor.customConfig.uploadImgShowBase64 = true // base 64 存储图片
            // this.editor.customConfig.uploadImgServer = 'http://otp.cdinfotech.top/file/upload_images'// 配置服务器端地址
            // this.editor.customConfig.uploadImgHeaders = { }// 自定义 header
            // this.editor.customConfig.uploadFileName = 'file' // 后端接受上传文件的参数名
            this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
            // this.editor.customConfig.uploadImgMaxLength = 6 // 限制一次最多上传 3 张图片
            // this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间
            this.editor.customConfig.imageResize = ['30%', '50%', '100%']
            // 配置菜单
            this.editor.customConfig.menus = this.menus
            // this.editor.customConfig.colors = ['#880000', 'red', '#ffffff', '#000000', '#800080', '#ff0000', '#ff00ff', '#000080', '#0000ff',
            // '#00ffff','#008080', '#008000', '#808000', '#00ff00', '#ffcc00','#808080', '#c0c0c0']

            // 关闭粘贴样式的过滤
            this.editor.customConfig.pasteFilterStyle = false
            // 忽略粘贴内容中的图片
            this.editor.customConfig.pasteIgnoreImg = false

            this.editor.customConfig.uploadImgHooks = {
                fail: (xhr, editor, result) => {
                    // 插入图片失败回调
                    console.log(xhr, editor, result)
                },
                success: (xhr, editor, result) => {
                    // 图片上传成功回调
                    console.log(xhr, editor, result)
                },
                timeout: (xhr, editor) => {
                    // 网络超时的回调
                    console.log(xhr, editor)
                },
                error: (xhr, editor) => {
                    // 图片上传错误的回调
                    console.log(xhr, editor)
                },
                customInsert: (insertImg, result, editor) => {
                    // 图片上传成功，插入图片的回调
                    //result为上传图片成功的时候返回的数据，这里我打印了一下发现后台返回的是data：[{url:"路径的形式"},...]
                    // console.log(result.data[0].url)
                    //insertImg()为插入图片的函数
                    //循环插入图片
                    // for (let i = 0; i < 1; i++) {
                    // console.log(result)
                    const url = "http://otp.cdinfotech.top" + result.url
                    insertImg(url)
                    console.log(editor)
                    // }
                }
            }
            this.editor.customConfig.onchange = (html) => {
                console.log('onchange')
                this.info_ = html // 绑定当前逐渐地值
                this.$emit('change', this.info_) // 将内容同步到父组件中
            }
            this.editor.customConfig.onblur = (html) => {
                // html 即编辑器中的内容
                this.focusStatus = false
                console.log('onblur', html)
            }
            this.editor.customConfig.onfocus = (html) => {
                // html 即编辑器中的内容
                this.focusStatus = true
                console.log('onfocus', html)
            }

            // 创建富文本编辑器
            this.editor.create()
        }
    }
}
</script>

<style lang="css" scoped>
    .editor {
        width: 100%;
        margin: 0 auto;
        position: relative;
        z-index: 0;
    }
    .toolbar {
        padding: 0;
    }
    .toolbar >>> .w-e-menu {
        padding: 12px;
    }
    .toolbar >>> .w-e-menu:first-child {
        padding-left: 0
    }
    .toolbar >>> .w-e-menu i {
        font-size: 14px;
        color: #B8B6B7;
    }
    .toolbar >>> .w-e-active i {
        color: #666666;
    }
    .text {
        /* border: 1px solid #ccc; */
        height: 500px;
        padding: 6px 0px;
    }
    .placeholder {
        color: #CCCCCC;
        position: absolute;
        left: 0px;
        top: 58px;
    }
    .text >>> .w-e-text {
        padding: 0;
    }
    .active >>> .w-e-text {
        color: #666666;
    }
</style>
