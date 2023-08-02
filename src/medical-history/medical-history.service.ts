import { Injectable } from '@nestjs/common';
import { MedicalHistory } from './medical-history.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MedicalHistoryService {
  constructor(
    @InjectModel(MedicalHistory.name)
    private medicalHistoryModel: Model<MedicalHistory>,
  ) {}

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
}
