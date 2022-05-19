import { ProductRepository } from '../typeorm/repositories/product.repository';

interface IRequest {
    id: string;
}

class DeleteProductService {
    constructor({ id }: IRequest) {
        this.execute({ id });
    }

    private async execute({ id }: IRequest) {
        const result = await ProductRepository.delete(id);
        return result;
    }
}

export { DeleteProductService };
