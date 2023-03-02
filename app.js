const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.use('/static',express.static('public'))

const port = 4000;

app.get( '/' , ( req , res ) =>{
    res.render('index')

})



app.listen(port , ( req , res) =>{
    console.log(`webiste goes on the port ${port}`)
})