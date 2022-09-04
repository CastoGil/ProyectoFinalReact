import Swal from 'sweetalert2'
import React, { useState, useContext} from "react";
const CartContext= React.createContext([]);

export const useCartContext =()=> useContext(CartContext);

const CartProvider=({children})=>{
    const [cart , setCart] = useState([]);
    
    const addProduct= (item, quantity)=>{
       if (isInCart(item.id)){
        setCart(cart.map(product =>{
            return product.id === item.id? {...product, quantity: product.quantity + quantity }: product
        })) 
        }else {
        setCart([...cart, {...item, quantity}])
    }
    }
    console.log('carrito:',cart)

    const totalProducts=()=> cart.reduce((acumulador, productoActual)=> acumulador + productoActual.quantity, 0);

    const totalPrice=()=>{ 
        return cart.reduce((prev, act)=> prev + act.quantity * act.price, 0)};
    
    const clearCar =() => setCart([])   
    const clearCart =() => { 
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Estas Seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SI, Deseo Eliminarlo!',
            cancelButtonText: 'No, Cancelo!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Borrado!',
                'Tus Productos han sido Eliminados',
                'success',
                setCart([])
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Continua Con la Compra :)',
                'error'
              )
            }
          })
        
        
        };

    const isInCart=(id) => cart.find(product =>product.id === id)? true:false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return(
        <CartContext.Provider value={{ clearCart, isInCart, removeProduct, addProduct, totalProducts,totalPrice, cart, clearCar}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;