<template>
    <div>
          <!-- Head组价 -->
        <Head></Head>

        <!-- Categroy组件 -->
        <Category></Category>

        <!-- List组件 -->
        <List></List>

    </div>
</template>

<script>
    import Head from './Head'
    import Category from './Category'
    import List from './List'
    export default {
         components:{
            Head,
            Category,
            List
        }
    }
</script>

<style lang="scss" scoped>

</style>