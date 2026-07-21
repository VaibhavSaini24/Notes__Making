require('./src/dotenv').config();
const  mongose =  reuire('mongoose');


async function connectDb (){

    try{
       await mongoose.connect(process.env.MONGO_URI,()=>{
            console.log("Connected to the database")
        })

    }
    catch(err){
      console.log(err);
    }
    
}


module.exports = connectDb;