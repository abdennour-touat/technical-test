import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient, PatientSchema } from './patient.schema';
import {
  Prescription,
  PrescriptionSchema,
} from 'src/prescription/prescription.schema';
import {
  MedicalHistory,
  MedicalHistorySchema,
} from 'src/medical-history/medical-history.schema';
// import { PrescriptionService } from 'src/prescription/prescription.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Prescription.name, schema: PrescriptionSchema },
      { name: Patient.name, schema: PatientSchema },
      { name: MedicalHistory.name, schema: MedicalHistorySchema },
    ]),
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
