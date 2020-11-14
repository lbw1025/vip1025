<template>
    <div>
        <ul class="box">
            <li class="box-li" v-for="obj in list" :key="obj.id">
               <img :src="obj.img" alt="">
              <p>{{obj.name}}</p> 
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                list:[]
            }
        },
            created(){
            axios.get('http://admin.gxxmglzx.com/tender/test/get_type')
            .then((res)=>{

                if(res.data.errcode==200){
                    this.list=res.data.data;
                }
            }).catch(()=>{

            })
            }

    }
</script>

<style lang="scss" scoped>
    .box{
        display: flex;
        flex-wrap: wrap;
    }
    .box-li{
        width: 20%;
       text-align: center;
       margin-top: 10px;
    }
    .box-li img{
        width: 60%;
    }
</style>