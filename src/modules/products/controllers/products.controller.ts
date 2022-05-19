import { Request, Response } from 'express';
import {
    CreateProductService,
    ListProductService,
    UpdateProductService,
    DeleteProductService,
    ShowProductService,
} from '../services';

class ProductController {
    public index(request: Request, response: Response) {
        const products = new ListProductService();
        return response.status(200).json(products);
    }

    public show(request: Request, response: Response) {
        const { id } = request.params;
        const product = new ShowProductService({ id });
        return response.status(200).json(product);
    }

    public create(request: Request, response: Response) {
        const { name, price, quantity } = request.body;
        const product = new CreateProductService({ name, price, quantity });
        return response.status(201).json(product);
    }

    public update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, price, quantity } = request.body;

        const productChanges = {
            id,
            data: {
                name,
                price,
                quantity,
            },
        };

        const product = new UpdateProductService(productChanges);
        return response.status(200).json(product);
    }

    public delete(request: Request, response: Response) {
        const { id } = request.params;
        new DeleteProductService({ id });
        return response.status(200).send();
    }
}

export { ProductController };
