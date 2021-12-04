import { Test, TestingModule } from '@nestjs/testing';
import { OngsService } from './ongs.service';
import { ongsMock } from './ongs.mock';

describe('OngsService', () => {
  let service: OngsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OngsService],
    }).compile();

    service = module.get<OngsService>(OngsService);
  });

  it('deve retornar todas as ongs', () => {
    const data = service.findAll();
    expect(data.length).toEqual(2);
  });

  it('deve retornar apenas uma ong', () => {
    const data = service.findOne('123345667897');
    expect(data).toEqual(ongsMock[0]);
  });

  it('deve adicionar uma ong', () => {
    service.create({
      nome: 'ong teste',
      cnpj: '99999999',
      telefone: '12344321',
    });

    expect(ongsMock.length).toBe(3);
  });

  it('deve atualizar uma ong', () => {
    const ongAtualizada = {
      nome: 'Ong XYZXYZ',
      cnpj: '123345667897',
      telefone: '3333 1122',
    };

    service.update('123345667897', ongAtualizada);

    const data = ongsMock[0];
    expect(ongsMock.length).toBe(3);
    expect(data).toEqual(ongAtualizada);
  });

  it('deve remover uma ong', () => {
    service.remove('123345667897');
    expect(ongsMock.length).toBe(2);
  });
});
