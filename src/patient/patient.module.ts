import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient } from './patient.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Patient', schema: Patient }])],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
