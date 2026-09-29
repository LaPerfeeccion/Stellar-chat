import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { join } from 'path';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './entities/user-type.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  /**
   *@returns id de usuario
   * @param createUserDto cración del usuario
   */
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.save(createUserDto);
    return user.id;
  }

  /**
   *@returns todas las relaciones con usertype
   */
  findAll() {
    return this.userRepository.find({
      relations: {
        userType: {
          permissions: true
        },
        rol: true,
        
      }
    });
  }

  

  /**
   *@returns usando where
   * @param where para elegir ciertas propiedades
   */

  /**
   *@returns especificamen el email
   * @param email informacion que se requiere para iniciar seción
   */
  findOneEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  /**
   *@returns actualizacion de id y User
   * @param id idenfificador principal
   * @param updateUserDto actualiza el User
   */
  async update(id: number, updateUserDto: UpdateUserDto) {
    const response = await this.userRepository.update(id, updateUserDto);
    return response.affected > 0;
  }

  /**
   *@returns eliminacion de id o number
   * @param id idenfificador principal
   */
  async remove(id: number) {
    const response = await this.userRepository.delete(id);
    return response.affected > 0;
  }

  /**
   *@returns obtener usuarios
   */
  getUserTypes() {
    return this.userTypeRepository.find({
      relations: ['users']
    });
  }

  async updateAvatar(userId: number, filename: string) {
  const user = await this.userRepository.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new BadRequestException('Usuario no encontrado');
  }

  // 🔥 borrar avatar anterior si existe
  if (user.avatar) {
    const oldAvatarPath = join(
      __dirname,
      '..',
      '..',
      'uploads',
      'avatars',
      user.avatar,
    );

    if (fs.existsSync(oldAvatarPath)) {
      fs.unlinkSync(oldAvatarPath);
    }
  }

  user.avatar = filename;
  user.hasAvatar = true;

  await this.userRepository.save(user);

  return {
    avatarUrl: `http://localhost:3000/uploads/avatars/${filename}`,
  };
}

findById(id: number) {
  if (!Number.isInteger(id)) {
    throw new BadRequestException('ID inválido');
  }

  return this.userRepository.findOne({ where: { id } });
}

findByEmail(email: string) {
  return this.userRepository.findOne({ where: { email } });
}


}


