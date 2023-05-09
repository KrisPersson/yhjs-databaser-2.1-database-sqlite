const { insertBook, query } = require('../model')


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


module.exports = { addNewBookCtrl, searchBooksCtrl }
