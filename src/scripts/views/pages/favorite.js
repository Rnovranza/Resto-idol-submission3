import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {createRestaurantItemTemplate} from '../templates/template-creator';

/* eslint-disable max-len */
const Favorite = {
  async render() {
    return `
          <div id="query" class="content">
            <h2 class="content__heading">Favorite Restaurant</h2>
            <div id="restaurants" class="restaurants"></div>
          </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = `
          <div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>
        `;
    }
  },
};

export default Favorite;
