const mongoose=require('mongoose')
const { stringToHex } = require('web3-utils')

const transactionschema=mongoose.Schema(
{
transactiondetail:{
    type:Array
}
}
)
module.exports=mongoose.model('txs',transactionschema)