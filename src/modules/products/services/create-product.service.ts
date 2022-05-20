import { AppError } from '@/shared/errors/AppError';
import { Product } from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/product.repository';

interface IRequest {
    name: string;
    price: number;
    quantity: number;
}

export class CreateProductService {
    public async execute({
        name,
        price,
        quantity,
    }: IRequest): Promise<Product> {
        const productExists = await ProductRepository.findByName(name);

        if (productExists) {
            const promise = Promise.reject(
                new AppError(400, 'Already exists one product with this name.'),
            );
            return promise.catch(error => error);
        }

        const product = ProductRepository.create({
            name,
            price,
            quantity,
        });

        await ProductRepository.save(product);
        return product;
    }
}
