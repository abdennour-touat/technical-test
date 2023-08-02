import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './patient.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private PatientModel: Model<Patient>,
  ) {}
  //functionality 1 : view and upadate patient information
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

  //functionality 2 : view their own  prescription
  async getPrescription(id: string) {
    //get the prescription using the id of the patient
    const prescription = await this.PatientModel.findById(id).populate(
      'Prescription',
    );
    return prescription;
  }
  //functionality 3 : view their own medical histories.
  async getMedicalHistory(id: string) {
    //get the medical history using the id of the patient
    const medicalHistory = await this.PatientModel.findById(id).populate(
      'MedicalHistory',
    );
    return medicalHistory;
  }
}
