import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';
import { Ong } from './entities/ong.entity';

@Injectable()
export class OngsService {
  private ongs: Ong[] = [
    {
      nome: 'Ong XYZ',
      cnpj: '123345667897',
      telefone: '3333 1122',
    },
    {
      nome: 'Ong ABC',
      cnpj: '789745641231',
      telefone: '3333 2233',
    },
  ];

  create(createOngDto: CreateOngDto) {
    this.ongs.push(createOngDto);
    return createOngDto;
  }

  findAll() {
    return this.ongs;
  }

  findOne(cnpj: string) {
    const ong = this.ongs.find((el) => el.cnpj === cnpj);
    if (!ong) {
      throw new NotFoundException(`Ong #${cnpj} not found`);
    }
    return ong;
  }

  update(cnpj: string, updateOngDto: UpdateOngDto) {
    const ong = this.findOne(cnpj);
    ong.nome = updateOngDto.nome;
    ong.telefone = updateOngDto.telefone;
    return ong;
  }

  remove(cnpj: string) {
    const ongIndex = this.ongs.findIndex((el) => el.cnpj === cnpj);

    if (ongIndex === -1) {
      throw new NotFoundException(`ong #${cnpj} not found`);
    }

    this.ongs.splice(ongIndex, 1);
  }
}
