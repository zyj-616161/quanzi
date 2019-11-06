<template>
  <div class="head">
      <span v-if="$route.meta.flag" @click="fn" class="span">&lt;</span>
      <span>{{$route.meta.title}}</span>
  </div>
</template>

<script>
export default {
   methods:{
     fn(){
       this.$router.go(-1)
     }
   }
}
</script>

<style scoped lang="scss">
  .head{
      width: 100%;
      height: 50px;
      background: #eee;
      line-height: 50px;
      text-align: center;
      position: relative;
      .span{
        position: absolute;
        width: 50px;
        height: 100%;
        left: 0;
        top: 0;
        text-align: center;
        line-height: 50px;
        font-size: 30px;
        color: #333;
      }
  }
</style>