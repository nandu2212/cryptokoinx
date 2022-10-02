const axios=require('axios')
const etfunction=()=>{   
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp;vs_currencies=inr').then(
     res =>{
     return res.data.ethereum.inr
  }
  )
    }
    module.exports=etfunction