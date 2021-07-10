import Item from './item';

export default class Cigar extends Item {
  constructor(description: string, price: number) {
    super('Cigar', description, price);
  }

  calculateTaxes(): number {
    return this.price * 0.5;
  }
}
