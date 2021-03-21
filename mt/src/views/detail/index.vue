<template>
  <div class="bs-wrapper">
    <div class="bs-content">
        <detailHead :storeMsg="storeMsg"></detailHead>
        <van-tabs v-model="active" animated sticky color="#ffb000">
          <van-tab :title="'点餐'">
            <!-- 点餐页 -->
            <order></order>
          </van-tab>
          <van-tab :title="'评论'">
            <!--评价页  -->
            <comment></comment>
          </van-tab>
          <van-tab :title="'商家'">
            <!-- 商家页 -->
            <store></store>
          </van-tab>
        </van-tabs>
      </div>

        <!-- 购物车 -->
          <Cart v-if="active ==0 " :storeMsg="storeMsg"></Cart>
    </div> 
</template>

<script>
import DetailHead from "./DetailHead";
import Comment from "@/views/comment/index";
import BetterScroll from "better-scroll";
import Store from "@/views/store/index";
import Order from "@/views/order/index";
import Cart from "./../cart"
import axios from "axios"
export default {
  data() {
    return {
      active: 0,
      storeMsg:""
    };
  },
  components: {
    DetailHead,
    Comment,
    Store,
    Order,
    Cart,
  },
   mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bs-wrapper", {
        click:true,
        bounce:false
      });
    },1000);

    // 请求商家数据
    axios.get('http://admin.gxxmglzx.com/tender/test/get_store_id?id='+this.$route.query.id)
    .then(res=>{
        this.storeMsg =res.data.data;
    }).catch(err=>{
      console.log(err)
    })
  }
};
</script>
    
<style lang="scss" scoped>
    .bs-wrapper{
        height: 100vh;
        overflow: hidden;
    }
   
</style>