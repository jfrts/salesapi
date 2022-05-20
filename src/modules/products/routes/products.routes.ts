import { Router } from 'express';
import { ProductController } from '../controllers/products.controller';
import {
    productShowValidation,
    productCreateValidation,
    productUpdateValidation,
    productDeleteValidation,
} from './validations';

export const productsRouter = Router();
const productController = new ProductController();

productsRouter.get('/', productController.index);
productsRouter.get('/:id', productShowValidation, productController.show);
productsRouter.post('/', productCreateValidation, productController.create);
productsRouter.put('/:id', productUpdateValidation, productController.update);
productsRouter.delete(
    '/:id',
    productDeleteValidation,
    productController.delete,
);
