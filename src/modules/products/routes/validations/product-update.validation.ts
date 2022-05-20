import { celebrate, Joi, Segments } from 'celebrate';

export const productUpdateValidation = celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required(),
    },
});
