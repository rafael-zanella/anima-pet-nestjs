import { OngsController } from './ongs.controller';
import { OngsService } from './ongs.service';

describe('OngsController', () => {
  let ongsController: OngsController;
  let ongsService: OngsService;

  beforeEach(async () => {
    ongsService = new OngsService();
    ongsService.findAll = jest.fn();
    ongsService.findOne = jest.fn();
    ongsService.create = jest.fn();
    ongsService.update = jest.fn();
    ongsService.remove = jest.fn();

    ongsController = new OngsController(ongsService);
  });

  it('deve chamar service findAll', () => {
    ongsController.findAll();
    expect(ongsService.findAll).toHaveBeenCalled();
  });

  it('deve chamar service findOne', () => {
    ongsController.findOne('123456');
    expect(ongsService.findOne).toHaveBeenCalledWith('123456');
  });

  it('deve chamar service create()', () => {
    const mock = {
      nome: 'teste',
      cnpj: '123456',
      telefone: '33332222',
    };

    ongsController.create(mock);
    expect(ongsService.create).toHaveBeenCalledWith(mock);
  });

  it('deve chamar service update()', () => {
    const mock = {
      nome: 'teste1',
      telefone: '33332222',
    };

    ongsController.update('123456', mock);
    expect(ongsService.update).toHaveBeenCalledWith('123456', mock);
  });
});
