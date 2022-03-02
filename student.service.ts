import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
 
  AddNewStudent(): string {
    return 'Student Added Successfully!!';
  }

  EditStudent(): string{
      return 'Virat has been updated'
  }

  DeleteStudent(): string{
      return 'Virat has been deleted'
  }
  GetAllStudents(): any {
    return ['Virat Kohli', 'MS Dhoni', 'Shikhar Dhawan','Suresh Raina'];
  }
}