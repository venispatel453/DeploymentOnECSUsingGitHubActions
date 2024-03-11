const express = require('express')
const app = express()

const PORT = process.env.PORT || 8000

app.get('/',(req,res)=>{
    return res.json({message:'Hi Venis, I am running from ECS'})
})

app.listen(PORT,() => console.log(`Server Started or Port ${PORT}`))
