//Diego Fernando Montaño Pérez A01282875

const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.get("/",(req,res)=>{
    res.send("You are on the homepage");
    console.log("You are on the homepage");
})

app.post("/post", (req,res)=>{
    res.send(`Welcome  ${req.body.user} `);
})

app.delete("/delete", (req,res)=>{
    res.json({
        delete: true
    });
})

app.put("/put/:id",(req,res)=>{
    var  id = req.params.id;
    res.send(`Task ${id} has been updated`);
})

app.listen(5000,()=>{
    console.log("Server Port: ",PORT);
});