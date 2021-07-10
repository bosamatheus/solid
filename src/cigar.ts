import TaxItem from './taxItem';

export default class Cigar extends TaxItem {
  constructor(description: string, price: number) {
    super('Cigar', description, price);
  }

  getTax() { 
    return 0.5
  };
}
