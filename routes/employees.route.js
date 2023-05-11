const { Router } = require('express')
const router = Router()
const { addNewEmployeeCtrl, searchEmployeesCtrl, removeEmployeeCtrl, editEmployeeCtrl } = require('../controllers/employees.controller')
const { checkInsertEmployee, checkSearchEmployee, checkRemoveEmployee, checkEditEmployee } = require('../middlewares/employees.middleware')


router.post('/', checkInsertEmployee, addNewEmployeeCtrl)
router.get('/', checkSearchEmployee, searchEmployeesCtrl)
router.delete('/', checkRemoveEmployee, removeEmployeeCtrl)
router.put('/', checkEditEmployee, editEmployeeCtrl)



module.exports = { employeesRouter: router }
