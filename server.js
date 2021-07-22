const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")

mongoose.connect('mongodb://localhost:27017/mern', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log("Database connected!")
})

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.use('/api/user', userRouter)
app.use('/api', authRouter)

app.get('*', (req, res) => {
    res.send("404 Page not found")
})