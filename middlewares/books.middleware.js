const Joi = require('joi');

const insertBookBodySchema = Joi.object({
    title: Joi.string().min(3).max(100).required(), 
    author: Joi.string().min(3).max(100).required(), 
    price: Joi.number().required()
})

const searchBookHeadersSchema = Joi.object({
    attr: Joi.string().min(2).max(30), 
    value: Joi.any() 
})

async function checkInsertBook(request, response, next) {
    const validation = insertBookBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkSearchBook(request, response, next) {
    const input = { attr: request.attr, value: request.value }
    const validation = searchBookHeadersSchema.validate(input);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

module.exports = { checkInsertBook, checkSearchBook }
