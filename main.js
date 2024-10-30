const PAIS_URL = 'https://restcountries.com/v3.1/all?fields=name';
const $sel1 = document.querySelector('.sel1');
const $usersList = document.querySelector('.users-list');

function getCountryName () {
  fetch(PAIS_URL)
    .then((resp) => {
      return resp.json()
      
    })
    .then((data) => {
        data.forEach(pais => {
            const option = document.createElement('option');
            option.textContent = pais.name.common;
            $sel1.appendChild(option);
        });
    })
    .catch((error) => console.error('❌', error.message));
}

getCountryName ()