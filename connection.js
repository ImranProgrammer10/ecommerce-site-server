require('dotenv').config();
const mongoose =require('mongoose');

const connectionStr = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9ja6no.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionStr,{useNewUrlParser:true})
.then(()=>console.log('connected to momngod'))
.catch(err=>console.log(err))
 

mongoose.connection.on('error',err=>{
    console.log(err)
})