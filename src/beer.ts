import TaxItem from './taxItem';

export default class Beer extends TaxItem {
  constructor(description: string, price: number) {
    super('Beer', description, price);
  }

  getTax = () => 0.2;
}
