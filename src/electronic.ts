import Item from './item';

export default class Electronic extends Item {
  constructor(description: string, price: number) {
    super('Electronic', description, price);
  }

  calculateTaxes(): number {
    return this.price * 0.4;
  }
}
