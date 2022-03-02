import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { EmployeeController } from './employee.controller';


@Module({
  controllers: [EmployeeController],
  providers: [UserService]
})
export class EmployeeModule {}
