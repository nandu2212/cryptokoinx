const mongoose=require('mongoose')

const accountschema= mongoose.Schema(
    {
        id:{
            type:String
        },
        Balance:{
            type:Number,
            require:true
        },
        Etereumprice:{
            type:Number,
            required:true
        }
    }
)
module.exports=mongoose.model('accountdetail',accountschema)