import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   *@returns crear usuario
   * @param createUserDto creación de usuario
   */
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   *@returns obtener todos
   */
  @Get('getAll')
  findAll() {
    return this.userService.findAll();
  }

  /**
   *@returns obetener todos los tipos
   */
  @Get('types')
  getTypes() {
    return this.userService.getUserTypes();
  }

  /**
   *@returns id
   * @param id identificador principal
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne({ id: +id });
  }

  /**
   *@returns avctualiza User y id
   * @param id identificador principal
   * @param updateUserDto actualización de User
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  /**
   *@returns eliminación de id
   * @param id identificador principal
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}