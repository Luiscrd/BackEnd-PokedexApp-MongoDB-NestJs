import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({

    MONGODB: Joi.required(),
    PORT: Joi.number().default(3000),
    DEFAUL_LIMIT: Joi.number().default(20)

})