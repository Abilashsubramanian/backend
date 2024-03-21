const mongoose=require("mongoose")

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    id:{
        type:String
    },
    mobile:{
        type:Number
    }
})
const studentModel=mongoose.model("student",studentSchema)
module.exports={studentModel}