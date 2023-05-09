const { Router } = require('express')
const router = Router()
const { addNewInventoryCtrl } = require('../controllers/inventory.controller')
const { checkInsertInventory} = require('../middlewares/inventory.middleware')


router.post('/', checkInsertInventory, addNewInventoryCtrl)

module.exports = { inventoryRouter: router }
