var axios = require('axios');
// const qs = require('qs');

const fetchAllUsers = async () => {

    var config = {
        method: 'get',
        url: 'https://editcrew.spp.io/api/v1/clients',
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
const fetchUser = async (id) => {
    var config = {
        method: 'get',
        url: `https://editcrew.spp.io/api/v1/clients/${id}`,
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

const getAllUsers = async (req, res) => {

    const data = await fetchAllUsers();
    console.log(data)
    res.json(data)

}
const getUser = async (req, res) => {
    const { user_id } = req.params
    console.log(user_id)
    const data = await fetchUser(user_id);
    console.log(data)
    res.json(data)

}
module.exports = {
    getAllUsers, getUser
  };