const { insertStore } = require('../model')


async function addNewStoreCtrl(request, response) {
    try {
        const { location } = request.body
        await insertStore(location)
        response.json({ success: true, message: 'New store added successfully!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}


module.exports = { addNewStoreCtrl }
