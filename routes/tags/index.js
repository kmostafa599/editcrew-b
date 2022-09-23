const express = require('express')
const qs = require('qs');
var axios = require('axios');

const router = express.Router()

const postTags = async (id, tag) => {
    let data = qs.stringify({
        "tags[0]": `${tag}`
    })
    var config = {
        method: 'post',
        url: `https://editcrew.spp.io/api/v1/orders/${id}`,
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
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
const {addTags}= require('../../controllers/tags')
router.post('/:order_id',addTags)
module.exports = router