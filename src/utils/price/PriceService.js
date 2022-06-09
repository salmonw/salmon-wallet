const {getIdBySymbol} = require('./CoinsMap')

const BASE_ENDPOINT = 'https://api.coingecko.com';
const PRICE_ENDPOINT = `${BASE_ENDPOINT}/api/v3/simple/price`;

class PriceService {  

  constructor() {
    this.cache = {};
  }

  async getPriceBySymbol(symbol) {
    if (this.cache[symbol] === undefined) {
      const id = getIdBySymbol(symbol);      
      const result = await fetch(`${PRICE_ENDPOINT}?ids=${id}&vs_currencies=usd`);
      const priceInfo = await result.json();
      const price = priceInfo[id] ? priceInfo[id].usd : null;      
      this.cache[symbol] = price;            
      return price;
    }
    else{
      return this.cache[symbol];
    }
  }

}

export const priceService = new PriceService();

