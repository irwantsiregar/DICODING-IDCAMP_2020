import '../datacomponent/drink-list.js';
import '../datacomponent/search.js';
import DataOrigin from "../dataorigin/data-origin.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const drinkListElement = document.querySelector("drink-list");

    const onButtonSearchClicked = async () => {
        try {
          if (searchElement.value) {
            const result = await DataOrigin.searchDrink(searchElement.value);
            renderResult(result);
          }
          // else {
          //   const result = await DataSource.getData(drinkListElement.value);
          //   renderResult(result);
          // }
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        drinkListElement.drinks = results;
    };

    const fallbackResult = message => {
        drinkListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};


export default main;
