//import exress
const express = require('express')

//create new instance of an expres application object
//'new' keyword is not used in js
const app = express()

//event handler for http req.
let hello = (req,res) => {
    res.writeHead(200)
    res.write('Hello World');
    res.end()
}

//Create handler for /goodbye url
let goodbye = (req,res)=>{
    res.writeHead(200)
    res.write('GoodBye World')
    res.end()
}

//map all req to hello var
app.use('/hello', hello)

//map all req to goodbye var
app.use('/goodbye', goodbye)

//Handler for root (home) page
let index = (req,res) => {

    //if url is not the root, show 404
    if(req.url !== '/'){
        res.writeHead(404)
        res.write("Resource not found")
        res.end()
    }
    else{
        res.writeHead(200)
        res.write('Welcome to our first Express Site');
        res.end()
    }

}

//map root page
app.use('/',index)

//Start express server on port 3000
app.listen(3000)
console.log("Express running on port 3000")