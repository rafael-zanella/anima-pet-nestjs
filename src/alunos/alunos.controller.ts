import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':matricula')
  findOne(@Param('matricula') matricula: string) {
    return this.alunosService.findOne(+matricula);
  }

  @Patch(':matricula')
  update(
    @Param('matricula') matricula: string,
    @Body() updateAlunoDto: UpdateAlunoDto,
  ) {
    return this.alunosService.update(+matricula, updateAlunoDto);
  }

  @Delete(':matricula')
  remove(@Param('matricula') matricula: string) {
    return this.alunosService.remove(+matricula);
  }
}
