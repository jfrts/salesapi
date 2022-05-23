import { User } from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/user.repository';

export class ListUserService {
    public async execute(): Promise<User[]> {
        const users = await UserRepository.find();
        return users;
    }
}
