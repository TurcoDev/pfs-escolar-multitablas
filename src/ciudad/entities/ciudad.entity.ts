import { Escuela } from 'src/escuela/entities/escuela.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('ciudad')
export class Ciudad {
  @PrimaryGeneratedColumn()
  private id_ciudad: number;
  @Column()
  private nombre: string;

  @OneToOne(() => Escuela)
  @JoinColumn({ name: 'id_ciudad' })
  public escuela: Escuela;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public getIdCiudad(): number {
    return this.id_ciudad;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }
}
