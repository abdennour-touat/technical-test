import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Patient } from '../patient/patient.schema';
import { Doctor } from '../doctor/doctor.schema';

export type MedicalHistoryDocument = HydratedDocument<MedicalHistory>;

@Schema()
export class MedicalHistory {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  patientId: Patient;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' })
  doctorId: Doctor;

  @Prop()
  diagnosis: string;

  @Prop()
  treatment: string;

  @Prop()
  notes: string;
}

export const MedicalHistorySchema =
  SchemaFactory.createForClass(MedicalHistory);
