import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './app.shared';

@Injectable({
    providedIn: 'root',
  })
export class EmployeeService {

   GET_EMPLOYEE =environment.employeesPortalApis.baseurl+environment.employeesPortalApis.endpoints.getEmployees;
   SAVE_EMPLOYEE:string =environment.employeesPortalApis.baseurl+environment.employeesPortalApis.endpoints.saveEmployee;

  constructor(private http: HttpClient){

  }

    saveEmployee(employee:Employee){
      this.http.post(this.SAVE_EMPLOYEE,employee).subscribe(
        response=>{
           if(response){
             alert("save successfully")
           }
        }
      );    
   }

    getEmployees(): Observable<Employee[]>{
      return this.http.get<Employee[]>(this.GET_EMPLOYEE);
        // return ELEMENT_DATA2;
    }
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];


  const ELEMENT_DATA2: Employee[] = [
    {firstName: 'Virat', lastName: 'Kohli', gender: 'M', dateOfBirth: '03/02/2015',department: 'CRICKET'},
    {firstName: 'Virat', lastName: 'Kohli', gender: 'M', dateOfBirth: '03/02/2015',department: 'CRICKET'},
    {firstName: 'Virat', lastName: 'Kohli', gender: 'M', dateOfBirth: '03/02/2015',department: 'CRICKET'},
    {firstName: 'Virat', lastName: 'Kohli', gender: 'M', dateOfBirth: '03/02/2015',department: 'CRICKET'},
    {firstName: 'Virat', lastName: 'Kohli', gender: 'M', dateOfBirth: '03/02/2015',department: 'CRICKET'},
    {firstName: 'Virat', lastName: 'Kohli', gender: 'M', dateOfBirth: '03/02/2015',department: 'CRICKET'},
    {firstName: 'Virat', lastName: 'Kohli', gender: 'M', dateOfBirth: '03/02/2015',department: 'CRICKET'}
  ];