<template>
  <div class="code" id="code">
    <div v-show="isShow === 'url'">
      <div ref="qrcode" class="codeContent" ></div>
    </div>
    <div v-show="isShow === 'img'">
      <img :src="message">
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
//@group 公共组件
//二维码组件
export default {
    name: 'QrCode',
    data() {
        return {
            isShow: false,
            code: null
        }
    },
    props: {
        message: {}
    },
    created: function() {
    },
    mounted: function() {
        if (this.message) {
            if ((this.message.indexOf('.jpg') > -1 || this.message.indexOf('.png') > -1 || this.message.indexOf('.jpeg') > -1)) {
                this.isShow = 'img'
            }
            else {
                this.isShow = 'url'
                this.showCode()
            }
        }
    },
    methods: {
        showCode: function() {
            if (this.$refs.qrcode) {
                this.$refs.qrcode.innerHTML = ''
            }

            this.code = new QRCode(this.$refs.qrcode, {
                text: this.message,
                width: 180,
                height: 180,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.L
            })
        }
    },
    updated: function() {
        if (this.message.indexOf('.jpg') > -1 || this.message.indexOf('.png') > -1 || this.message.indexOf('.jpeg') > -1) {
            this.isShow = 'img'
        }
        else {
            this.isShow = 'url'
            this.showCode()
        }
    }

}
</script>
<style scoped>
  .code{
    position: relative;
  }
  .codeContent{
    position: relative;
  }
  .code img{display: inline-block!important;width: 100%;}
</style>
