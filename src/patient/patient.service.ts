import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './patient.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private PatientModel: Model<Patient>,
  ) {}

  //functionality 2 : view their own  prescription
  async getPrescriptions(id: string) {
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
  //create patient
  async createPatient(patient: Patient) {
    const newPatient = new this.PatientModel(patient);
    return newPatient.save();
  }
  //update patient
  async updatePatient(patient: Patient, id: string) {
    const updatedPatient = this.PatientModel.findByIdAndUpdate(id, patient);
    return updatedPatient;
  }
}
