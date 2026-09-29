import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerAvatarConfig } from 'multer-avatar.config';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
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
  
  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req) {
    return this.userService.findById(Number(req.user.id));
  }
  /**
   *@returns id
   * @param id identificador principal
   */
  @Get(':id')
findOne(@Param('id') id: string) {
  const parsedId = Number(id);

  if (!Number.isInteger(parsedId)) {
    throw new BadRequestException('ID inválido');
  }

  return this.userService.findById(parsedId);
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


 @UseGuards(JwtAuthGuard)
@Post('avatar')
@UseInterceptors(FileInterceptor('file', multerAvatarConfig))
async uploadAvatar(
  @UploadedFile() file: Express.Multer.File,
  @Req() req
) {
  return this.userService.updateAvatar(req.user.id, file.filename);
}



}