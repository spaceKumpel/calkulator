var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser())
app.set('view engine', 'ejs');

app.post('/test1', (req, res)=>{
    const numbr1=parseInt(req.body.num1)
    const numbr2=parseInt(req.body.num2)
    const numbr3=parseInt(req.body.num3)
    const kilometers=parseInt(req.body.kilometers)
    const add1=numbr1+numbr2+numbr3
    
    res.send('ok;' +kilometers*10 )
})

app.listen(3000, ()=>{
    console.log("helooo word??")
})