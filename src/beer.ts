import Item from './item';

export default class Beer extends Item {
  constructor(description: string, price: number) {
    super('Beer', description, price);
  }

  calculateTaxes(): number {
    return this.price * 0.2;
  }
}
