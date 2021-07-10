import Order from './order';
import Cigar from './cigar';
import Beer from './beer';
import Water from './water';

test('Should calculate order subtotal', () => {
  const order = new Order();
  order.addItem(new Cigar('Marlboro', 12));
  order.addItem(new Beer('Heineken', 5));
  order.addItem(new Water('Crystal', 3));

  const subtotal = order.getSubtotal();

  expect(subtotal).toBe(20);
});

test('Should calculate order taxes', () => {
  const order = new Order();
  order.addItem(new Cigar('Marlboro', 12));
  order.addItem(new Beer('Heineken', 5));
  order.addItem(new Water('Crystal', 3));

  const taxes = order.getTaxes();

  expect(taxes).toBe(7);
});

test('Should calculate order total', () => {
  const order = new Order();
  order.addItem(new Cigar('Marlboro', 12));
  order.addItem(new Beer('Heineken', 5));
  order.addItem(new Water('Crystal', 3));

  const taxes = order.getTotal();

  expect(taxes).toBe(27);
});
