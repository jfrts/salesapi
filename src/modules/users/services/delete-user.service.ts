import { UserRepository } from '../typeorm/repositories/user.repository';

interface IRequest {
    id: string;
}

export class DeleteUserService {
    public async execute({ id }: IRequest) {
        const result = await UserRepository.delete(id);
        return result;
    }
}
