// your task:
// Build a company reporting system that aggregates employee data by departments
//
// Requirements:
// 1. Create enum Department with values: HR, IT, Sales, Finance
//
// 2. Create interface Employee with fields:
//    - name: string
//    - salary: number
//    - department: Department
//
// 3. Create class Company that:
//    - Stores employees in array
//    - Has method addEmployee(emp: Employee)
//    - Has method generateDepartmentReport() that returns formatted string report
//
// 4. Report format for each department:
//    "DepartmentName
//    - count: X
//    - total salary: XXXX
//    - average salary: XXXX.XX"
//
// 5. Departments should be sorted alphabetically in the report
//
// Goal: Advanced data aggregation, grouping, formatting, and enum iteration
//
// Test data:
// { name: "Anna", salary: 4000, department: Department.HR }
// { name: "Tomek", salary: 6000, department: Department.IT }
// { name: "Ola", salary: 3500, department: Department.HR }
// { name: "Bartek", salary: 7000, department: Department.IT }
// { name: "Monika", salary: 5000, department: Department.Sales }
// { name: "Darek", salary: 9000, department: Department.Finance }
//
// Expected output:
// Finance
// - count: 1
// - total salary: 9000
// - average salary: 9000.00
// HR
// - count: 2
// - total salary: 7500
// - average salary: 3750.00
// IT
// - count: 2
// - total salary: 13000
// - average salary: 6500.00
// Sales
// - count: 1
// - total salary: 5000
// - average salary: 5000.00
//
// To test your solution in terminal, run:
// npm run bonus33

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

enum Department {
  HR = "HR",
  IT = "IT",
  Sales = "Sales",
  Finance = "Finance",
}

interface Employee {
  name: string;
  salary: number;
  department: Department;
}

class Company {
  employees: Employee[];
  constructor() {
    this.employees = [];
  }
  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  generateDepartmentReport(): string {
    let report = "";
    for (let department of Object.values(Department).sort()) {
      let tempArray = this.employees.filter(
        emp => emp.department === department
      );
      const employeeCount = tempArray.length;
      const employeeSalarySum = tempArray.reduce(
        (sum, emp) => sum + emp.salary,
        0
      );
      const employeeSalaryAverage = (employeeSalarySum / employeeCount).toFixed(
        2
      );
      report += `${department} \n - count: ${employeeCount}\n - total salary: ${employeeSalarySum}\n - average salary: ${employeeSalaryAverage}\n`;
    }
    return report;
  }
}
const company = new Company();

company.addEmployee({ name: "Anna", salary: 4000, department: Department.HR });
company.addEmployee({ name: "Tomek", salary: 6000, department: Department.IT });
company.addEmployee({ name: "Ola", salary: 3500, department: Department.HR });
company.addEmployee({
  name: "Bartek",
  salary: 7000,
  department: Department.IT,
});
company.addEmployee({
  name: "Monika",
  salary: 5000,
  department: Department.Sales,
});
company.addEmployee({
  name: "Darek",
  salary: 9000,
  department: Department.Finance,
});

console.log(company.generateDepartmentReport());
export {};
