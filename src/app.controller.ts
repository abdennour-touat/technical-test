import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Patient } from './patient/patient.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //view patient information
  @Get('view-patient/:id')
  async getPatient(@Param('id') id: string) {
    const patient = await this.appService.getPatientInfo(id);
    return patient;
  }
  //update patient information
  @Put('update-patient/:id')
  async updatePatient(@Param('id') id: string, @Body() patient: Patient) {
    const updatedPatient = await this.appService.updatePatientInfo(id, patient);
    return updatedPatient;
  }
}
