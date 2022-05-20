import { celebrate, Joi, Segments } from 'celebrate';

export const productDeleteValidation = celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
});
