import { Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { Escuela } from './entities/escuela.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class EscuelaService {
  private escuelas: Escuela[] = [];

  constructor(
    @InjectRepository(Escuela)
    private readonly escuelaRepository: Repository<Escuela>,
  ) {}

  create(createEscuelaDto: CreateEscuelaDto) {
    return 'This action adds a new escuela';
  }

  public async findAll(): Promise<Escuela[]> {
    this.escuelas = await this.escuelaRepository.find();
    return this.escuelas;
  }

  public async getWithClases(): Promise<Escuela[]> {
    const criterio: FindManyOptions = { relations: ['clases'] };
    this.escuelas = await this.escuelaRepository.find(criterio);
    return this.escuelas;
  }

  findOne(id: number) {
    return `This action returns a #${id} escuela`;
  }

  update(id: number, updateEscuelaDto: UpdateEscuelaDto) {
    return `This action updates a #${id} escuela`;
  }

  remove(id: number) {
    return `This action removes a #${id} escuela`;
  }
}
