var axios = require('axios');
// const qs = require('qs');

const fetchAllOrders = async () => {

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

const fetchOrder = async (id) => {
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
const getAllOrders = async (req, res) => {

    const data = await fetchAllOrders();
    console.log(data)
    res.json(data)

}
const getOrder = async (req, res) => {
    const { order_id } = req.params
    console.log(order_id)
    const data = await fetchOrder(order_id);
    console.log(data)
    res.json(data)

}
module.exports = {
    getAllOrders, getOrder
  };