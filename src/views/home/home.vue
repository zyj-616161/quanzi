<template>
  <div class="home-wrap">
      <div class="home-main">
         <router-view/>
      </div>
     <div class="home-foot">
        <router-link to="/home/quan" tag="span"><span class="iconfont icon-quanzi"></span>圈子</router-link>
        <router-link to="/home/my" tag="span"><span class="iconfont icon-wode"></span>我的</router-link>
     </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    mounted(){
        // axios.get("/getList").then(res=>{
        //   console.log(res.data)
        // })
    }
}
</script>

<style lang="scss" scoped>
.home-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-foot{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .router-link-active{
      color: red;
    }
  }
  .home-main{
     flex: 1;
  }
}

</style>