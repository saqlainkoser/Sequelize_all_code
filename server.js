const express=require("express")
const app=express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const db = require("./db.config")

//creating table if not exists
db.sequelize.sync()

app.get("/",(req,res)=>{
    res.send("Hello World")
})

const Controller = require('./customer.controller')

app.post("/create/new",(req,res)=>{
  Controller.createCustomers(req,res)
})

app.get("/get/all",(req,res)=>{
  Controller.findAllCustomers(req,res)
})

app.get('/customer/:email',(req,res)=>{
  Controller.findCustomersByEmail(req,res);
})

app.put('/customer/update',(req,res)=>{
  Controller.updateCustomers(req,res);
})

app.delete('/customer/delete/:email',(req,res)=>{
  Controller.deleteCustomers(req,res);
})


app.listen(3000,()=>{
    console.log("Se`rver is running on port http://localhost:3000")
})