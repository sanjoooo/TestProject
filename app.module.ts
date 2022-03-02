import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { SalaryModule } from './salary/salary.module';


@Module({
  imports: [EmployeeModule,SalaryModule],
  
 
})
export class AppModule {}
