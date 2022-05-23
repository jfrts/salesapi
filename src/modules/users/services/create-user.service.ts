import { AppError } from '@/shared/errors/AppError';
import { User } from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/user.repository';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

export class CreateUserService {
    public async execute({ name, email, password }: IRequest): Promise<User> {
        const userEmailExists = await UserRepository.findByEmail(email);

        if (userEmailExists) {
            throw new AppError(
                400,
                'Already exists one user with this e-mail.',
            );
        }

        const user = UserRepository.create({
            name,
            email,
            password,
        });

        await UserRepository.save(user);
        return user;
    }
}
