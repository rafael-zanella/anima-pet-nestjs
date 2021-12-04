import { Module } from '@nestjs/common';
import { OngsModule } from './ongs/ongs.module';

@Module({
  imports: [OngsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
