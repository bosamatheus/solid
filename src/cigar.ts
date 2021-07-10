import Item from './item';

export default class Cigar extends Item {
  constructor(description: string, price: number) {
    super('Cigar', description, price);
  }

  getTax = () => 0.5;
}
