const { Router } = require('express')
const router = Router()
const { addNewInventoryCtrl, searchInventoryCtrl, editInventoryCtrl, removeInventoryCtrl } = require('../controllers/inventory.controller')
const { checkInsertInventory, checkSearchInventory, checkEditInventory, checkRemoveInventory} = require('../middlewares/inventory.middleware')


router.post('/', checkInsertInventory, addNewInventoryCtrl)
router.get('/', checkSearchInventory, searchInventoryCtrl)
router.delete('/', checkRemoveInventory, removeInventoryCtrl)
router.put('/', checkEditInventory, editInventoryCtrl)


module.exports = { inventoryRouter: router }
