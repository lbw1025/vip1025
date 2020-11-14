<template>
  <div class="store">
    <div class="store-left">
      <div class="num"><h2>{{list.delivery}}</h2></div>
      <div>商家评分</div>
    </div>
    <div class="store-center">
      <div class="center">
        口味
        <Star :num="list.flavor"></Star>
        {{list.flavor}}分
      </div>
      <div class="center">
        包装
        <Star :num="list.packing"></Star>
        {{list.packing}}分
      </div>
    </div>
    <div class="store-right">
      <div class="num2"><h2>{{list.score}}</h2></div>
      <div>配送评分</div>
    </div>
  </div>
</template>

<script>
import Star from "@/components/Star";
export default {
    props:['list'],
  components: {
    Star,
  },
};
</script>

<style lang="scss" scoped>
.store {
  display: flex;
  .store-left {
    width: 1.86rem;
    text-align: center;
    font-size: 18px;
    .num {
      font-size: 25px;
      color: #ffb000;
    }
  }
  .store-center {
    flex: 1;
    text-align: center;
    margin-top: 14px;
  }
  .store-right {
    width: 1.86rem;
    text-align: center;
    font-size: 18px;
    .num2 {
      font-size: 25px;
      color: #e0e0e0;
    }
  }
  .center {
    display: flex;
    font-size: 15px;
    padding-left: 40px;
  }
}
</style>