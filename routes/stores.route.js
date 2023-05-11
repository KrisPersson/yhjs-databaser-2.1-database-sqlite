const { Router } = require('express')
const router = Router()
const { addNewStoreCtrl, searchStoresCtrl, removeStoreCtrl, editStoreCtrl } = require('../controllers/stores.controller')
const { checkInsertStore, checkSearchStores, checkRemoveStore, checkEditStore } = require('../middlewares/stores.middleware')

router.post('/', checkInsertStore, addNewStoreCtrl)
router.get('/', checkSearchStores, searchStoresCtrl)
router.delete('/', checkRemoveStore, removeStoreCtrl)
router.put('/', checkEditStore, editStoreCtrl)



module.exports = { storeRouter: router }
