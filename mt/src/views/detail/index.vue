<template>
  <div class="bs-wrapper">
    <div class="bs-content">
        <detailHead></detailHead>
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
    </div>
</template>

<script>
import DetailHead from "./DetailHead";
import Comment from "@/views/comment/index";
import BetterScroll from "better-scroll";
import Store from "@/views/store/index";
import Order from "@/views/order/index";
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    DetailHead,
    Comment,
    Store,
    Order,
  },
   mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bs-wrapper", {
        click:true,
        bounce:false
      });
    },1000);
  }
};
</script>
    
<style lang="scss" scoped>
    .bs-wrapper{
        height: 100vh;
        overflow: hidden;
    }
</style>