import Swal from 'sweetalert2';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CART_STORAGE_KEY = 'electrolibre_cart';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const getStoredCart = () => {
  try {
    const rawValue = localStorage.getItem(CART_STORAGE_KEY);
    if (!rawValue) {
      return [];
    }
    const parsedValue = JSON.parse(rawValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getStoredCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const isInCart = useCallback((id) => cart.some(product => product.id === id), [cart]);

  const addProduct = useCallback((item, quantity) => {
    setCart(prevCart => {
      if (prevCart.some(product => product.id === item.id)) {
        return prevCart.map(product => (
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        ));
      }
      return [...prevCart, { ...item, quantity }];
    });
  }, []);

  const totalProducts = useCallback(
    () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0),
    [cart]
  );

  const totalPrice = useCallback(
    () => cart.reduce((prev, act) => prev + act.quantity * act.price, 0),
    [cart]
  );

  const clearCart = useCallback(() => setCart([]), []);

  const clearCartWithAlert = useCallback(async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    const result = await swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar carrito',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    });

    if (result.isConfirmed) {
      clearCart();
      await swalWithBootstrapButtons.fire('Eliminado', 'Tus productos fueron eliminados.', 'success');
    }
  }, [clearCart]);

  const removeProduct = useCallback((id) => {
    setCart(prevCart => prevCart.filter(product => product.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      clearCartWithAlert,
      isInCart,
      removeProduct,
      addProduct,
      totalProducts,
      totalPrice,
      cart,
      clearCart
    }),
    [addProduct, cart, clearCart, clearCartWithAlert, isInCart, removeProduct, totalPrice, totalProducts]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;