require('dotenv').config();
const app = require('./app');
const connectDb = require('./src/db/db')

connectDb();


app.listen(process.env.PORT,()=>{
    console.log("server is running")
})

