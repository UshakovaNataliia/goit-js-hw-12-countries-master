const fetchCountries = inputValue => {
  const basicUrl = 'https://restcountries.eu/rest/v2/name/';

  return fetch(`${basicUrl}${inputValue}`)
    .then(response => response.json())
    .then(data=> data);
};

export default fetchCountries;


