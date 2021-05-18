
class DataOrigin {
	static searchDrink(keyword) {
		return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			if (responseJson.drinks) {
				return Promise.resolve(responseJson.drinks);
			} else {
				return Promise.reject(`
  			<strong>${keyword}</strong> is not available, please find another drinks.
				`);
			}
		})

	}
}


export default DataOrigin;
