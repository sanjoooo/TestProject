import { Module } from '@nestjs/common';
import { SalaryController } from './salary.controller';

@Module({
  controllers: [SalaryController]
})
export class SalaryModule {}
