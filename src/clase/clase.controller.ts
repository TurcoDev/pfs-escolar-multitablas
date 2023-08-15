import { Controller } from '@nestjs/common';
import { ClaseService } from './clase.service';

@Controller('clase')
export class ClaseController {
  constructor(private readonly claseService: ClaseService) {}
}
