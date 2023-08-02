import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientSchema } from 'src/patient/patient.schema';
import { Doctor } from './doctor.schema';
import { Prescription } from 'src/prescription/prescription.schema';
import { MedicalHistory } from 'src/medical-history/medical-history.schema';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Patient.name) private PatientModel: Model<Patient>,
    @InjectModel(Prescription.name)
    private PrescriptionModel: Model<Prescription>,
    @InjectModel(MedicalHistory.name)
    private MedicalHistoryModel: Model<MedicalHistory>,
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

  //functionality 2 : create, view, update and delete prescription
  async createPrescription(prescription: Prescription) {
    const newPrescription = new this.PrescriptionModel(prescription);
    return newPrescription.save();
  }
  async getPrescription(id: string) {
    const prescription = await this.PrescriptionModel.findById(id);
    return prescription;
  }
  async updatePrescription(id: string, prescription: Prescription) {
    const updatedPrescription = await this.PrescriptionModel.findByIdAndUpdate(
      id,
      prescription,
      { new: true },
    );
    return updatedPrescription;
  }
  async deletePrescription(id: string) {
    const deletedPrescription = await this.PrescriptionModel.findByIdAndDelete(
      id,
    );
    return deletedPrescription;
  }
  //functionality 3 : create, view, update, and delete medical histories.
  async createMedicalHistory(medicalHistory: MedicalHistory) {
    const newMedicalHistory = new this.MedicalHistoryModel(medicalHistory);
    return newMedicalHistory.save();
  }
  async getMedicalHistory(id: string) {
    const medicalHistory = await this.MedicalHistoryModel.findById(id);
    return medicalHistory;
  }
  async updateMedicalHistory(id: string, medicalHistory: MedicalHistory) {
    const updatedMedicalHistory =
      await this.MedicalHistoryModel.findByIdAndUpdate(id, medicalHistory, {
        new: true,
      });
    return updatedMedicalHistory;
  }
  async deleteMedicalHistory(id: string) {
    const deletedMedicalHistory =
      await this.MedicalHistoryModel.findByIdAndDelete(id);
    return deletedMedicalHistory;
  }
}
