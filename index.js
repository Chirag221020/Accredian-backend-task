const express = require("express")
const cors = require("cors")
const router = require("./route")
const app = express();
PORT = 8000;

app.use(express.json())
app.use(cors())
app.use("/api/refer", router)
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, ()=>{
console.log("server created")
})