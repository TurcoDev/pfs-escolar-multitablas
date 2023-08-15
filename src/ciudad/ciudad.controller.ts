import { CiudadService } from './ciudad.service';
import { Controller, Get } from '@nestjs/common';

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Get('raw')
  getCitysRaw(): any {
    return this.ciudadService.getAllRaw();
  }

  @Get('noraw')
  getCitys(): any {
    return this.ciudadService.getAll();
  }
}
