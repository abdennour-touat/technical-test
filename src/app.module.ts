import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { Patient, PatientSchema } from './patient/patient.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema }]),
    DoctorModule,
    PatientModule,
    MedicalHistoryModule,
    PrescriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
