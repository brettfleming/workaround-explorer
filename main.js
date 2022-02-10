import {getRoles, getCompanies} from './modules/salaryData.js'

const companies = [];
const roles = [];

renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');

// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function renderInputButtons(labels, groupName) {
    const container = document.createElement('section');
    container.setAttribute('id', `${groupName}Inputs`);
  
    let header = document.createElement('h3');
    header.innerText = `Select a ${groupName}`;
    container.appendChild(header);
  
    labels.forEach(label => { // For each label...
      // Create the radio input element.
      let divElement = document.createElement('div');
      divElement.setAttribute('class', 'option');
  
      let inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'radio');
      inputElement.setAttribute('name', groupName);
      inputElement.setAttribute('value', label);
      divElement.appendChild(inputElement);
  
      // Create a label for that radio input element.
      let labelElement = document.createElement('label');
      labelElement.setAttribute('for', label);
      labelElement.innerText = label;
      divElement.appendChild(labelElement);
  
      // Update the results when the input is selected.
      inputElement.addEventListener('click', updateResults);
  
      container.appendChild(divElement);
    });
  
    document.querySelector('main').prepend(container);
  }