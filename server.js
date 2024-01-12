
// import express
const express = require ('express');

// instance express
const app = express()

// route home
app.get("/home",(req,res)=>{
    res.send('Home Page')
    
})

//middleware
const Datee = require('./middleware/Date')
app.use(Datee)

// app use css
app.use(express.static(__dirname+ '/public'))

// route about
app.get("/about",(req,res)=>{
    res.send('About Page')
})
// route file index
app.get('/home2' , (req,res)=>{
    res.sendFile(__dirname+ '/public/home.html')
})
// route file about
app.get('/about2' , (req,res)=>{
    res.sendFile(__dirname+ '/public/contact.html')
})
// __dirname
console.log(__dirname)
console.log(__dirname+ '/public/home.html')

//route for wrong path

app.get('*' , (req,res)=>{
    res.send('Ressource Not Found')
})
    // port
    const port = 5001 ;

    // create server
    app.listen(port, err => {
        err ? console.log(err) : console.log(`server is running on port ${port}`)    })
