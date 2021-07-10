import Item from './item';
import TaxItem from './taxItem';

export default class Order {
  code: string;
  items: Item[];

  constructor() {
    this.code = `${Math.floor(Math.random() * 100000)}`;
    this.items = [];
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  getSubtotal(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  getTaxes(date: Date): number {
    return this.items.reduce((acc, item) => {
      if (item instanceof TaxItem) return acc + item.calculateTaxes(date);
      return acc;
    }, 0);
  }

  getTotal(date: Date): number {
    return this.getSubtotal() + this.getTaxes(date);
  }
}
