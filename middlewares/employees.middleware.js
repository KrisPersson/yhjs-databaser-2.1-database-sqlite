const Joi = require('joi');

const insertEmployeeBodySchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    store_ID: Joi.number().required() 
})
const searchEmployeeHeadersSchema = Joi.object({
    ID: Joi.number(),
    name: Joi.string().min(0).max(100),
    store_ID: Joi.number()
})

const removeEmployeeBodySchema = Joi.object({
    ID: Joi.number().required() 
})

const editEmployeeBodySchema = Joi.object({
    ID: Joi.number().required(),
    store_ID: Joi.number().required() 
})

async function checkInsertEmployee(request, response, next) {
    const validation = insertEmployeeBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkSearchEmployee(request, response, next) {
    const validation = searchEmployeeHeadersSchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkRemoveEmployee(request, response, next) {
    const validation = removeEmployeeBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkEditEmployee(request, response, next) {
    const validation = editEmployeeBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

module.exports = { checkInsertEmployee, checkSearchEmployee, checkRemoveEmployee, checkEditEmployee }
