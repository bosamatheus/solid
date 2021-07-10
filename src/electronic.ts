import TaxItem from './taxItem';

export default class Electronic extends TaxItem {
  constructor(description: string, price: number) {
    super('Electronic', description, price);
  }

  getTax = () => 0.4;
}
