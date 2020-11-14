<template>
  <div class="container">
    <div class="order-left">
      <div>
        <span v-for="obj in nav" :key="obj.id">{{ obj.name }}</span>
      </div>
    </div>

    <div class="order-right">
      <div>
        <div v-for="(obj, index) in goods" :key="index">
          <h2>{{ obj.name }}</h2>
          <ul>
            <li class="order-list" v-for="prod in obj.content" :key="prod.id">
              <img class="order-img" :src="prod.img" alt="" />
              <p>{{ prod.name }}</p>
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
    };
  },
  methods: {},
  created() {
    axios
      .get(
        `http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`
      )

      .then((res) => {
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;

        this.$nextTick(() => {
          let leftScroll = new BetterScroll(".order-left", {
            click: true,
            bounce: false,
          });
          let rightScroll = new BetterScroll(".order-right", {
            click: true,
            bounce: false,
          });
        });
      });
  },
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
    }
  }
  .order-right {
    flex: 3;
    height: calc(100vh - 94px);
    margin-left: 18px;
    .order-list {
      display: flex;
      .order-img {
        width: 90px;
        height: 90px;
      }
      p {
        flex: 1;
      }
    }
  }
}
</style>