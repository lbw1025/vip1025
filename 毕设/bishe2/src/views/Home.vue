<template>
  <div class="container-job">
    <div class="container-jobTitle">热招职位</div>
    <div class="container-jobTabs">
      <el-tabs
        class="container-tab"
        header-cell-style="{background:'#FFFFFF'}"
        v-model="activeName"
        @tab-click="handleClick"
        stretch="ture"
      >
        <el-tab-pane class="container-jobFont" label="互联网" name="first">
          <div class="container-jobBox">
            <div class="container-jobBoxTitle">
              <div class="container-jobBoxTitle_name">
                <span>急招前端</span>
              </div>
              <div class="container-jobBoxTitle_money">
                <span>11-22K·13薪资</span>
              </div>
            </div>
            <div class="container-jobBoxPlace">
              <div>
                <span>深圳</span>
              </div>
              <div>
                <span class="vline"></span>
              </div>
              <div>
                <span>3-5年</span>
              </div>
              <div>
                <span class="vline"></span>
              </div>
              <div>
                <span>本科</span>
              </div>
            </div>
            <div class="container-jobBoxLine">
              <div>
                <span>logo</span>
              </div>
              <div class="container-jobBoxLine_name">
                <span>中软国际</span>
              </div>
              <div class="container-jobBoxLine_content">
                <span>计算机软件</span>
              </div>
              <div>
                <span class="vline"></span>
              </div>
              <div class="container-jobBoxLine_content">
                <span>已上市</span>
              </div>
            </div>
          </div>
          <div class="container-jobBox"></div>
          <div class="container-jobBox"></div>
        </el-tab-pane>
        <el-tab-pane label="金融" name="second">金融</el-tab-pane>
        <el-tab-pane label="房地产/建筑" name="third">房地产/建筑</el-tab-pane>
        <el-tab-pane label="教育培训" name="fourth">教育培训</el-tab-pane>
        <el-tab-pane class="container-jobFont" label="娱乐传媒" name="fifth"
          >娱乐传媒</el-tab-pane
        >
        <el-tab-pane label="医疗健康" name="sixth">医疗健康</el-tab-pane>
        <el-tab-pane label="法律咨询" name="seventh">法律咨询</el-tab-pane>
        <el-tab-pane label="采购贸易" name="eighth">采购贸易</el-tab-pane>
      </el-tabs>
    </div>
    <div class="container-jobButton">
      <span>查看更多</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="scss">
body {
  background-color: #f6f6f8;
}
.container-job {
}
.container-jobTitle {
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
    margin-top: 240px;
}
.container-jobTitle::before {
  content: "";
  display: inline-block;
  vertical-align: 8px;
  margin: 0 10px;
  width: 50px;
  height: 1px;
  background: #d1d4db;
}
.container-jobTitle::after {
  content: "";
  display: inline-block;
  vertical-align: 8px;
  margin: 0 10px;
  width: 50px;
  height: 1px;
  background: #d1d4db;
}
.container-jobTabs {
  width: 1280px;
  margin: 0 auto;
  background-color: #ffffff;
}
.el-tabs__content {
  background-color: #f6f6f8;
}
.container-jobBox {
  float: left;
  height: 130px;
  width: 406px;
  margin-top: 30px;
  margin-right: 20px;
  background-color: #ffffff;
  padding: 16px 20px;
  box-sizing: border-box;
}
.container-jobBoxTitle {
  position: relative;
  display: flex;
  flex-direction: row;
}
.container-jobBoxTitle_name span {
  position: relative;
  max-width: 200px;
  font-size: 15px;
  color: #414a60;
  margin-right: 8px;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.container-jobBoxTitle_money span {
  position: absolute;
  right: 0;
  font-size: 15px;
  color: #fd7240;
  line-height: normal;
  flex: 1;
  text-align: right;
  max-width: none;
}
.container-jobBoxPlace {
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: #8d92a1;
  padding-right: 0;
  line-height: 28px;
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vline {
  display: inline-block;
  width: 1px;
  height: 12px;
  vertical-align: middle;
  background: #e0e0e0;
  margin: 0 10px;
}
.container-jobBoxLine {
  border-top: 1px solid #eef0f5;
  display: flex;
  margin-top: 8px;
  padding-top: 12px;
}
.container-jobBoxLine_name {
  margin-left: 10px;
  margin-right: 20px;
  color: #61687c;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.container-jobBoxLine_content {
  font-size: 13px;
  color: #8d92a1;
  max-width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.container-jobButton {
  width: 216px;
  font-size: 15px;
  height: 32px;
  line-height: 32px;
  background: #5dd5c8;
  color: #fff;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
}
</style>
