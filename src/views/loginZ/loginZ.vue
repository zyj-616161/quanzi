<template>
  <div class="loginZ-wrap">
      <HeadDom/>
      <div class="loginZ-main">
        <p>
          <label>
           <input type="text" placeholder="用户名">  
          </label>
        </p>
        <p>
          <label>
           <input :type="typeD"  placeholder="密码">
           <span @click="changeType" :class="{ss:flag}">⊙</span>
          </label>
        </p>
        <button>注册</button>
      </div>
  </div>
</template>

<script>
import HeadDom  from '../../components/HeadDom'
import { Agent } from 'http';
export default {
  data(){
    return {
      typeD:"text",
      flag:false
    }
  },
  components:{
    HeadDom
  },
  methods:{
    changeType(){
      this.flag=!this.flag;
      this.typeD=this.flag ? "password" : 'text';
    }
  }
}
</script>

<style lang="scss" scoped>
.loginZ-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .loginZ-main{
    flex: 1;
    padding: 10px;
    p{
      width: 100%;
      height: 45px;
      background: #eee;
      display: flex;   
      margin-top: 10px;
      label{
        width: 100%;
      }
    input{
        width: 85%;
        height: 100%;
        border: 0;
        background:none;
      }
    }
    button{
       margin-top: 10px;
       width: 100%;
       height: 45px;
       background: rgb(247, 105, 104);
       border: 0;
    }
   }
}
.zhu{
  text-decoration: underline;
}
span{
  font-size: 30px;
}
.ss{
  color: red;
}
</style>