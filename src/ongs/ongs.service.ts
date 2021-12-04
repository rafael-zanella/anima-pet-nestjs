import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';
import { ongsMock as ongs } from './ongs.mock';

@Injectable()
export class OngsService {
  create(createOngDto: CreateOngDto) {
    ongs.push(createOngDto);
    return createOngDto;
  }

  findAll() {
    return ongs;
  }

  findOne(cnpj: string) {
    const ong = ongs.find((el) => el.cnpj === cnpj);
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
    const ongIndex = ongs.findIndex((el) => el.cnpj === cnpj);

    if (ongIndex === -1) {
      throw new NotFoundException(`ong #${cnpj} not found`);
    }

    ongs.splice(ongIndex, 1);
  }
}
