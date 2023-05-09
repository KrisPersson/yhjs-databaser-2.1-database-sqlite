const { insertEmployee } = require('../model')


async function addNewEmployeeCtrl(request, response) {
    try {
        const { name, store_ID } = request.body
        await insertEmployee(name, store_ID)
        response.json({ success: true, message: 'New employee added successfully!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function searchEmployeesCtrl(request, response) {
    try {
        const { attr, value } = request.headers
        const searchResult = await query("employees", attr, value)
        response.json({ success: true, searchResult })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}


module.exports = { addNewEmployeeCtrl, searchEmployeesCtrl }
