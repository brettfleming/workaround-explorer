import {getDataByRole, GetDataByCompany} from './modules/salaryData.js'
import salaryData from './modules/salaryData.js'

const getAverageSalaryByRole = role => {
    const roleData = getDataByRole();
    const salariesOfRole = roleData.map(obj => obj.salary);
    return calculateAverage(salariesOfRole);
  }