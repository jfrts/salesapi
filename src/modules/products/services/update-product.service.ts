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

class UpdateProductService {
    public async execute({ id, data: { name, price, quantity } }: IRequest) {
        const productExists = await ProductRepository.findByName(name);

        if (productExists) {
            throw new AppError(400, 'Already exists a product with this name.');
        }

        const product = await ProductRepository.update(id, {
            name,
            price,
            quantity,
        });
        return product;
    }
}

export { UpdateProductService };
