/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
import API_ENDPOINT from '../globals/api-endpoint';

class RestoSource {
  static async homeResto() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoSource;
