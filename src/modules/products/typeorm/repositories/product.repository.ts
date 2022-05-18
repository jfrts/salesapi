import { AppDataSource } from '@/shared/typeorm';
import { Product } from '../entities/Product';

export const ProductRepository = AppDataSource.getRepository(Product).extend({
    async findByName(name: string): Promise<Product | null> {
        const product = this.findOne({
            where: { name },
        });
        return product;
    },
});
