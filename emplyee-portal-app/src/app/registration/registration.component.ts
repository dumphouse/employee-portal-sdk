import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../app.service';
import { Employee } from '../app.shared';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;  //declaring our form variable
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    this.registrationForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      gender: new FormControl(null),
      dateOfBirth: new FormControl(null),
      department: new FormControl(null)   

    });

  }

  onSubmit() {
    //this.employeeService()
    const employee: Employee = new Employee();
    employee.firstName = this.registrationForm.get('firstName').value;
    employee.lastName = this.registrationForm.get('lastName').value;
    employee.gender= this.registrationForm.get('gender').value;
    employee.dateOfBirth= this.registrationForm.get('dateOfBirth').value;
    employee.department= this.registrationForm.get('department').value;
    console.log(employee);
    this.employeeService.saveEmployee(employee);
  }

}
