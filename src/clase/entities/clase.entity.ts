import { Escuela } from 'src/escuela/entities/escuela.entity';
import { Entity, Column, JoinColumn, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity('clase')
export class Clase {
  @PrimaryColumn()
  private id_clase: number;
  @Column()
  private nombre: string;
  @ManyToOne(() => Escuela, (escuela) => escuela.clases)
  @JoinColumn({ name: 'id_clase' })
  public escuela: Escuela;
  // @Column()
  // private idProfesor: number;
}
