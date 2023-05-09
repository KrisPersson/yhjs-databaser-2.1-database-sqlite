const { Router } = require('express')
const router = Router()
const { addNewBookCtrl, searchBooksCtrl } = require('../controllers/books.controller')
const { checkInsertBook, checkSearchBook } = require('../middlewares/books.middleware')

router.get('/', checkSearchBook, searchBooksCtrl)
router.post('/', checkInsertBook, addNewBookCtrl)

module.exports = { booksRouter: router }
