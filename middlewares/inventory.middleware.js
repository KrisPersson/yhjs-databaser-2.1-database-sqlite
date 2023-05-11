const Joi = require('joi');

const insertInventoryBodySchema = Joi.object({
    store_ID: Joi.number().required(), 
    book_ID: Joi.number().required(), 
    quantity: Joi.number().required()
})

const searchInventoryHeadersSchema = Joi.object({
    store_ID: Joi.number().allow(""),
    book_ID: Joi.number().allow("")
})

const editInventoryBodySchema = Joi.object({
    store_ID: Joi.number().required(), 
    book_ID: Joi.number().required(), 
    quantity: Joi.number().required()
})
const removeInventoryBodySchema = Joi.object({
    store_ID: Joi.number().required(), 
    book_ID: Joi.number().required()
})

async function checkInsertInventory(request, response, next) {
    const validation = insertInventoryBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkSearchInventory(request, response, next) {
    const input = { store_ID: request.headers.store_id, book_ID: request.headers.book_id }
    const validation = searchInventoryHeadersSchema.validate(input);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkEditInventory(request, response, next) {
    const validation = editInventoryBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkRemoveInventory(request, response, next) {
    const validation = removeInventoryBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

module.exports = { checkInsertInventory, checkSearchInventory, checkEditInventory, checkRemoveInventory }
