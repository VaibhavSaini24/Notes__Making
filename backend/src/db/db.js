const mongoose = require('mongoose');


async function ConnectDb(){

try{
    
    await mongoose.connect(process.env.MONGO_URI)
    
    console.log("Connected to Data base")
    
}catch(err){
    console.log("Erron in Connecting with the Database")
}
}


module.exports = ConnectDb;