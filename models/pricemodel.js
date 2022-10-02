const mongoose=require('mongoose')
const { stringToHex } = require('web3-utils')

const PriceSchema=mongoose.Schema(
 { Etherumcost:{
        type:Number,
       required:true
    },
time:{
    type:String,
    required:true
}}
)
module.exports=mongoose.model('Price',PriceSchema)