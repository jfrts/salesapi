import { celebrate, Joi, Segments } from 'celebrate';

export const productCreateValidation = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required(),
    },
});
