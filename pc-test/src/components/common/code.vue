<!--二维码生成-->
<template>
    <div class="code-box" ref="codeBox">
        <div ref="qrcode" class="codeContent"></div>
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
    name: "CodeModule",
    data() {
        return {
            codeWidth: 0,
            codeHeight: 0
        }
    },
    props: {
        url: {
            type: String,
            required: true
        },
        colorDark: {
            type: String,
            default: '#000000'
        },
        colorLight: {
            type: String,
            default: '#ffffff'
        }
    },
    watch: {
        url() {
            this.initCode()
        }
    },
    mounted() {
        this.initCode()
    },
    methods: {
        initCode() {
            // 使用$nextTick确保数据渲染
            this.$nextTick(() => {
                if (this.url) {
                    this.codeWidth = Number(this.$refs.codeBox.clientHeight)
                    this.codeHeight = Number(this.$refs.codeBox.clientWidth)
                    this.showCode(this.codeWidth, this.codeHeight)
                }
            })
        },
        showCode(width, height) {
            if (this.$refs.qrcode) {
                this.$refs.qrcode.innerHTML = ''
            }
            const qrcode = new QRCode(this.$refs.qrcode, {
                text: this.url,
                width: width || 59,
                height: height || 59,
                colorDark: this.colorDark,
                colorLight: this.colorLight,
                correctLevel: QRCode.CorrectLevel.L
            })
            console.log(qrcode)
        }
    }
}
</script>

<style scoped>
    .codeContent {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .code-box {
        width: 100%;
        height: 100%;
    }
    .codeContent >>> img {
        width: 100%;
        height: 100%;
    }
</style>
