const Joi = require('joi');

const insertStoreBodySchema = Joi.object({
    location: Joi.string().min(1).max(100).required() 
})
const searchStoreHeaderSchema = Joi.object({
    location: Joi.string().min(0).max(100)
})

const removeStoreBodySchema = Joi.object({
    ID: Joi.number().required() 
})

const editStoreBodySchema = Joi.object({
    ID: Joi.number().required(),
    location: Joi.string().min(1).max(100).required() 
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
    const validation = searchStoreHeaderSchema.validate(input);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkRemoveStore(request, response, next) {
    const validation = removeStoreBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

async function checkEditStore(request, response, next) {
    const validation = editStoreBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: validation.error.message })
    }
}

module.exports = { checkInsertStore, checkSearchStores, checkRemoveStore, checkEditStore }
