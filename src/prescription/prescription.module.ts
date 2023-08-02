import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionController } from './prescription.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Prescription } from './prescription.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Prescription', schema: Prescription }]),
  ],
  providers: [PrescriptionService],
  controllers: [PrescriptionController],
})
export class PrescriptionModule {}
