import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Prescription, PrescriptionSchema } from './prescription.schema';
import { Patient } from 'src/patient/patient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Patient.name, schema: PrescriptionSchema },
    ]),
  ],
})
export class PrescriptionModule {}
