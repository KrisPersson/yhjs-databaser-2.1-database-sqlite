const { insertEmployee, query, remove, update } = require('../model')


async function addNewEmployeeCtrl(request, response) {
    try {
        const { store_ID, name } = request.body
        await insertEmployee(store_ID, name)
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

async function removeEmployeeCtrl(request, response) {
    try {
        const { ID } = request.body
        await remove("employees", ID)
        response.json({ success: true, message: 'Employee successfully deleted!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}

async function editEmployeeCtrl(request, response) {
    try {
        const { ID, store_ID } = request.body
        await update("employees", "store_ID", store_ID, ID)
        response.json({ success: true, message: 'Employee successfully edited!' })
    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}


module.exports = { addNewEmployeeCtrl, searchEmployeesCtrl, removeEmployeeCtrl, editEmployeeCtrl }
