const mongoose = require('mongoose')

const URL = 'mongodb+srv://admin:admin@cluster0.2qwq1b9.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})

