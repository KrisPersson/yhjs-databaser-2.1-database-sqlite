const { Router } = require('express')
const router = Router()
const { addNewEmployeeCtrl } = require('../controllers/employees.controller')
const { checkInsertEmployee } = require('../middlewares/employees.middleware')


router.post('/', checkInsertEmployee, addNewEmployeeCtrl)

module.exports = { employeesRouter: router }
