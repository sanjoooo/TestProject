import { Injectable } from '@nestjs/common';
import { EMPLOYEE } from 'src/employee/employee.dto';


@Injectable()
export class UserService {
    private emp=EMPLOYEE;
    
    public getAllEmployee(){
        return this.emp;
    }
}
