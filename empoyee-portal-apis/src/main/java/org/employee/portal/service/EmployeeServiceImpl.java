package org.employee.portal.service;

import java.util.Collections;
import java.util.List;

import org.employee.portal.dao.EmployeeRepository;
import org.employee.portal.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> getEmployees(){
		List<Employee> employees = (List<Employee>)employeeRepository.findAll();
		Collections.sort(employees);
		return employees;
		
	}
	
	public Employee saveEmployees(Employee employee){
		Employee save = employeeRepository.save(employee);
		return save;
		
	}

}
