import { Clase } from 'src/clase/entities/clase.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('escuela')
export class Escuela {
  @PrimaryColumn()
  private id: number;
  @Column()
  private nombre: string;
  @Column()
  private domicilio: string;
  @Column()
  private id_ciudad: number;

  @OneToMany(() => Clase, (clase) => clase.escuela)
  @JoinColumn()
  public clases: Clase[];
}
