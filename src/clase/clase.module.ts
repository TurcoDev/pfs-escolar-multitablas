import { Module } from '@nestjs/common';
import { ClaseService } from './clase.service';
import { ClaseController } from './clase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './entities/clase.entity';
import { Escuela } from 'src/escuela/entities/escuela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clase, Escuela])],
  controllers: [ClaseController],
  providers: [ClaseService],
})
export class ClaseModule {}
