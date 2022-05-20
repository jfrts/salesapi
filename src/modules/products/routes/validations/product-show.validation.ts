import { celebrate, Joi, Segments } from 'celebrate';

export const productShowValidation = celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
});
