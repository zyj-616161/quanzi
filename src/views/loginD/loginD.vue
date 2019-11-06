<template>
  <div class="loginD-wrap">
      <HeadDom/>
      <div class="loginD-main">
        <p>
          <label>
           <input type="text" placeholder="用户名" v-model="username">  
          </label>
        </p>
        <p>
          <label>
           <input :type="typeD"  placeholder="密码" v-model="userpwd">
           <span @click="changeType" class="iconfont " :class="flag ? 'icon-yanjing_bi' : 'icon-yanjing' " ></span>
          </label>
        </p>
        <button @click="denglu">登录</button>
        <router-link to="/loginZ" class="zhu">没有账号快速注册</router-link>
      </div>
  </div>
</template>

<script>
import HeadDom  from '../../components/HeadDom'
import axios from 'axios';
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return {
      typeD:"text",
      flag:false,
      username:"",
      userpwd:""
    }
  },
  components:{
    HeadDom
  },
  methods:{
    ...mapMutations(["getUser"]),
    //pwd  text
    changeType(){
      this.flag=!this.flag;
      this.typeD=this.flag ? "password" : 'text';
    },
    //登录
    denglu(){
      let username=this.username;
      let userpwd=this.userpwd;
      if(!username.trim() || !userpwd.trim()){
        alert("用户或密码不能为空")
      }else{
         axios.post("/userList",{username,userpwd}).then(({data})=>{
           if(data.code===0){
              alert(data.msg)
           }else{
              localStorage.token=JSON.stringify(data.data);
              this.$router.push({path:"/home"})
           }
         })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loginD-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .loginD-main{
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
  font-size: 25px;
  line-height: 50px;
}

</style>