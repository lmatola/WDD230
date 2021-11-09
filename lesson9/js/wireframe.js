
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            let card = document.createElement('section');
            let h1 = document.createElement('h1');            
            let motto = document.createElement('h3');
            let year = document.createElement('p');
            let year1 = document.createElement('p');
            let population = document.createElement('p');
            let image = document.createElement('img');


            h1.textContent = towns[i].name;            
            motto.textContent = '' + towns[i].motto;
            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            year1.textContent = 'Annual Rain fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', towns[i].photo);


            card.appendChild(h1);            
            card.appendChild(motto);
            card.appendChild(year);
            card.appendChild(population);
            card.appendChild(year1);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);

            
        }

    });