import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'registration' , component: RegistrationComponent},
  {path: 'employees' , component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
