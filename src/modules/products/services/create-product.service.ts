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
            throw new AppError('Already exists one product with this name.');
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
