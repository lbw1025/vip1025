<template>
  <div>
    <ul>
      <li v-for="obj in cateList" :key="obj.id">
        <img :src="obj.img" alt="" />
        <p>{{ obj.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cateList:[]
    };
  },
  created() {
    axios
      .get("http://admin.gxxmglzx.com/tender/test/get_type")
      .then((res) => {
        console.log(res.data);
        let result = res.data;
        if ((result.errcode = 200)) {
          this.cateList = result.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
ul {
    margin-top:5px;
    overflow: hidden;
}
img {
  height: 60%;
  width: 60%;
}
li {
  width: 20%;
  float: left;
  text-align: center;
  margin: 5px 0;
}
</style>