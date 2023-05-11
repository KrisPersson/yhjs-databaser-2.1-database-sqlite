const { insertBook, query, remove, update } = require('../model')


async function addNewBookCtrl(request, response) {
    try {
        const { title, author, price } = request.body
        await insertBook(title, author, price)
        response.json({ success: true, message: 'New book added successfully!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function searchBooksCtrl(request, response) {
    try {
        const { attr, value } = request.headers
        const searchResult = await query("books", attr, value)
        response.json({ success: true, searchResult })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function removeBookCtrl(request, response) {
    try {
        const { ID } = request.body
        await remove("books", ID)
        response.json({ success: true, message: 'Book successfully deleted!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function editBookCtrl(request, response) {
    try {
        const { ID, price } = request.body
        await update("books", "price", price, ID)
        response.json({ success: true, message: 'Book successfully edited!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}


module.exports = { addNewBookCtrl, searchBooksCtrl, removeBookCtrl, editBookCtrl }
