import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './patient.schema';
import { Prescription } from 'src/prescription/prescription.schema';
import { MedicalHistory } from 'src/medical-history/medical-history.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private PatientModel: Model<Patient>,
    @InjectModel(Prescription.name)
    private prescriptionModel: Model<Prescription>,
    @InjectModel(MedicalHistory.name)
    private medicalHistoryModel: Model<MedicalHistory>,
  ) {}

  //get all patients
  async getAllPatients() {
    const patients = await this.PatientModel.find();
    return patients;
  }
  //functionality 2 : view their own  prescription
  async getPrescriptions(id: string) {
    //get the prescription using the id of the patient
    //get all the prescriptions and then filter by patient id
    const prescription = await this.prescriptionModel.find({
      patientId: id,
    });

    console.log(prescription);
    return prescription;
  }
  //functionality 3 : view their own medical histories.
  async getMedicalHistory(id: string) {
    //get the medical history using the id of the patient
    const medicalHistory = await this.medicalHistoryModel.find({
      patientId: id,
    });
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
