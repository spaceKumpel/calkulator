import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});
const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  });
  
  const users = await User.findAll();
  
  

var bodyParser = require('body-parser')

var db = require ("./db.json")

var express = require('express')
var app = express()

app.use(bodyParser())
app.set('view engine', 'ejs');

app.get("/",(req, res)=>{
    res.send("sieam")
})
app.get("/auto",(req, res)=>{
    res.json(db)
})
app.get("/auto/auto2",(req, res)=>{
    res.json(db)
})

const fs = require('fs');

app.post("/data",(req, ez)=>{
    const storeData = (data, path) => {
        try {
            fs.writeFileSync(path, JSON.stringify(data))
        } catch (err) {
            console.error(err)
        }
    }
    
    module.exports = storeData;
    ez.json(db)
})

app.post('/test1', (req, res)=>{
    const numbr1=parseInt(req.body.num1)
    const numbr2=parseInt(req.body.num2)
    const add1=numbr1+numbr2
    
    res.send('ok;' +add1)
})

app.get('/form', (req, res)=>{
    res.render('index.ejs')
})
app.listen(3000, ()=>{
    console.log("helooo word??")
})