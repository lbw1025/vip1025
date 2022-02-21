<template>
  <div>
    <div class="container">
      <div class="container-logo">
        <p>携手直聘</p>
      </div>
      <div class="container-left">
        <ul class="container-left-list clearfix">
          <li>
            <a><router-link to="/home">首页</router-link></a>
          </li>
          <li>
            <a><router-link to="/posts">职位</router-link></a>
          </li>
          <li><a>校园</a></li>
          <li><a>海归</a></li>
          <li><a>公司</a></li>
          <li><a>App</a></li>
          <li><a>资讯</a></li>
          <li><a>有了</a></li>
          <li><a>百科</a></li>
        </ul>
      </div>
      <div class="container-right">
        <ul>
          <li><a>上传简历</a></li>
          <li><a>我要找工作</a></li>
          <li><a>我要招聘</a></li>
         <li><router-link to="/enroll">注册</router-link></li>
          <li><router-link to="/sign">登录</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>>
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
  float: left;
  padding: 0 15px;
}
.container-left a {
  font-family: arial, verdana, helvetica, "PingFang SC", "HanHei SC";
  color: #ffffff;
  font-size: 14px;
}
.container-left a:hover {
  color: #00d7c6;
  cursor: pointer;
}
//头部右侧列表
.container-right {
  float: right;
  line-height: 50px;
}
.container-right li {
  float: left;
  padding: 0 15px;
}
.container-right a:hover {
  color: #00d7c6;
  cursor: pointer;
}
.container-right a{ 
  font-family: arial, verdana, helvetica, "PingFang SC", "HanHei SC";
 color: #ffffff;
  font-size: 14px;
}
</style>
