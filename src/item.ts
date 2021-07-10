/*
  Liskov Substitution Principle
  If S is a subclass of T, then objects of type T can be replaced with instances of S without breaking the code.
  In this example:
  - S: Cigar, Beer, Water, and Electronic classes
  - T: Item class
*/
export default abstract class Item {
  category: string;
  description: string;
  price: number;

  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }
}
