import React from 'react'
import { useCartContext } from '../Context/CartContext'
import './ItemCart.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2'
const ItemCart=React.memo(({product})=>{
    const { removeProduct }= useCartContext();
    const handleRemove = async () => {
      const result = await Swal.fire({
        title: '¿Seguro que querés eliminar este producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      });

      if (result.isConfirmed) {
        removeProduct(product.id);
        await Swal.fire('Eliminado', 'Tu producto fue eliminado.', 'success');
      }
    };

    return(
        <div className="tarjet">
          <Card style={{ width: '28rem' }}>
          <Card.Img variant="top" src={product.img} alt={product.title} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
            Cantidad: {product.quantity}
            </Card.Text>
            <Card.Text>
            Precio: ${product.price}
            </Card.Text>
            <Card.Text>
            Subtotal: ${product.quantity * product.price}
            </Card.Text>
            <Button onClick={handleRemove}>Eliminar</Button>
          </Card.Body>
        </Card></div>
    )
})
export default ItemCart;