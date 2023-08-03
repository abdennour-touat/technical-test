import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalHistory, MedicalHistorySchema } from './medical-history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'MedicalHistory', schema: MedicalHistorySchema },
    ]),
  ],
})
export class MedicalHistoryModule {}
