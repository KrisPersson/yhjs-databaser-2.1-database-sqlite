const { insertStore, query } = require('../model')


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


module.exports = { addNewStoreCtrl, searchStoresCtrl }
