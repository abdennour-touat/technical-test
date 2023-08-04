import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Patient } from './patient.schema';
import { PatientService } from './patient.service';
// import { PrescriptionService } from 'src/prescription/prescription.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}
  //create patient
  @Post()
  async createPatient(@Body() patient: Patient) {
    //handle exceptions
    const newPatient = await this.patientService.createPatient(patient);
    return newPatient;
  }
  //get all patients
  @Get()
  async getAllPatients() {
    const patients = await this.patientService.getAllPatients();
    return patients;
  }
  //view a patient's prescription
  @Get('prescription/:id')
  async getPatientPrescription(@Param('id') id: string) {
    const patientPrescriptions = await this.patientService.getPrescriptions(id);
    return patientPrescriptions;
  }
  //view medical history
  @Get('medical-history/:id')
  async getPatientMedicalHistory(@Param('id') id: string) {
    const patientMedicalHistory = await this.patientService.getMedicalHistory(
      id,
    );
    return patientMedicalHistory;
  }
  //update patient's info
  @Put('/:id')
  async updatePatient(@Body() newPatient: Patient, @Param('id') id: string) {
    const updatedPatient = await this.patientService.updatePatient(
      newPatient,
      id,
    );
    return updatedPatient;
  }
}
