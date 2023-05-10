const { Router } = require('express')
const router = Router()
const { addNewStoreCtrl, searchStoresCtrl } = require('../controllers/stores.controller')
const { checkInsertStore, checkSearchStores } = require('../middlewares/stores.middleware')

router.post('/', checkInsertStore, addNewStoreCtrl)
router.get('/', checkSearchStores, searchStoresCtrl)

module.exports = { storeRouter: router }
