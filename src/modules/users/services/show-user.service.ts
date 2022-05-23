import { AppError } from '@/shared/errors/AppError';
import { User } from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/user.repository';

interface IRequest {
    emailOrId: string;
}

export class ShowUserService {
    public async execute({ emailOrId }: IRequest): Promise<User> {
        let user = await UserRepository.findOne({
            where: { id: emailOrId },
        });

        if (!user) {
            user = await UserRepository.findOne({
                where: { email: emailOrId },
            });
        }

        if (!user) {
            throw new AppError(400, 'User was not found.');
        }

        return user;
    }
}
