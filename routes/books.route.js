const { Router } = require('express')
const router = Router()
const { addNewBookCtrl, searchBooksCtrl, removeBookCtrl, editBookCtrl } = require('../controllers/books.controller')
const { checkInsertBook, checkSearchBook, checkRemoveBook, checkEditBook } = require('../middlewares/books.middleware')

router.get('/', checkSearchBook, searchBooksCtrl)
router.post('/', checkInsertBook, addNewBookCtrl)
router.delete('/', checkRemoveBook, removeBookCtrl)
router.put('/', checkEditBook, editBookCtrl)


module.exports = { booksRouter: router }
