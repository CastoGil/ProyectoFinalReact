import { render, screen, waitFor } from '@testing-library/react';
import ItemListContainer from './ItemListContainer';
import { getProducts } from '../../Firebase/config';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../Firebase/config', () => ({
  getProducts: jest.fn(),
}));

test('renders product list', async () => {
  getProducts.mockResolvedValue([{ id: '1', title: 'Product 1', price: 100, stock: 10 }]);
  render(
    <MemoryRouter>
      <ItemListContainer />
    </MemoryRouter>
  );
  const linkElement = await screen.findByText(/Lista de Productos/i);
  expect(linkElement).toBeInTheDocument();
  await waitFor(() => expect(screen.queryByText(/Cargando productos/i)).not.toBeInTheDocument());
});
