import urlHelper from '../util/urlHelper';

const url = "https://api2.shop.com/AffiliatePublisherNetwork/v2/products";

const defaultParams = {
  publisherId: 'TEST',
  locale: 'en_US',
  site: ['shop'],
  shipCountry: ['US'],
  perPage: 10,
  onlyMaProducts: false,
  api_key: api_key 
}

class ProductService  {
  constructor(searchParams = {}) {
    this.searchParams = {...defaultParams, ...searchParams};
  }

  getProducts(searchParams) {
    this.searchParams = {...defaultParams, ...searchParams};

    return fetch(this.getUrl())
      .then((response) => response.json()) 
      .then((json) => json.products)
      .catch((error) => console.error(error))
  }

  getUrl() {
    return urlHelper(url, this.searchParams);
  }
}

export default new ProductService();
