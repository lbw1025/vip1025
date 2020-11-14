<template>
  <div>
    <ul class="store-list-box">
      <li class="store-list" v-for="obj in list" :key="obj.id"
       @click="$router.push({path:'/detail',query:{id:obj.id}})">
        <img class="store-img" :src="obj.img" alt="" />
        <div class="store-info">
          <h2>{{ obj.name }}</h2>
          <div>
            <Star :num="parseFloat(obj.score)"></Star>
          </div>
          <div class="num">{{ obj.num }}</div>
          <div>配送时间：{{ obj.minute }}分钟</div>
          <div class="price">{{ obj.price }}元</div>
        </div>
      </li>
    </ul>
    <img  class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt="">
  </div>
</template>

<script>
import axios from "axios";
import Star from "@/components/Star";
export default {
  data() {
    return {
      list: [],
      pageNum: 0,
      isShow :true,
      isFinished:false
    };
  },
  components: {
    Star,
  },
  methods: {
    getData() {
      axios
        .get(
          "http://admin.gxxmglzx.com/tender/test/get_store?current=" +
            this.pageNum +
            "&size=10"
        )
        .then((res) => {
          //   this.list = res.data.data.list;
          this.list = [...this.list, ...res.data.data.list];
          this.pageNum++;
          this.isShow = false;
          if(this.list.length == res.data.data.total)
          {
              this.isFinished =true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getData();
    window.onscroll = () => {
      let scrollTop = Math.ceil(document.documentElement.scrollTop);
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;

      console.log(scrollTop,clientHeight,scrollHeight)


      if ((  Math.abs(scrollTop + clientHeight - scrollHeight) <2) && !this.isFinished) {
        this.isShow = true;
        this.getData();
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.store-list-box {
  padding: 0.1rem;
  .store-list {
    display: flex;
    padding: 0.2rem 0.1rem 0 0.1rem;
    border-top: 1px solid gray;
    h2 {
      font-size: 15px;
    }
    div {
      font-size: 12px;
    }
    .store-img {
      width: 1.52rem;
      height: 1.52rem;
    }
    .store-info {
      flex: 1;
      padding: 0.1rem;
      .price {
        font-size: 18px;
        color: #ff6600;
        padding-top: 0.2rem;
      }
    }
  }
}
.loading{
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 1.4rem;
    height: 1.4rem;
}
</style>