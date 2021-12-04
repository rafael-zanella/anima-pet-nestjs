import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OngsService } from './ongs.service';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';

@Controller('ongs')
export class OngsController {
  constructor(private readonly ongsService: OngsService) {}

  @Post()
  create(@Body() createOngDto: CreateOngDto) {
    return this.ongsService.create(createOngDto);
  }

  @Get()
  findAll() {
    return this.ongsService.findAll();
  }

  @Get(':cnpj')
  findOne(@Param('cnpj') cnpj: string) {
    return this.ongsService.findOne(cnpj);
  }

  @Patch(':cnpj')
  update(@Param('cnpj') cnpj: string, @Body() updateOngDto: UpdateOngDto) {
    return this.ongsService.update(cnpj, updateOngDto);
  }

  @Delete(':cnpj')
  remove(@Param('cnpj') cnpj: string) {
    return this.ongsService.remove(cnpj);
  }
}
