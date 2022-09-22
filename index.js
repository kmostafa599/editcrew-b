require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const rateLimit = require('express-rate-limit')

const tags = require('./tags')
const orders = require('./orders')

app.use(express.json())

const allowed = ['https://editcrew.spp.io/']

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

const limiter = rateLimit({
    windowMs: 1000,
    max: 1,
})
app.use(limiter)

app.use('/add_tag', tags)
app.use('/orders', orders)

app.get('/:data', (req, res) => {
    const { data } = req.params
    res.json({ message: data })
})

app.listen("8080", () => {
    console.log("Port 8080")
})
