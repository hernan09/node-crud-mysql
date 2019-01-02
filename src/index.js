const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql')
const myConection = require('express-myconnection')
const newsRouter = require('./routes/news')
const bodyParser = require('body-parser')
    //setting
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

//midleware
app.use(morgan('dev'))

app.use(myConection(mysql, {
    host: "localhost",
    user: "root",
    port: 3306,
    database: "mysql"

}, 'single'))

app.use(bodyParser.urlencoded({ extended: false }))



//import rutas
app.use('/', newsRouter)
    // archivos estaticos

app.use(express.static(path.join(__dirname, 'public')))



app.listen(app.get('port'), (err) => {

    if (err) console.log(`${err}`)

    console.log(`server runing in http://localhost:3000`)
})