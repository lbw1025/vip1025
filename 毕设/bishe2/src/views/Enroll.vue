<template>
  <div class="box">
    <div class="interface">
      <!-- 头部 -->
      <!-- <div class="head wrapper ">
          <div  class="head-logo">   </div>
        </div> -->
      <!-- 中间部分 -->
      <div class="center">
        <div class="main-center wrapper">
          <div class="c-input">
            <div class="input-top">
              <a class="active" href="">账号注册</a>
              <span></span>
              <a href="">扫码登陆</a>
            </div>

            <div class="input-center">
              <div class="input-box">
                <input type="text" placeholder="邮箱/手机号码/ID" />
              </div>
              <div class="input-box">
                <input type="password" placeholder="密码" />
              </div>
            </div>
            <div class="button-box"><button>登录</button></div>

            <div class="logo-into">
              <div class="box1"><a href="">手机短信登录/注册</a></div>
              <div class="box2">
                <a href="">立即注册</a>
                <span>｜</span>
                <a href="">忘记密码?</a>
              </div>
            </div>
            <div class="other-login">
              <fieldset>
                <legend>其他登录方式</legend>
              </fieldset>
            </div>
            <div class="login-radio">
              <ul>
                <li class="qq">
                  <i> </i>
                </li>
                <li class="sina">
                  <i> </i>
                </li>
                <li class="alpay">
                  <i> </i>
                </li>
                <li class="wechat">
                  <i> </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部部分 -->
    <div class="foot">
      <div class="foot-list">
        <ul>
          <li>
            <a href="javacript:void(0);">简体</a>
            |
          </li>
          <li><a href="javacript:void(0);">繁体</a> |</li>
          <li><a href="javacript:void(0);">English</a> |</li>
          <li><a href="javacript:void(0);">常见问题</a> |</li>
          <li><a href="javacript:void(0);">隐私政策</a> |</li>
        </ul>
      </div>
      <div class="foot-bottom">
        小米公司版权所有-京ICP备10046444-<img
          src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
        />京公网安备11010802020134号-京ICP证110507号
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.head-logo {
  height: 98px;
  width: 200px;
  background-image: url("../assets/mistore_logo.png");
}
.center {
  height: 690px;
  width: 100%;
  overflow: hidden;
  background: #5dd5c8 url("../assets/newbg.png");
  background-position: top center;
}
.main-center {
  height: 590px;
  margin-top: 30px;
}
.c-input {
  width: 410px;
  height: 566px;
  background-color: white;
  margin: 0  auto;
  margin-top: 80px;
}

.c-input .input-top {
  padding: 27px 0 24px;
  font-size: 24px;
  text-align: center;
}
.c-input .input-top a {
  color: #666;
}
.c-input span {
  width: 1px;
  height: 24px;
  border: 1px solid #e0e0e0;
  margin: 0 35px 0 31px;
}
.center .input-top a.active {
  color: #f56600;
}
.center .input-top a:hover {
  color: #f56600;
}
.center .input-center {
  width: 348px;
  margin: 0 auto;
}
.center .input-center input {
  border: none;
  outline: none;
}
.center .input-center .input-box {
  width: 306px;
  height: 22px;
  border: 1px solid #e0e0e0;
  margin-bottom: 14px;
  padding: 13px 16px 13px 14px;
}
.center .button-box button {
  background-color: #ff6700;
  width: 338px;
  height: 50px;
  color: white;
  border: none;
  margin-left: 30px;
}
.center .input-box input {
  width: 100%;
}
/* .center .input-box input:hover{
            cursor: pointer;
        } */
.center .button-box button:hover {
  cursor: pointer;
}

.center .logo-into .box1,
.center .logo-into .box2 {
  text-align: center;
}
.center .logo-into .box1 a {
  color: #f56600;
}
.center .logo-into .box2 a {
  color: #999;
}
.center .logo-into .box1 {
  margin-top: 14px;
  margin-bottom: 30px;
}
.center .logo-into span {
  margin: 0 0 0 0;
  border: none;
  color: #e0e0e0;
}
.center .other-login {
  width: 338px;
  margin: 0 auto;
  margin-top: 130px;
}
.center .other-login fieldset {
  border-width: 1px 0 0 0;
  text-align: center;
  border-color: #e0e0e0;
  border-style: solid;
}
.center .other-login legend {
  color: #999;
}

.center .login-radio li {
  height: 30px;
  width: 30px;
  float: left;
  margin: 0 17px;
  border-radius: 15px;
}
.center .login-radio ul {
  margin-top: 20px;
  padding: 0 70px;
}
.center .login-radio .qq {
  background-color: #0288d1;
}
.center .login-radio .sina {
  background-color: #d32f2f;
}
.center .login-radio .alpay {
  background-color: #0ae;
}
.center .login-radio .wechat {
  background-color: #00d20d;
}
.center .login-radio i {
  background-image: url(../assets/icons_type.png);
  width: 18px;
  height: 18px;
  display: block;
  margin: 4px auto 0px;
}
.center .qq i {
  background-position: -19px 0;
}
.center .sina i {
  background-position: -38px 0;
}
.center .alpay i {
  background-position: -57px 0;
  width: 25px;
}
.center .wechat i {
  background-position: -83px 0;
  width: 24px;
}
.foot {
  text-align: center;
  padding-top: 100px;
}
.foot .foot-list li {
  display: inline-block;
}
.foot .foot-list a {
  color: #333;
}
.foot .foot-bottom {
  padding: 10px 0;
}
</style>