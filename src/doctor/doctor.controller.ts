import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Doctor } from './doctor.schema';
import { DoctorService } from './doctor.service';
import { Prescription } from 'src/prescription/prescription.schema';
import { MedicalHistory } from 'src/medical-history/medical-history.schema';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}
  // create doctor
  @Post()
  async createDoctor(@Body() doctor: Doctor) {
    const newDoctor = await this.doctorService.createDoctor(doctor);
    return newDoctor;
  }

  //create prescription
  @Post('prescription')
  async createPrescription(@Body() prescription: Prescription) {
    const newPrescription = await this.doctorService.createPrescription(
      prescription,
    );
    return newPrescription;
  }
  //get prescription by id
  @Get('prescription/:id')
  async getPrescription(@Param('id') id: string) {
    const prescription = await this.doctorService.getPrescription(id);
    return prescription;
  }
  //update prescription
  @Put('prescription/:id')
  async updatePrescription(
    @Body() prescription: Prescription,
    @Param('id') id: string,
  ) {
    const updatedPrescription = await this.doctorService.updatePrescription(
      id,
      prescription,
    );
    return updatedPrescription;
  }

  //delete prescription
  @Delete('prescription/:id')
  async deletePrescription(@Param('id') id: string) {
    const deletedPrescription = await this.doctorService.deletePrescription(id);
    return deletedPrescription;
  }

  //create medical history
  @Post('medical-history')
  async createMedicalHistory(@Body() medicalHistory: MedicalHistory) {
    const newMedicalHistory = await this.doctorService.createMedicalHistory(
      medicalHistory,
    );
    return newMedicalHistory;
  }
  //get medical history by id
  @Get('medical-history/:id')
  async getMedicalHistory(@Param('id') id: string) {
    const medicalHistory = await this.doctorService.getMedicalHistory(id);
    return medicalHistory;
  }
  //update medical history
  @Put('medical-history/:id')
  async updateMedicalHistory(
    @Body() medicalHistory: MedicalHistory,
    @Param('id') id: string,
  ) {
    const updatedMedicalHistory = await this.doctorService.updateMedicalHistory(
      id,
      medicalHistory,
    );
    return updatedMedicalHistory;
  }
  //delete medical history
  @Delete('medical-history/:id')
  async deleteMedicalHistory(@Param('id') id: string) {
    const deletedMedicalHistory = await this.doctorService.deleteMedicalHistory(
      id,
    );
    return deletedMedicalHistory;
  }
  //view patient information
  @Get('patient/:id')
  async getPatientInfo(@Param('id') id: string) {
    const patient = await this.doctorService.getPatientInfo(id);
    return patient;
  }
}
