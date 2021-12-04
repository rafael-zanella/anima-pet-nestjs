import { Module } from '@nestjs/common';
import { AlunosModule } from './alunos/alunos.module';
import { OngsModule } from './ongs/ongs.module';

@Module({
  imports: [AlunosModule, OngsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
