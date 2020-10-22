import urlHelper from '../util/urlHelper';

const url = "https://api2.shop.com/AffiliatePublisherNetwork/v2/categories";

const defaultParams = {
  publisherId: 'TEST',
  locale: 'en_US',
  site: ['shop'],
  shipCountry: ['US'],
  onlyMaProducts: false,
  api_key: api_key
}

class CategoryService  {
  constructor(searchParams = {}) {
    this.searchParams = {...defaultParams, ...searchParams};
  }

  getCategories(searchParams) {
    this.searchParams = {...defaultParams, ...searchParams};

    return fetch(this.getUrl())
      .then((response) => response.json()) 
      .then((json) => json.categories)
      .catch((error) => console.error(error))
  }

  getUrl() {
    return urlHelper(url, this.searchParams);
  }
}

export default new CategoryService();
