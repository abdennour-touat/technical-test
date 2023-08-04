import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, mongo } from 'mongoose';
import { Patient } from '../patient/patient.schema';
import { Doctor } from '../doctor/doctor.schema';

export type PrescriptionDocument = HydratedDocument<Prescription>;

@Schema()
export class Prescription {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Patient.name })
  patientId: Patient;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Doctor.name })
  doctorId: Doctor;

  @Prop()
  medication: [string];

  @Prop()
  dosage: number;

  @Prop()
  frequency: number;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

export const PrescriptionSchema = SchemaFactory.createForClass(Prescription);
