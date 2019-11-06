<template>
  <div class="quan-wrap">
    <div class="quan-head">
      <span class="iconfont icon-zhaopian"></span>
      <input type="text">
    </div>
    <div class="quan-main">
      <Item v-for="item in list" :item="item" :key="item.publishID"/>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Item from '../../../components/Item'
export default {
    components:{
    Item
    },
   computed:{
     ...mapState(["list"])
   },
   methods:{
     ...mapActions(["getList"])
   },
   created(){
     this.getList()
   }
}
</script>

<style lang="scss" scoped>
.quan-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .quan-head{
    width: 100%;
    height: 50px;
  }
  .quan-main{
    width: 100%;
    flex: 1;
    overflow: auto;
  }
}
</style>