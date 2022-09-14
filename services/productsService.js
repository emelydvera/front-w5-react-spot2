const normalize = require('./transforms/normalize');
const restclient = require('nordic/restclient')({
  timeout: 5000,
});

class ProductsService {
  static async getProducts(siteId, q = 'computadoras', limit = 10, offset = 0) {
    try {

      const response = await restclient.get(`/sites/${siteId}/search`, {
        params: {
          q,
          limit,
          offset
        }
      })
      return normalize(response.data.results)
    } catch (error) {
      console.log(error);
    }

  }

  static getProductDescription(id) {
    return restclient.get(`/items/${id}/description`)
      .then(response => response.data.plain_text || '')
      .catch(err => {
        return [];
        // throw new Error('FetchProductDescription error', err);
      });
  }

  static getProduct(id) {
    return restclient.get(`/items/${id}`)
      .then(response => {
        return response.data
      })
      .catch(err => ([]));
  }

}

module.exports = ProductsService;