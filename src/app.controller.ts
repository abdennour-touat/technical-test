import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //view patient information
  @Get('patient/:id')
  async getPatient(@Param() id: string) {
    const patient = await this.appService.getPatientInfo(id);
    return patient;
  }
}
