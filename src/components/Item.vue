<template>
  <div class="item">
     <div class="item-head">
         <div class="item-left">
             <img :src="require(`../../public/imge/avator/${item.avator}`)" alt="">
            <p class="pp">
                <span>{{item.nick}}</span>
                <span>{{item.publishtime}}</span>
            </p>
         </div>
         <span class="iconfont icon-shoucang" :class="item.zanFlag ? 'shou' : 'bushou' "></span>
     </div>
     <div class="item-main">
        <div class="imge" v-if="item.imgs">
            <div v-for="v in item.imgs" :key="v.userID">
               <img :src="require('')" alt="">
            </div>
        </div>
     </div>
     <div class="item-foot">
         <span><i class="iconfont icon-dianzan"></i>{{item.zanNum}}</span>
         <span><i class="iconfont icon-linedesign-01"></i></span>
     </div>
  </div>
</template>

<script>
export default {
  props:["item"]
}
</script>

<style lang="scss" scoped>
.item{
    width: 100%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    .item-head{
      padding-right: 10px;
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item-left{
          display: flex;
          font-size: 14px;
          img{
           width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
      }
      }
      
    }
}
.shou{
    color: #ccc;
}
.bushou{
    color: rgb(247, 105, 104);
}
.pp{
    display: flex;
    flex-direction: column;
}
.item-foot{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid  rgb(247, 105, 104);
}
</style>