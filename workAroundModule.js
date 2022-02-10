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

  onst getIndustryAverageSalary = () => {
    const allSalaries = getDataByRole().map(obj => obj.salary);
    return calculateAverage(allSalaries);
  }
  