package org.employee.portal.controller;

import java.util.List;

import org.employee.portal.model.Employee;
import org.employee.portal.service.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class EmployeeController {

	@Autowired
	EmployeeServiceImpl employeeService;

	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getEmployees() {

		List<Employee> employees = employeeService.getEmployees();
		return new ResponseEntity<List<Employee>>(employees, null, HttpStatus.OK);

	}

	@PostMapping("/employees")
	public ResponseEntity<Employee> saveEmployees(@RequestBody Employee empoyee) {
		Employee saveEmployees = employeeService.saveEmployees(empoyee);
		return new ResponseEntity<Employee>(saveEmployees, null, HttpStatus.OK);
	}

}
