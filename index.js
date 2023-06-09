const express = require('express')
const app = express()
app.use(express.json())

// function countvowel(str){
//     str = str.toLowerCase();
//     const v = ["a","e","i","o","u"];

//     let count = 0;

//     for(let i=0;i<str.length;i++){
//         if(v.includes(v[i])){
//             count++;
//         }
//     }
//     return count;
// }
// function Add(a,b){
//     return a+b
// }

// function Add(arr){
//     let sum = 0
//     for(let i =0;i<arr.length;i++){
//         sum += arr[i]
//     }
//     return sum
// }

// app.get('/countvowel', (req,res)=>{
//     let string = req.body.abc
//     console.log(req.body.abc)
//     let vowels = countvowel(string)
//     res.send({"out":vowels})
// })

// app.get('/Add',(req,res)=>{
//     let in1 = parseInt(req.body.inp1)
//     let in2 = parseInt(req.body.inp2)
//     let sum = Add(in1,in2)
//     res.send({"Sum" : sum})
// })

// app.get('/Add',(req,res)=>{
//     let input = req.body.array
//     let Out = Add(input)
//     res.send({"Sum" : Out})
// })

//  using query

// app.get('/add',(req,res)=>{
//     let num = JSON.parse(req.query.num1)
//     let sum = 0
//     for (let i=0;i<num.length;i++){
//         sum += num[i]
//     }
//     console.log("Sum =",sum)
//     res.send({sum})
// })

app.get('/add',(req,res)=>{
    let num1 = req.query.num1
    let num = num1.split(",")
    let sum = 0
    for (let i=0;i<num.length;i++){
        sum += Number(num[i])
    }
    console.log("Sum =",sum)
    res.send({sum})
})


app.listen(3456, ()=>{
    console.log("Started Listening")
})
