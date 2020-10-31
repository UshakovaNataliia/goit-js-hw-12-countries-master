import templateCountry from '../templates/templateCountry.hbs';
import fetchCountries from '../js/fetchCountries.js';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


const result = document.querySelector('.result');
const input = document.querySelector('.js-input');

const renderCard = country => {
  result.insertAdjacentHTML('beforeend', templateCountry(country));
};

const renderCountryList = countryArr => {
  const countryList = `
  <ul class="countryList">${renderCountryListItem(countryArr)}</ul>`;
  result.insertAdjacentHTML('beforeend', countryList);
};

const renderCountryListItem = arr => arr.reduce((acc, item) => {
    return (acc += `<li class="countryListItem">${item.name}</li>`)
}, '');

export const renderPage = function() {
  result.innerHTML = '';

  fetchCountries(input.value)
  .then(data => {
      if (data.length > 10) {
        alert('Too many mathces found. Please enter a more specific query!');
      } else if (data.length < 2) {
        renderCard(data[0]);
      } else if(data.status > 400){
        alert('There is no matches found.');
      } else {
        renderCountryList(data);
      }
  })
}
