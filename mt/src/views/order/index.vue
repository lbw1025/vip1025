<template>
  <div class="container">
    <div class="order-left">
      <div>
        <span
        :class="{active:index == currentIndex,'cate-list':true}"
          v-for="(obj, index) in nav"
          @click="change(index)"
          :key="obj.id"
          >{{ obj.name }}</span>
      </div>
    </div>

    <div class="order-right">
      <div>
        <div class="order-right-box" v-for="(obj, typeIndex) in goods" :key="typeIndex">
          <h2>{{ obj.name }}</h2>
          <ul>
            <li class="order-list" v-for="(prod,index) in obj.content" :key="prod.id">
              <img class="order-img" :src="prod.img" alt="" />
              <div>
                  <p>{{ prod.name }}</p>
                  <p>{{prod.price}}</p>
              </div>
              <div class="add-cart">
                    <span class="iconfont icon-jianhao" v-if="prod.count > 0"></span> 
                    <span class="num">{{ prod.count}}</span>


                   <span class="iconfont icon-jiahao-copy" @click="$store.commit('add',{typeIndex,index})"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      nav: [],
      goods: [],
      currentIndex: 0,
      scrollY:0,
      post:[]
    };
  },
  methods: {
    change(index) {
      let prodCateList = document.getElementsByClassName("order-right-box");
      console.log(prodCateList[index]);
      this.rightScroll.scrollToElement(prodCateList[index], 300);
      this.currentIndex = index
    },
    getPos(){
      let prodCateList =document.getElementsByClassName("order-right-box");
      let H = 0;
      for(let i=0; i< prodCateList.length; i++){
          if(i == 0){
            this.post.push(0)
          }else{
            H += prodCateList[i - 1].offsetHeight;
            this.post.push(H);
          }
      }
      console.log(this.post)
    }
  },
  created() {
    axios
      .get(
        `http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`
      )

      .then((res) => {
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;
          // vue 存商品s
          this.$store.commit('save',this.goods)

        this.$nextTick(() => {
          this.leftScroll = new BetterScroll(".order-left", {
            click: true,
            bounce: false,
          });
          this.rightScroll = new BetterScroll(".order-right", {
            click: true,
            bounce: false,
            probeType:3
          });
          this.rightScroll.on("scroll",position => {
            this.scrollY = Math.abs(position.y);
            console.log(this.scrollY)
          });

          this.getPos();
        });
      });
  },
  watch:{
    scrollY(val){
      let cateList = document.querySelectorAll('.cate-list');
      for(let index = 0; index< this.post.length; index++){
        let post1 =this.post[index];
        let post2 = this.post[index+1];
        if(val>= post1 && val < post2){
          this.currentIndex = index;
          let cateList =document.querySelectorAll('.cate-list');
          this.cateScroll.scrollToElement(cateList[index],300)
          break;
        }

      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding-bottom: 50px;
  .order-left {
    flex: 1;
    height: calc(100vh - 94px);
    background: #f5f5f5;
    text-align: center;
    span {
      font-size: 15px;
      color: #666666;
      display: block;
      padding-top: 9px;
      padding-bottom: 22px;

      &.active {
        color: red;
      }

    }
  }
  .order-right {
    flex: 3;
    height: calc(100vh - 94px);
    margin-left: 18px;
    .order-list {
      display: flex;
      position: relative;
      margin-bottom: 0.1rem;
      .order-img {
        width: 90px;
        height: 90px;
      }
      p {
        flex: 1;
      }
      .add-cart{
        position: absolute;
        right: 0.2rem;
        bottom: 0.2rem;
        .icon-jianhao{
          color: #e2e3e5;
          font-size: 26px;
          vertical-align: middle;
        }
        .icon-jiahao-copy{
          color: #ffc134;
          font-size: 26px;
          vertical-align: middle;
        }
        .num{
          margin: 0 0.1rem;
        }
      }
    }
  }

}
</style>