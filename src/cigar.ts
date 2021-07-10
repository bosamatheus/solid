import TaxItem from './taxItem';

export default class Cigar extends TaxItem {
  constructor(description: string, price: number) {
    super('Cigar', description, price);
  }

  getTax = () => 0.5;
}
