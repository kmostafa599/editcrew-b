const express = require('express')

const router = express.Router()

// var https = require('follow-redirects').https;
// var fs = require('fs');

var axios = require('axios');
const qs = require('qs')


const addTags = async (id, tag) => {
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

router.post('/:order_id', async (req, res) => {
  const { order_id } = req.params
  const { tag } = req.body
  const data = await addTags(order_id, tag);
  console.log(data)
  res.json(data)
})

module.exports = router;