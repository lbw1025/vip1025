<template>
  <div>
    <ul>
      <li v-for="obj in list" :key="obj.id">
        <div>
         <img :src="obj.img" alt=""> >
        </div>
        <div>
          <span>{{ obj.name }}</span>
          <div>
            <span></span>
            <div>配送时间:{{ obj.minute }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Star from '@/components/Star'
export default {
  data() {
    return {
      list: [],
      pageNum:0,
      isShow:true,
      isFinished:false
    };
  },
  components:{
      Star
  },
  methods: {
    getData(){
      axios
        .get("http:admin.gxxmglzx.com/tender/test/get_store?current="+this.pageNum+"&size=10")
        .then((res) => {
          this.list = [...this.list, ...res.data.data.list];
          this.pageNum++;
          this.isShow = false
          if(this.list.lenth == res.data.data.total){
              this.isFinished = true
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  created(){
      this.getData(),
      window.onscroll = ()=>{
           let scrollTtop = document.documentElement.scrollTop; 
           let clientHeight = document.documentElement.clientHeight;
           let scrollHeight = document.documentElement.scrollHeight;
           if((scrollTtop + clientHeight ==scrollHeight) && !this.isFinished){
                this.isShow = true;
                this.getData();
           }
      }
  }
};
</script>

<style lang="scss" scoped>
</style>