import { ProductRepository } from '../typeorm/repositories/product.repository';

interface IRequest {
    id: string;
}

export class DeleteProductService {
    public async execute({ id }: IRequest) {
        const result = await ProductRepository.delete(id);
        return result;
    }
}
