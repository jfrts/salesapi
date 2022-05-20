import { AppError } from '@/shared/errors/AppError';
import { ProductRepository } from '../typeorm/repositories/product.repository';

interface IRequest {
    id: string;

    data: {
        name: string;
        price: number;
        quantity: number;
    };
}

export class UpdateProductService {
    public async execute({ id, data: { name, price, quantity } }: IRequest) {
        const productExists = await ProductRepository.findByName(name);

        if (productExists) {
            const promise = Promise.reject(
                new AppError(400, 'Already exists one product with this name.'),
            );
            return promise.catch(error => error);
        }

        const product = await ProductRepository.update(id, {
            name,
            price,
            quantity,
        });
        return product;
    }
}
