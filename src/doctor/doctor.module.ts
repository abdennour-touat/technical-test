import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor } from './doctor.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Doctor', schema: Doctor }])],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
