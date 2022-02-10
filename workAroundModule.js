import {getDataByRole, GetDataByCompany} from './modules/salaryData.js'
import salaryData from './modules/salaryData.js'

const getAverageSalaryByRole = role => {
    const roleData = getDataByRole();
    const salariesOfRole = roleData.map(obj => obj.salary);
    return calculateAverage(salariesOfRole);
  }

  const getAverageSalaryByCompany = company => {
    const companyData = GetDataByCompany();
    const salariesAtCompany = companyData.map(obj => obj.salary);
    return calculateAverage(salariesAtCompany);
  }
  
  const getSalaryAtCompany = (role, company) => {
    const companyData = GetDataByCompany();
    const roleAtCompany = companyData.find(obj => obj.role === role);
    return roleAtCompany.salary;
  }

  const getIndustryAverageSalary = () => {
    const allSalaries = getDataByRole().map(obj => obj.salary);
    return calculateAverage(allSalaries);
  }

  function calculateAverage(arrayOfNumbers) {
    let total = 0;
    arrayOfNumbers.forEach(number => total += number);
    return (total / arrayOfNumbers.length).toFixed(2);
  }
  