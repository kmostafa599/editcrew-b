const express = require('express')

const router = express.Router()

const { getAllOrders, getOrder } = require('../../controllers/orders');

router.get('/', getAllOrders)
router.get('/:order_id', getOrder)

module.exports = router