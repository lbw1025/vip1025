<template>
<div class="app">
  <Top> </Top>
  <router-view></router-view>
</div>
</template>
<script>
import Top from "../src/components/Top.vue";
export default {
    components: {
    Top
  },
};
</script>
<style lang="scss">
.container {
  width: 100%;
  height: 50px;
  background: #202329;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
  position: relative;
  z-index: 1005;
}
.container-logo {
  position: absolute;
  line-height: 50px;
  margin-left: 60px;
  width: 110px;
  font-size: 25px;
  color: #00d7c6;
}

//头部左侧列表
.container-left {
  float: left;
     line-height: 50px;
  margin-left: 110px;
  line-height: 49px;
}
.container-left-list {
  margin-left: 110px;
}
.container-left li {
  font-family: arial, verdana, helvetica, "PingFang SC", "HanHei SC";
  float: left;
  color: #ffffff;
  font-size: 14px;
  padding: 0 15px;
}
.container-left li:hover {
  color: #00d7c6;
  cursor: pointer;
}

//头部右侧列表
.container-right{
   float: right;
   line-height: 50px;
}
.container-right li {
  font-family: arial, verdana, helvetica, "PingFang SC", "HanHei SC";
  float: left;
  color: #ffffff;
  font-size: 14px;
  padding: 0 15px;
}
.container-right li:hover{
  color: #00d7c6;
  cursor: pointer;
}
.container-center{
  height: 500px;
  background-color: red;
}
</style>
