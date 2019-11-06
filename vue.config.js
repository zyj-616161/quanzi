
let useList=require('./src/mock/userList.json')
let dataList=require("./src/mock/list.json")
let bodyParser=require("body-parser")
module.exports={
    devServer:{
        before(app){
            //请求数据
            app.get("/getList",(req,res)=>{
                res.send(dataList)
            })
            //登录判断
            app.post('/userList',bodyParser.json(),(req,res)=>{
                let {username,userpwd}=req.body;
                let obj=useList.find(v=>v.user===username);
                if(obj){
                   if(obj.pwd===userpwd){
                    res.send({code:1,msg:"登录成功",data:obj})
                   }else{
                    res.send({code:0,msg:"密码错误"})
                   }
                }else{
                    res.send({code:0,msg:"用户不存在"})
                }
            })
        }
    }
}