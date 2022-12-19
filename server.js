const express = require("express")
const path = require("path")

let initialPath = path.join(__dirname,"public")

let app= express()
app.use(express.static(initialPath))

app.get("/",(req,res)=>{
    res.sendFile(path.join(initialPath,"index.html"))
})
const port = 3333
app.listen(port,()=>{
    console.log(`server start up on port ${port}`)
})