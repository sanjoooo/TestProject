import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('employee')
export class EmployeeController {
constructor(private readonly userservice:UserService){}

@Get('/employee')
getAllEmployee() {
    return this.userservice.getAllEmployee();
}
}
