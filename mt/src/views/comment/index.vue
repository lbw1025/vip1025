<template>
  <div class="comment-wrapper">
    <div>
       <Comment-header :list="list"></Comment-header>
    <!-- center -->
    <comment-center :list="list" @updata="fn"></comment-center>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentHeader from "./CommentHeader";
import CommentCenter from "./CommentCenter";
import BetterScroll from "better-scroll";
export default {
  components: {
    CommentHeader,
    CommentCenter,
  },
  data() {
    return {
      id: this.$route.query.id,
      list: {},
    };
  },
  methods: {
    fn(id) {
      this.getData(id);
    },
    getData(tyId) {
      axios
        .get(
          `http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${tyId}`
        )
        .then((res) => {
          console.log(res.data.data);
          this.list = res.data.data;
           this.$nextTick(()=>{
            new BetterScroll(".comment-wrapper",{
              bounce:false,
              click:true
            })
            })
        });
    }
  },


  created() {
    this.getData(1);
  },
};
</script>

<style lang="scss" scoped>
.comment-wrapper{
  height: calc(100vh - 44px);
}
</style>