const express=require('express')
const cors=require('cors');
const router = require('./router/gameRouter');
const path=require("path")

const app=express()
app.use(cors())


const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server are running on ${PORT}`);
})



app.use('/',router)
// app.use('/numbers',router)
// app.use('/colors',router)
// app.use('/animals',router)

app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});