import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Prescription, PrescriptionSchema } from './prescription.schema';
import { Model } from 'mongoose';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectModel(Prescription.name)
    private PrescriptionModel: Model<Prescription>,
  ) {}
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
}
