export const createHeader = (city) => {
    const header = document.createElement('header');
    const headerContainer = document.createElement('div');
    const headerCity = document.createElement('div');
    const headerUnits = document.createElement('div');
    const cityChange = document.createElement('button');
    const cityLocation = document.createElement('button');
    const cityName = document.createElement('h1');
    const unitsC = document.createElement('button');
    const unitsF = document.createElement('button');
    const cityInner = document.createElement('div');
    const searchBlock = document.createElement('div');
    const searchInput = document.createElement('input');
    const searchBtn = document.createElement('button');
    const errorBlock = document.createElement('p');

    header.classList.add('header');
    headerContainer.classList.add('container', 'header__container');
    headerCity.classList.add('header__city');
    headerUnits.classList.add('header__units');
    cityChange.classList.add('city__change', 'btn-reset');
    cityLocation.classList.add('city__location', 'btn-reset');
    cityName.classList.add('city__name');
    cityInner.classList.add('city__inner');
    unitsC.classList.add('units__c', 'btn-reset', 'unit-current');
    unitsF.classList.add('units__f', 'btn-reset');
    searchBlock.classList.add('search');
    searchInput.classList.add('search_input');
    searchBtn.classList.add('search_btn');
    errorBlock.classList.add('search__error');

    searchBtn.textContent = 'ok';
    cityName.textContent = city;
    cityChange.textContent = 'Сменить город';
    cityLocation.textContent = 'Мое местоположение';
    unitsC.textContent = 'C';
    unitsF.textContent = 'F';

    header.append(headerContainer);
    headerContainer.append(headerCity, headerUnits);
    cityInner.append(cityChange, cityLocation);
    headerCity.append(cityName, cityInner);
    headerUnits.append(unitsC, unitsF);

    return header;
}