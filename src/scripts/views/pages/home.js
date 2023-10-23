/* eslint-disable max-len */

import RestoSource from '../../data/resto-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';

/* eslint-disable no-unused-vars */
const Home = {
  async render() {
    return `
        <div class="content">
          <h2 class="content__heading">Explore Restaurants</h2>
          <div id="restaurants" class="restaurants">
  
          </div>
        </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestoSource.homeResto();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
