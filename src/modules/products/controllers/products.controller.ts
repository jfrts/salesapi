import { Request, Response } from 'express';
import {
    CreateProductService,
    ListProductService,
    UpdateProductService,
    DeleteProductService,
    ShowProductService,
} from '../services';

class ProductController {
    public async index(request: Request, response: Response) {
        const products = await new ListProductService().execute();
        return response.status(200).json(products);
    }

    public async show(request: Request, response: Response) {
        const { id } = request.params;
        const product = await new ShowProductService().execute({ id });
        return response.status(200).json(product);
    }

    public async create(request: Request, response: Response) {
        const { name, price, quantity } = request.body;
        const product = await new CreateProductService().execute({
            name,
            price,
            quantity,
        });
        return response.status(201).json(product);
    }

    public async update(request: Request, response: Response) {
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

        const product = await new UpdateProductService().execute(
            productChanges,
        );
        return response.status(200).json(product);
    }

    public async delete(request: Request, response: Response) {
        const { id } = request.params;
        await new DeleteProductService().execute({ id });
        return response.status(200).send();
    }
}

export { ProductController };
