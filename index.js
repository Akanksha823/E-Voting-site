const express = require('express')
const app = express()

const port = 3000;

app.use(express.static(__dirname + '/public'))
console.log(__dirname)
app.get('/', (req, res) => {
    res.send("hello about page")
})




app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
})  
