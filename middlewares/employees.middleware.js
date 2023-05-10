const Joi = require('joi');

const insertEmployeeBodySchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
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

module.exports = { checkInsertEmployee }
