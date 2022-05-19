import { Product } from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/product.repository';

class ListProductService {
    public async execute(): Promise<Product[]> {
        const products = await ProductRepository.find();
        return products;
    }
}

export { ListProductService };
