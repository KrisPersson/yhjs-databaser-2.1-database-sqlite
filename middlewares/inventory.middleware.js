const Joi = require('joi');

const insertInventoryBodySchema = Joi.object({
    store_ID: Joi.number().required(), 
    book_ID: Joi.number().required(), 
    quantity: Joi.number().required()
})

async function checkInsertInventory(request, response, next) {
    const validation = insertInventoryBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: error.message })
    }
}

module.exports = { checkInsertInventory }
