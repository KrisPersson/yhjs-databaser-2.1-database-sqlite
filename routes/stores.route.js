const { Router } = require('express')
const router = Router()
const { addNewStoreCtrl } = require('../controllers/stores.controller')
const { checkInsertStore } = require('../middlewares/stores.middleware')

router.post('/', checkInsertStore, addNewStoreCtrl)

module.exports = { storeRouter: router }
