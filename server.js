const express=require('express')
const app=express();
const web3=require('web3');
const mongoose=require('mongoose');
const axios=require('axios')
// const multer = require("multer")();
const cors = require("cors");

// imported docs
const MODEL=require('./models/pricemodel')
const task1=require('./tasks/task1');
const transactions=require('./models/transactionmodel')
const task3=require('./tasks/task3')
const accmodel=require('./models/account')
//port connection
const port=5003
app.listen(port,()=>console.log("server started"))

//databaseconnection
mongoose.connect("mongodb+srv://insta:insta@instagram.fcb6e.mongodb.net/?retryWrites=true&w=majority").then(()=> {
    console.log("connected to database")
}).catch((err)=> {
    console.log(err)
})

//body parsemiddleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(multer.array());
// app.use(cors());
//task2 
const Cost = () => {axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp;vs_currencies=inr').then(
     res =>{
      MODEL.create({Etherumcost:res.data.ethereum.inr,time:new Date()})
        console.log(res.data.ethereum.inr)
  }
  )}
 setInterval(Cost,600000)

 //task1 
// const ethereumtransaction=()=>{
//     axios.get('https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=GG2R8NBQWBI9PSSNY3Y343FBCU4SB8Z84R').then(
// res =>(
//     console.log(res)
//         ))
// }
// ethereumtransaction()
// $address=$[0xce94e5621a5f7068253c42558c147480f38b5e0d]
// const ethdetail=()=>{

//     axios.get('https://api.etherscan.io/api?module=account&action=txlist&address=0xce94e5621a5f7068253c42558c147480f38b5e0d&startblock=0&endblock=99999page=1&offset=10&sort=asc&apikey=AMSGBHS86XADCKK3DQSW354P2UBCT2TE6A').then(
//         res=>{
//             const arr=res.data.result
//             let balance=0
//             for(let i=0;i<arr.length;i++){
//                 if(arr[i].from==='0xce94e5621a5f7068253c42558c147480f38b5e0d'){
//                 balance-=parseInt(arr[i].value)
//             console.log(arr[i].value)}
//                 if(arr[i].to==='0xce94e5621a5f7068253c42558c147480f38b5e0d'){
//                     balance+=parseInt(arr[i].value)
//                     console.log(arr[i].value)
//                 }
//             }
//           console.log(balance/Math.pow(10,18))
//         }
//     )
// }
// ethdetail()
// middle ware
app.use('/',task1);
app.use('/user',task3)