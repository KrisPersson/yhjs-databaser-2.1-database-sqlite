const Joi = require('joi');

const insertStoreBodySchema = Joi.object({
    location: Joi.string().min(3).max(100).required() 
})

async function checkInsertStore(request, response, next) {
    const validation = insertStoreBodySchema.validate(request.body);
    if (!validation.error) {
        next()
    } else {
        response.status(400).json({ success: false, message: error.message })
    }
}

module.exports = { checkInsertStore }
