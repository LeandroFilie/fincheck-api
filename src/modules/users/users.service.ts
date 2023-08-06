import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/user.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUserById(userId: string) {
    return this.usersRepository.findUnique({
      select: { name: true, email: true },
      where: { id: userId },
    });
  }
}
