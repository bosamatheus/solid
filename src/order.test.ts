import Order from './order';
import Cigar from './cigar';
import Beer from './beer';
import Water from './water';
import Electronic from './electronic';

test('Should calculate order subtotal', () => {
  const order = new Order();
  order.addItem(new Cigar('Marlboro', 12));
  order.addItem(new Beer('Heineken', 5));
  order.addItem(new Water('Crystal', 3));
  order.addItem(new Electronic('Headphone', 50));

  const subtotal = order.getSubtotal();

  expect(subtotal).toBe(70);
});

test('Should calculate order taxes', () => {
  const order = new Order();
  order.addItem(new Cigar('Marlboro', 12)); // 6.00
  order.addItem(new Beer('Heineken', 5)); // 1.00
  order.addItem(new Water('Crystal', 3)); // 0.00
  order.addItem(new Electronic('Headphone', 50)); // 20.00

  const taxes = order.getTaxes();

  expect(taxes).toBe(27);
});

test('Should calculate order total', () => {
  const order = new Order();
  order.addItem(new Cigar('Marlboro', 12)); // 18.00
  order.addItem(new Beer('Heineken', 5)); // 6.00
  order.addItem(new Water('Crystal', 3)); // 3.00
  order.addItem(new Electronic('Headphone', 50)); // 70.00

  const taxes = order.getTotal();

  expect(taxes).toBe(97);
});
