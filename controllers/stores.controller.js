const { insertStore, query, remove, update } = require('../model')


async function addNewStoreCtrl(request, response) {
    try {
        const { location } = request.body
        await insertStore(location)
        response.json({ success: true, message: 'New store added successfully!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function searchStoresCtrl(request, response) {
    try {
        const { location } = request.headers
        const searchResult = await query("stores", "location", location)
        response.json({ success: true, searchResult })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function removeStoreCtrl(request, response) {
    try {
        const { ID } = request.body
        await remove("stores", ID)
        response.json({ success: true, message: 'Store successfully deleted!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function editStoreCtrl(request, response) {
    try {
        const { ID, location } = request.body
        await update("stores", "location", location, ID)
        response.json({ success: true, message: 'Store successfully edited!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

module.exports = { addNewStoreCtrl, searchStoresCtrl, removeStoreCtrl, editStoreCtrl }
