<template>
    <div class="list-container">
        <div class="list-text">
            <span :class="{active:obj.id == typeId}" v-for="obj in list.label" :key="obj.id" @click="change(obj.id)/*$emit('updata',obj.id),typeId=obj.id*/">{{obj.name}}({{obj.count}})</span>
        </div>
    <ul class="list-box">
        <li class="list" v-for="obj in list.rate" :key="obj.id">
        <img  class="list-img" :src="obj.portrait" alt=""> 
        <div class="list-info">
            <div class="list-name">
                {{obj.name}}
            </div>
            <div class="list-descs">
             {{obj.content}}
            </div>
        </div>
        </li>
    </ul>
    </div>
</template>

<script>
    export default {
        props:["list"],
        data(){
            return{
                typeId:1
            }
        },
        methods:{
            change(id){
                this.$emit('updata',id);
                this.typeId = id;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-container{
        padding: 0.2rem;
        border-top: 0.2rem solid #f4f4f4;
        .list-text{
            padding-bottom: 0.3rem;;
        }
        span{
            border: 1px solid #bbb;
            padding: 0.1rem 0.24rem;
            border-radius: 0.28rem;
            margin-right: 0.2rem;
            display: inline-block;
            margin-bottom: 0.1rem;
            &.active{
         background: #fffbf1;
        border:1px solid #ffb000;
      }
        }
    }
    .list-box{
        .list{
            display: flex;
        }
        .list-img{
            height: 0.8rem;
            width: 0.8rem;
            border-radius: 50%;
        }
        .list-info{
            margin-bottom: 0.3rem;
        }
    }
</style>