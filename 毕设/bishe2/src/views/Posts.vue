<template>
  <div class="company">
    <ul class="company-list">
      <li>
        <div class="job-title">
          <div class="job-titleName">
            <span>web前端</span>
            <span class="job-titleRight">沃东天俊信息技术</span>
          </div>
          <div class="job-titleLimit">
            <span>30-50K·15薪</span>
            <span>5-10年</span>
            <span class="viline"></span>
            <span>本科</span>
            <span>李先生</span>
          </div>
        </div>
        <div class="job-logo">
          <div class="job-logoLeft">
            <span class="job-logoLeftName">美团</span>
            <div class="job-logoLeftContent">
              <span>互联网</span>
              <span class="viline"></span>
              <span>已上市</span>
              <span class="viline"></span>
              <span>10000人以上</span>
            </div>
          </div>
          <div class="job-logoRight">
            <span>logo</span>
          </div>
        </div>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.company {
  margin-top: 200px;
  font-size: 20px;
}
.company-list li {
  width: 800px;
  height: 100px;
  cursor: pointer;
  background: #fff;
  margin: 0 auto;
  margin-bottom: 20px;
}
.job-title {
  float: left;
  position: relative;
  height: 70px;
  padding: 16px 20px;
}
.job-titleName span {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  color: #00c2b3;
}
.job-titleRight {
}
.job-logo {
  float: right;
  padding: 16px 20px;
}
.job-titleLimit span:nth-child(1) {
  color: #fc703e !important;
  font-size: 15px;
}
.job-titleLimit span:nth-child(n + 1) {
  font-size: 14px;
  margin-right: 13px;
  margin-top: 0;
  max-width: 169px;
  color: #61687c;
}
.job-logoLeft {
  float: left;
}
.job-logoLeftName {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  color: #00c2b3;
}
.job-logoLeftContent span {
  font-size: 14px;
  margin-right: 13px;
  margin-top: 0;
  max-width: 169px;
  color: #61687c;
}

.job-logoRight {
  float: right;
  margin-top: 20px;
  margin-left: 40px;
}
.viline{
   display: inline-block;
    width: 1px;
    height: 12px;
    vertical-align: middle;
    background: #e0e0e0;
}
</style>