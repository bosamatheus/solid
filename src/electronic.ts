import Item from './item';

export default class Electronic extends Item {
  constructor(description: string, price: number) {
    super('Electronic', description, price);
  }

  getTax = () => 0.4;
}
