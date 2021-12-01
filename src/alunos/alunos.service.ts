import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [
    {
      matricula: 1,
      nome: 'Rafael',
    },
    {
      matricula: 2,
      nome: 'Zanella',
    },
  ];

  create(createAlunoDto: CreateAlunoDto) {
    this.alunos.push(createAlunoDto);
    return createAlunoDto;
  }

  findAll() {
    return this.alunos;
  }

  findOne(matricula: number) {
    const aluno = this.alunos.find((el) => el.matricula === matricula);
    if (!aluno) {
      throw new NotFoundException(`Aluno #${matricula} not found`);
    }
    return aluno;
  }

  update(matricula: number, updateAlunoDto: UpdateAlunoDto) {
    const aluno = this.findOne(matricula);
    aluno.nome = updateAlunoDto.nome;
    return aluno;
  }

  remove(matricula: number) {
    const alunoIndex = this.alunos.findIndex(
      (el) => el.matricula === matricula,
    );

    if (alunoIndex === -1) {
      throw new NotFoundException(`Aluno #${matricula} not found`);
    }

    this.alunos.splice(alunoIndex, 1);
  }
}
