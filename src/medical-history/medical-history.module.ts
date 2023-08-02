import { Module } from '@nestjs/common';
import { MedicalHistoryController } from './medical-history.controller';
import { MedicalHistoryService } from './medical-history.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalHistory } from './medical-history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'MedicalHistory', schema: MedicalHistory },
    ]),
  ],
  controllers: [MedicalHistoryController],
  providers: [MedicalHistoryService],
})
export class MedicalHistoryModule {}
