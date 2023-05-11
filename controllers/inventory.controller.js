const { insertInventory, queryInventory, updateInventory, removeInventory } = require('../model')


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
        const input = { store_ID: request.headers.store_id, book_ID: request.headers.book_id }
        const searchResult = await queryInventory(input.store_ID, input.book_ID)
        response.json({ success: true, searchResult })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function editInventoryCtrl(request, response) {
    try {
        const { store_ID, book_ID, quantity } = request.body
        await updateInventory(store_ID, book_ID, quantity)
        response.json({ success: true, message: 'Inventory updated successfully!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function removeInventoryCtrl(request, response) {
    try {
        const { store_ID, book_ID } = request.body
        await removeInventory(store_ID, book_ID)
        response.json({ success: true, message: 'Inventory removed successfully!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}


module.exports = { addNewInventoryCtrl, searchInventoryCtrl, editInventoryCtrl, removeInventoryCtrl }
