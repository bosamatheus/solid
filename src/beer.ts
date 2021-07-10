import TaxItem from './taxItem';

export default class Beer extends TaxItem {
  constructor(description: string, price: number) {
    super('Beer', description, price);
  }

  getTax(date: Date) {
    const february = 1;
    if (date.getMonth() === february) return 0.1;
    return 0.2;
  }
}
