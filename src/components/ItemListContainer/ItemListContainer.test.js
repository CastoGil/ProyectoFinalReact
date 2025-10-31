import { render, screen } from '@testing-library/react';
import ItemListContainer from './ItemListContainer';
import { getProducts } from '../../Firebase/config';

jest.mock('../../Firebase/config', () => ({
  getProducts: jest.fn(),
}));

test('renders product list', async () => {
  getProducts.mockResolvedValue([{ id: '1', title: 'Product 1', price: 100, stock: 10 }]);
  render(<ItemListContainer />);
  const linkElement = await screen.findByText(/Lista de Productos/i);
  expect(linkElement).toBeInTheDocument();
});
