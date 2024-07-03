const { app } = require(".");
const { connectDb } = require("./config/db");

const PORT=8454;
app.listen(PORT,async ()=>{
    await connectDb()
    console.log("ecommerce api listing on port ",PORT)
})