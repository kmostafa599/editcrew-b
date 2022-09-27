require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const rateLimit = require('express-rate-limit')
var axios = require('axios');

const orders = require('./routes/orders')
const users = require('./routes/users')
const tags  = require('./routes/tags')
const { allowedOrigins } = require('./config')
app.use(express.json())

const allowed = allowedOrigins

const corsOptions = {
    origin: (origin, callback) => {
        if ( allowed.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not Allowed"))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// const limiter = rateLimit({
//     windowMs: 1000,
//     max: 1,
// })
// app.use(limiter)


app.use('/api/orders', orders)
app.use('/api/users', users)
app.use('/api/add_tag', tags)

app.get('/:data', (req, res) => {
    const { data } = req.params
    res.json({ message: data })
})

app.listen()
