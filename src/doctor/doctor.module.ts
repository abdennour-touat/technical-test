import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from './doctor.schema';
import { Patient, PatientSchema } from 'src/patient/patient.schema';
import {
  Prescription,
  PrescriptionSchema,
} from 'src/prescription/prescription.schema';
import {
  MedicalHistory,
  MedicalHistorySchema,
} from 'src/medical-history/medical-history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Doctor.name, schema: DoctorSchema },
      { name: Patient.name, schema: PatientSchema },
      { name: Prescription.name, schema: PrescriptionSchema },
      { name: MedicalHistory.name, schema: MedicalHistorySchema },
    ]),
  ],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
