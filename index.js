const express = require('express')
const app = express()
app.use(express.json())

//Addition
app.get('/Add',(req,res)=>{
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)){
        res.status(400).send({error:"Input is not an number"})
    }
    let sum = num1 + num2
    res.status(200).send({"Addition": sum})

})


//Multiple Addition
app.get('/MultipleAdd',(req,res)=>{
    let num = req.body.num
    let sum = 0
    for(let i=0;i<num.length;i++){
        if(isNaN(num[i])){
            req.status(400).send({Error:"Input is not an number/list of number"})
        }
        else{
            sum += Number(num[i])
        }
    }
    req.status(200).send({"Addition":sum})
})


//Subtraction
app.get('/Subtract',(req,res)=>{
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)){
        res.status(400).send({error:"Input is not an number"})
    }
    let diff = num1 - num2
    res.status(200).send({"Subtraction": diff})

})


//Division
app.get('/Div',(req,res)=>{
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)){
        res.status(400).send({error:"Input is not an number"})
    }
    if(num2 == 0){
        res.status(400).send({error:"divided by zero error"})
    }
    let diff = num1/num2
    res.status(200).send({"Subtraction": diff})
})


//Multiplication
app.get('/Multiplication',(req,res)=>{
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)){
        res.status(400).send({error:"Input is not an number"})
    }
    let multi = num1 * num2
    res.status(200).send({"Multiplication": multi})

})


//Multiple Multiplication
app.get('/MultipleMultiplication',(req,res)=>{
    let num = req.body.num
    let multi = 0
    for(let i=0;i<num.length;i++){
        if(isNaN(num[i])){
            req.status(400).send({Error:"Input is not an number/list of number"})
        }
        else{
            sum *= Number(num[i])
        }
    }
    req.status(200).send({"Multiplication":multi})
})


//Socket

app.listen(3456,()=>{
    console.log("Server is listening at port 3456")
})