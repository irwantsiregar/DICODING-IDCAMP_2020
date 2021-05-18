import '../components/ListMenuComponent';
import RestaurantSource from '../../data/restaurant-source';
import { createListItemTemplate, createCanNotAccessedTemplate } from '../templates/template-creator';

const ListMenu = {
  async render() {
    return `<list-menu></list-menu>`;
  },

  async afterRender() {
    const listItemContainer = document.querySelector('#card-restaurants');

    const listItem = await RestaurantSource.listMenu();
    listItemContainer.innerHTML = '';

    if (listItem.length > 0) {
      listItem.forEach((item) => {
        listItemContainer.innerHTML += createListItemTemplate(item);
      });
    } else {
      listItemContainer.innerHTML += createCanNotAccessedTemplate();
    }
  },
};

export default ListMenu;
