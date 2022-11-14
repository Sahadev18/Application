let express = require('express')
let path = require('path')
let app = express()
let  args = require('minimist')(process.argv.slice(2));

app.use(express.static(path.join(__dirname+'/')))

let file

app.get('/',(req,res) => {
    file = path.join(__dirname+'/home.html')
    res.sendFile(file)
})
app.get('/project.html',(req,res) => {
    file = path.join(__dirname+'/project.html')
    res.sendFile(file)
})
app.get('/home.html',(req,res) => {
    file = path.join(__dirname+'/home.html')
    res.sendFile(file)
})
app.get('/registration.html',(req,res) => {
    file = path.join(__dirname+'/registration.html')
    res.sendFile(file)
})

app.listen(args.port)