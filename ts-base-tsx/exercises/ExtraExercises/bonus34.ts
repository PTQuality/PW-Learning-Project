// your task:
// Parse nested JSON data and generate a "flattened" report
//
// Requirements:
// 1. Create types: CompanyData, DepartmentData, EmployeeData
//
// 2. Input data structure:
//    CompanyData = {
//      companyName: string,
//      departments: DepartmentData[]
//    }
//    DepartmentData = {
//      name: string,
//      employees: EmployeeData[]
//    }
//    EmployeeData = {
//      fullName: string,
//      salary: number
//    }
//
// 3. Create function generateFlatReport(data: unknown): string[] that:
//    - Returns array of strings in format: "Department: EmployeeName - Salary"
//    - ⚠️ Note the 'unknown' type! It simulates unknown data that needs validation
//
// 4. Add validation - if data is incomplete (missing field or wrong type), skip entry
//
// 5. Result should be sorted alphabetically by department names,
//    and within department by employee names
//
// Goal: Practice nested structure processing, type work, and validation
//
// Test data:
// {
//   companyName: "MegaCorp",
//   departments: [
//     {
//       name: "HR",
//       employees: [
//         { fullName: "Anna Kowalska", salary: 4000 },
//         { fullName: "Ola Nowak", salary: 3500 }
//       ]
//     },
//     {
//       name: "IT",
//       employees: [
//         { fullName: "Tomek Zięba", salary: 6000 },
//         { fullName: "Bartek Biały", salary: 7000 }
//       ]
//     },
//     {
//       name: "Sales",
//       employees: [{ fullName: "Monika Król", salary: 5000 }]
//     },
//     {
//       name: "Broken",
//       employees: [
//         { fullName: "Missing salary" }, // missing data
//         { salary: 1234 } // missing name
//       ]
//     }
//   ]
// }
//
// Expected output:
// ["HR: Anna Kowalska - 4000", "HR: Ola Nowak - 3500", "IT: Bartek Biały - 7000",
//  "IT: Tomek Zięba - 6000", "Sales: Monika Król - 5000"]
//
// To test your solution in terminal, run:
// npm run bonus34

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

type CompanyData = { companyName: string; departments: DepartmentData[] };
type DepartmentData = { name: string; employees: EmployeeData[] };
type EmployeeData = { fullName: string; salary: number };

function isEmployeeData(obj: unknown): obj is EmployeeData {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "fullName" in obj &&
    typeof obj.fullName === "string" &&
    "salary" in obj &&
    typeof obj.salary === "number"
  );
}
function isDepartment(obj: unknown): obj is DepartmentData {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "name" in obj &&
    typeof obj.name === "string" &&
    "employees" in obj &&
    Array.isArray(obj.employees)
  );
}
function isCompanyData(obj: unknown): obj is CompanyData {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "companyName" in obj &&
    typeof obj.companyName === "string" &&
    "departments" in obj &&
    Array.isArray(obj.departments)
  );
}
function generateFlatReport(data: unknown): string[] {
  let report = [];

  if (isCompanyData(data)) {
    const validDepartments = data.departments.filter(isDepartment);
    for (let department of validDepartments.sort((a, b) =>
      a.name.localeCompare(b.name)
    )) {
      const validEmployees = department.employees.filter(isEmployeeData);
      for (let employee of validEmployees.sort((a, b) =>
        a.fullName.localeCompare(b.fullName)
      )) {
        report.push(
          `${department.name}: ${employee.fullName} - ${employee.salary}`
        );
      }
    }
  }

  return report;
}

// ------------------------TEST CASES - DON'T TOUCH---------------------------

const companyData = {
  companyName: "MegaCorp",
  departments: [
    {
      name: "HR",
      employees: [
        { fullName: "Anna Kowalska", salary: 4000 },
        { fullName: "Ola Nowak", salary: 3500 },
      ],
    },
    {
      name: "IT",
      employees: [
        { fullName: "Tomek Zięba", salary: 6000 },
        { fullName: "Bartek Biały", salary: 7000 },
      ],
    },
    {
      name: "Sales",
      employees: [{ fullName: "Monika Król", salary: 5000 }],
    },
    {
      name: "Broken",
      employees: [
        { fullName: "Missing salary" }, // missing data
        { salary: 1234 }, // missing name
      ],
    },
  ],
};

console.log(generateFlatReport(companyData));

export {};
