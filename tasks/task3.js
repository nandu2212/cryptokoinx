const express=require('express');
const app=express()
const axios=require('axios');

const accountmodel=require('../models/account')
const prices=require('../models/pricemodel')
const txs=require('../models/transactionmodel')


app.get('/getdetails',async(req,res)=>{
    address=req.query.address
function valuecalculation(data){
    let balance=0;
    for(let i=0;i<data.length;i++){
if(address===data[i].to){
    balance+=parseInt(data[i].value)
}if(address===data[i].from){
    balance-=parseInt(data[i].from)
}
    }
    return balance
}
const ethcost=await prices.find()
// console.log(prices.find)
const accounttxs=txs.find({address:req.query.address})
console.log(accounttxs)
console.log(ethcost[ethcost.length-1].Etherumcost)
let accbalance=0
if(accounttxs.length){
accbalance=valuecalculation(accounttxs[0].result)
accbalance=accbalance/Math.pow(10,18);
accbalance.toFixed(7);
console.log(accbalance)
res.send(({balance:accbalance,Etereumprice:ethcost}))
accountmodel.create({id:address, Balance:accbalance,Etereumprice:ethcost[ethcost.length-1].Etherumcost})
}else{
    res.send(({balance:accbalance,etherumcost:ethcost[ethcost.length-1].Etherumcost}))
    accountmodel.create({id:address, Balance:accbalance,Etereumprice:ethcost[ethcost.length-1].Etherumcost})
}
})

module.exports=app