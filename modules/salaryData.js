//array of data objects about company salaries
const salaryData = [
  { role: "CTO", company: "Big Data Inc.", salary: 320000 },
  { role: "Technical Lead", company: "Big Data Inc.", salary: 230000 },
  { role: "Software Engineer II", company: "Big Data Inc.", salary: 180000 },
  { role: "Software Engineer I", company: "Big Data Inc.", salary: 140000 },
  { role: "CTO", company: "Medium Data Inc.", salary: 215000 },
  { role: "Technical Lead", company: "Medium Data Inc.", salary: 165000 },
  { role: "Software Engineer II", company: "Medium Data Inc.", salary: 140000 },
  { role: "Software Engineer I", company: "Medium Data Inc.", salary: 115000 },
  { role: "CTO", company: "Small Data Inc.", salary: 175000 },
  { role: "Technical Lead", company: "Small Data Inc.", salary: 135000 },
  { role: "Software Engineer II", company: "Small Data Inc.", salary: 115000 },
  { role: "Software Engineer I", company: "Small Data Inc.", salary: 95000 },
];

//this function gets the roles that can be in the data
const getRoles = () => {
  return [
    "CTO",
    "Technical Lead",
    "Software Engineer II",
    "Software Engineer I",
  ];
};
//returns the company data
const getCompanies = () => {
  return ["Big Data Inc.", "Medium Data Inc.", "Small Data Inc."];
};
//uses a fliter method to select the data for a specific role
const getDataByRole = (role) => {
  return salaryData.filter((obj) => obj.role === role);
};
//uses the filter method to slecet the data for a specific company 
const getDataByCompany = (company) => {
  return salaryData.filter((obj) => obj.company === company);
};
//export function
export { getRoles, getCompanies, getDataByRole, getDataByCompany };
export default salaryData;