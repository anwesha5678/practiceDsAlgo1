const express = require('express');
const app = express();
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const fs = require('fs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(app.router);
let port = 3800



// let db = sequelize
// let userModel = db.model('user')
require('dotenv').config()



let myserver = http.createServer(app)
myserver.listen(port)




function removeSpaces(str) {
    str = str.toString()
    var count = 0;
    var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var finalString = punctuationless.replace(/\s{2,}/g," ");
    for (var i = 0; i < finalString.length; i++)
        if (finalString[i] !== " ") finalString[count++] = finalString[i];


    return count;
}

app.get('/get-data', async (req, res) => {
    //let string = req.params['strings']
    let data = {
        "name":"anwesha chakraborty",
        "age":28
    }
    res.json({
        success: true,
        code: 200,
        data
    })
})


app.get('/get-data-check', async (req, res) => {
    //let string = req.params['strings']
    
    res.send(`Express Demo`)
})

app.post('/get-string', async (req, res) => {
    //let string = req.params['strings']
    let string = req.body.strings
    string = string.split("");
    let i = removeSpaces(string);
    let stringss = string.join("").substring(0, i)
    let array_lengths = {};
    for (let i = 0; i < stringss.length; i++) {
        value = stringss[i];
        if (value in array_lengths) {
            array_lengths[value]++;
        } else {
            array_lengths[value] = 1;
        }
    }
    res.json({
        success: true,
        code: 200,
        array_lengths
    })
})

//module.exports = router