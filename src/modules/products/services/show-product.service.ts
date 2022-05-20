import { AppError } from '@/shared/errors/AppError';
import { Product } from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/product.repository';

interface IRequest {
    id: string;
}

export class ShowProductService {
    public async execute({ id }: IRequest): Promise<Product> {
        const product = await ProductRepository.findOne({
            where: { id },
        });

        if (!product) {
            const promise = Promise.reject(
                new AppError(400, 'Product was not found.'),
            );
            return promise.catch(error => error);
        }

        return product;
    }
}
