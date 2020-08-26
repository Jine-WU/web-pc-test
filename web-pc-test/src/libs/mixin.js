/**
 * 分页参数及选择条数、选择页数方法
 * tips：获取数据的方法名必须用默认为getData，可根据页面个人喜好，在引用mixin时，将methodName更改
 */
export const pageMixin = {
  data() {
    return {
      pageObj: {
        current: 1,
        size: 10
      },
      pageSizes: [10, 20, 30, 40], // 可选条数
      listTotal: 0, // 总数
      methodName: 'getData'
    }
  },
  computed: {
  },
  methods: {
    // 选择条数
    handleSizeChange(val) {
      this.pageObj.size = val
      this[this.methodName]()
    },
    // 选择页数
    handleCurrentChange(val) {
      this.pageObj.current = val
      this[this.methodName]()
    }
  }
}

export default {
  pageMixin
}
