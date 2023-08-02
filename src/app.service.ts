import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PatientModule } from './patient/patient.module';
import { Patient } from './patient/patient.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(PatientModule.name) private PatientModel: Model<PatientModule>,
  ) {}
  // functionality 1 : view and upadate patient information
  async getPatientInfo(id: string) {
    const patient = await this.PatientModel.findById(id);
    return patient;
  }
  async updatePatientInfo(id: string, patient: Patient) {
    const updatedPatient = await this.PatientModel.findByIdAndUpdate(
      id,
      patient,
      { new: true },
    );
    return updatedPatient;
  }
}
