const Joi = require('joi');

const insertStoreBodySchema = Joi.object({
    location: Joi.string().min(3).max(100).required() 
})

async function checkInsertStore(request, response, next) {
    const validation = insertStoreBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkSearchStores(request, response, next) {
    const input = { location: request.headers.location }
    const validation = insertStoreBodySchema.validate(input);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

module.exports = { checkInsertStore, checkSearchStores }
