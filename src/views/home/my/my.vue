<template>
  <div class="my-wrap">
      <div class="my-head">
          <img :src="require(`../../../../public/imge/avator/${user.avator}`)" alt="">
          <div class="right">
              <p class="pp">{{user.nick}}</p>
              <p><span>年龄:{{user.age}}</span></p>
          </div>
      </div>
      <div class="my-main">
            <div class="my-ul">
                <router-link to="/xinxi" tag="p"><span><i class="iconfont icon-wode1"></i>个人信息</span><span  class="el-icon-arrow-right"></span></router-link>
                <router-link to="/ping" tag="p"><span><i class="iconfont icon-linedesign-01"></i>我的评论</span><span  class="el-icon-arrow-right"></span></router-link>
                <router-link to="/shou" tag="p"><span><i class="iconfont icon-shoucang"></i>个人收藏</span><span  class="el-icon-arrow-right"></span></router-link>
            </div>
            <div class="my-ol">
                <router-link to="/gai" tag="p"><i class="iconfont icon-xiugaimima01"></i>修改密码</router-link>
                <p><i class="iconfont icon-tuichu"></i>退出</p>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          user:JSON.parse(localStorage.token)
      }
  }
}
</script>

<style scoped lang="scss">
.my-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.my-head{
    width: 100%;
    height: 120px;
    background-color: rgb(247, 105, 104);
    display: flex;
    align-items: center;
    padding-left: 25px;
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        overflow: hidden;
    }
    .right{
        padding-left: 25px;
        color: #fff;
        p{
          margin-top: 10px;
        }
        .pp{ 
            font-size: 20px;
        }
        
    }
}
.my-main{
     flex: 1;
     background: #eee;
    padding-top: 20px;
     .my-ul{
        width: 100%;
        height: 120px;
        background: #fff;
         line-height: 40px;
        
     }
      .my-ol{
        width: 100%;
        height: 80px;
        margin-top: 20px;
        background: #fff;
        line-height: 40px;
     }
     p{
    width: 100%;
    height: 40px;
    padding: 10px;
    display: flex;
    align-items: center;
    i{
        color:rgb(247, 105, 104); 
        margin-right: 10px;
    }
}
}

</style>