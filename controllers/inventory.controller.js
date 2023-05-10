const { insertInventory, queryInventory } = require('../model')


async function addNewInventoryCtrl(request, response) {
    try {
        const { store_ID, book_ID, quantity } = request.body
        await insertInventory(store_ID, book_ID, quantity)
        response.json({ success: true, message: 'New inventory added successfully!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function searchInventoryCtrl(request, response) {
    try {
        const { store_ID, book_ID } = request.headers
        const searchResult = await queryInventory(store_ID, book_ID)
        response.json({ success: true, searchResult })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}


module.exports = { addNewInventoryCtrl, searchInventoryCtrl }
