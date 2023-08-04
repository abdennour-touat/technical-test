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
    @InjectModel(Patient.name) private readonly patientModel: Model<Patient>,
    @InjectModel(Prescription.name)
    private readonly prescriptionModel: Model<Prescription>,
    @InjectModel(MedicalHistory.name)
    private readonly medicalHistoryModel: Model<MedicalHistory>,
    @InjectModel(Doctor.name) private readonly doctorModel: Model<Doctor>,
  ) {}

  //get all doctors
  async getAllDoctors() {
    const doctors = await this.doctorModel.find();
    return doctors;
  }
  // functionality 1 : view and upadate patient information
  async getPatientInfo(id: string) {
    const patient = await this.patientModel.findById(id);
    return patient;
  }
  async updatePatientInfo(id: string, patient: Patient) {
    const updatedPatient = await this.patientModel.findByIdAndUpdate(
      id,
      patient,
      { new: true },
    );
    return updatedPatient;
  }

  //functionality 2 : create, view, update and delete prescription
  async createPrescription(prescription: Prescription) {
    const newPrescription = new this.prescriptionModel(prescription);
    return newPrescription.save();
  }
  async getPrescription(id: string) {
    const prescription = await this.prescriptionModel.findById(id);
    return prescription;
  }
  async updatePrescription(id: string, prescription: Prescription) {
    const updatedPrescription = await this.prescriptionModel.findByIdAndUpdate(
      id,
      prescription,
      { new: true },
    );
    return updatedPrescription;
  }
  async deletePrescription(id: string) {
    const deletedPrescription = await this.prescriptionModel.findByIdAndDelete(
      id,
    );
    return deletedPrescription;
  }
  //functionality 3 : create, view, update, and delete medical histories.
  async createMedicalHistory(medicalHistory: MedicalHistory) {
    const newMedicalHistory = new this.medicalHistoryModel(medicalHistory);
    return newMedicalHistory.save();
  }
  async getMedicalHistory(id: string) {
    const medicalHistory = await this.medicalHistoryModel.findById(id);
    return medicalHistory;
  }
  async updateMedicalHistory(id: string, medicalHistory: MedicalHistory) {
    const updatedMedicalHistory =
      await this.medicalHistoryModel.findByIdAndUpdate(id, medicalHistory, {
        new: true,
      });
    return updatedMedicalHistory;
  }
  async deleteMedicalHistory(id: string) {
    const deletedMedicalHistory =
      await this.medicalHistoryModel.findByIdAndDelete(id);
    return deletedMedicalHistory;
  }
  //create a doctor
  async createDoctor(doctor: Doctor) {
    const newDoctor = new this.doctorModel(doctor);
    return newDoctor.save();
  }
}
