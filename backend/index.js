const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes/index.js")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", mainRouter);

app.get("/", (req, res)=>{
    res.status(200).json({messege:"Backend working well"})
})


app.listen(3000, ()=>{console.log("Backend Online on port 3000")});