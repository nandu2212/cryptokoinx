const express=require('express');
const app=express()
const axios=require('axios');

const accountmodel=require('../models/account')
const prices=require('../models/pricemodel')
const txs=require('../models/transactionmodel')


app.get('/getdetails',async(req,res)=>{
  let  Address=req.query.address
function valuecalculation(data){
    let balance=0;
    for(let i=0;i<data.length;i++){
if(Address===data[i].to){
    balance+=parseInt(data[i].value)
}if(Address===data[i].from){
    balance-=parseInt(data[i].from)
}
    }
    return balance
}
const ethcost=await prices.find()
// console.log(prices.find)
const accounttxs=txs.find({id:Address})
console.log(ethcost[ethcost.length-1].Etherumcost)
let accbalance=0
if(accounttxs.length){
accbalance=valuecalculation(accounttxs)
accbalance=accbalance/Math.pow(10,18);
accbalance.toFixed(7);
// console.log(accbalance)
res.send(({balance:accbalance,Etereumprice:ethcost}))
accountmodel.create({id:Address, Balance:accbalance,Etereumprice:ethcost[ethcost.length-1].Etherumcost})
}else{
    res.send(({balance:accbalance,etherumcost:ethcost[ethcost.length-1].Etherumcost}))
    accountmodel.create({id:Address, Balance:accbalance,Etereumprice:ethcost[ethcost.length-1].Etherumcost})
}
})

module.exports=app