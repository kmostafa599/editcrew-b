const qs = require('qs');
var axios = require('axios');


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

const addTags = async (req, res) => {
    const { order_id } = req.params
    console.log(order_id)
    const { tag } = req.body
    console.log(tag)
    const data = await postTags(order_id, tag);
    console.log(data)
    res.json(data)
}
module.exports = {
    addTags
};