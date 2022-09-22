const express = require('express')

const router = express.Router()

// var https = require('follow-redirects').https;
// var fs = require('fs');

var axios = require('axios');
const qs = require('qs')

const getAllOrders = async () => {

    var config = {
        method: 'get',
        url: 'https://editcrew.spp.io/api/v1/orders',
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`
        }
    };
    try {
        const response = await axios(config)
        console.log(response)
        return response.data
        // return JSON.stringify(response)
    } catch (error) {
        console.log(error)
    }

}

const getOrder = async (id) => {
    var config = {
        method: 'get',
        url: `https://editcrew.spp.io/api/v1/orders/${id}`,
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`
        }
    };
    try {
        const response = await axios(config)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }

}
router.get('/', async (req, res) => {

    const data = await getAllOrders();
    console.log(data)
    res.json(data)

})
router.get('/:order_id', async (req, res) => {
    const { order_id } = req.params
    console.log(order_id)
    const data = await getOrder(order_id);
    console.log(data)
    res.json(data)

})

module.exports = router