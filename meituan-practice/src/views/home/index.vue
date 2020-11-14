<template>
  <div>
    <!-- 头部**************** -->
    <Head></Head>
    <!-- 中间 -->
    <Center></Center>
    <!-- 底部 -->
    <List></List>
  </div>
</template>

<script>
import Head from "./Head";
import Center from "./Center";
import List from "./List";
export default {
  components: {
    Head,
    Center,
    List
  },
};
</script>

<style lang="scss" scoped>
</style>