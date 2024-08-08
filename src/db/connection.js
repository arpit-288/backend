const mongoose = require('mongoose');
const env = require('dotenv');

env.config({
    path:'./env'
})



async function connection(){
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected to database...");
}).catch(()=>{
    console.log("Server side error");
})
}

export default connection;