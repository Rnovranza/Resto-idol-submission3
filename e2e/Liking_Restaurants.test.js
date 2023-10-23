/* eslint-disable max-len */
/* eslint-disable new-cap */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restaurants', ({I}) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurants', async ({I}) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.wait(2);

  I.seeElement('.restaurant__name a');
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(2);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);

  I.amOnPage('/#/favorite');
  I.wait(2);
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({I}) => {
  I.wait(2);
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.wait(2);

  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant__name a');
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(2);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);

  I.amOnPage('/#/favorite');
  I.wait(2);
  I.seeElement('.restaurant-item');
  const firstRestaurantlike = locate('.restaurant__name a').first();
  const favoritedRestaurantName= await I.grabTextFrom(firstRestaurantlike);
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
  I.click(firstRestaurantlike);
  I.wait(5);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);
  I.amOnPage('/#/favorite');
  I.wait(2);
  I.seeElement('.restaurant-item__not__found');
  const onLike = await I.grabTextFrom('.restaurant-item__not__found');

  assert.strictEqual(onLike, 'Tidak ada restoran untuk ditampilkan');
});


