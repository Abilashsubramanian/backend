const mongoose=require('mongoose')

const url="mongodb://127.0.0.1:27017/mongooseM5"

const dbConnect=async()=>{
    try {
        await mongoose.connect(url)
        console.log('database is connected')

    }
    catch(error)
    {
        console.log("something went wrong",error)
    }
}
module.exports={dbConnect}