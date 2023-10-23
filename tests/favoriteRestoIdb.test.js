/* eslint-disable max-len */
import {itActsAsFavoriteRestaurantModel} from './contracts/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});
