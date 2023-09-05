// components/index/mv/mv.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mvList:Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotomvdetail(e){
      let mvid=e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/mvdetail/mvdetail?mvid=${mvid}`,
      })
    },
  }
})
