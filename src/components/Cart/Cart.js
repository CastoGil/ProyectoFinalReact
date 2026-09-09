import "./Cart.css"
import { useCartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import ItemCart from "../ItemCart/ItemCart"
import { createOrder } from "../../Firebase/config"
import Swal from 'sweetalert2'
import { useMemo, useState } from "react"

export default function Cart() {
  const {cart , totalPrice, clearCart, clearCartWithAlert}= useCartContext();
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isValidated, setIsValidated] = useState(false)

    const order = useMemo(() => ({
      buyer: {
        name: buyer.name.trim(),
        email: buyer.email.trim(),
        phone: buyer.phone.trim(),
        address: buyer.address.trim()
      },
      items: cart.map(product=>({id: product.id, title: product.title, price: product.price , quantity: product.quantity})) ,
      total: totalPrice() ,
    }), [buyer, cart, totalPrice])

    const isBuyerDataValid = () => {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(order.buyer.email)
      return Boolean(order.buyer.name && order.buyer.phone && order.buyer.address && isEmailValid)
    }

    const fieldErrors = useMemo(() => ({
      name: !order.buyer.name ? 'Ingresá tu nombre y apellido.' : '',
      email: !order.buyer.email
        ? 'Ingresá tu email.'
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(order.buyer.email)
          ? ''
          : 'Ingresá un email válido.',
      phone: !order.buyer.phone ? 'Ingresá un teléfono de contacto.' : '',
      address: !order.buyer.address ? 'Ingresá una dirección.' : ''
    }), [order.buyer.address, order.buyer.email, order.buyer.name, order.buyer.phone]);

    const handleInputChange = (event) => {
      const { name, value } = event.target
      setBuyer(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
      setIsValidated(true)
      if (!isBuyerDataValid()) {
        return
      }

      setIsSubmitting(true)
      try {
        const {id} = await createOrder(order)
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title:'Tu compra fue procesada correctamente',
          text: `Código de orden: ${id}`,
          footer: '<p>Te enviaremos un correo con todos los detalles.</p>',
          timer: 7500
        })
        clearCart()
        setBuyer({ name: '', email: '', phone: '', address: '' })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'No pudimos generar la orden',
          text: error?.message || 'Intentá nuevamente en unos minutos.'
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  
  if (cart.length === 0){
      return(
        <>
        <div className="cart">
          <span className="carrito">No hay Productos en el Carrito!!!..</span>
          <Link to='/'><Button variant="info">Seleccionar Productos</Button></Link>
          </div>
        </>
      )
    }

    return(
       <>
       <div className="cart">
        <span className="carrito">Carrito</span>

          { cart.map(product=><ItemCart key={product.id} product={product}/>)
          }
                <span className="carrito"> TOTAL : ${totalPrice()} </span>
                <Link to='/'><Button variant="info">Seguir Comprando 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg></Button></Link>

                <Form className="checkout-form" noValidate onSubmit={handleSubmit}>
                 <h2 className="checkout-title">Datos para finalizar compra</h2>
                 <Form.Group className="mb-2" controlId="checkoutName">
                   <Form.Control
                     type="text"
                     name="name"
                     value={buyer.name}
                     placeholder="Nombre y apellido"
                     onChange={handleInputChange}
                     isInvalid={isValidated && Boolean(fieldErrors.name)}
                     required
                   />
                   <Form.Control.Feedback type="invalid">{fieldErrors.name}</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group className="mb-2" controlId="checkoutEmail">
                   <Form.Control
                     type="email"
                     name="email"
                     value={buyer.email}
                     placeholder="Email"
                     onChange={handleInputChange}
                     isInvalid={isValidated && Boolean(fieldErrors.email)}
                     required
                   />
                   <Form.Control.Feedback type="invalid">{fieldErrors.email}</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group className="mb-2" controlId="checkoutPhone">
                   <Form.Control
                     type="tel"
                     name="phone"
                     value={buyer.phone}
                     placeholder="Teléfono"
                     onChange={handleInputChange}
                     isInvalid={isValidated && Boolean(fieldErrors.phone)}
                     required
                   />
                   <Form.Control.Feedback type="invalid">{fieldErrors.phone}</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="checkoutAddress">
                   <Form.Control
                     type="text"
                     name="address"
                     value={buyer.address}
                     placeholder="Dirección"
                     onChange={handleInputChange}
                     isInvalid={isValidated && Boolean(fieldErrors.address)}
                     required
                   />
                   <Form.Control.Feedback type="invalid">{fieldErrors.address}</Form.Control.Feedback>
                 </Form.Group>
                 <Button variant="info" type="submit" disabled={isSubmitting}>
                 {isSubmitting ? 'Procesando...' : 'Emitir Compra'}
                 </Button>
                </Form>
                <Button variant="info" onClick={clearCartWithAlert}>Eliminar Carrito</Button>
       </div>
       </>
    )
    
}