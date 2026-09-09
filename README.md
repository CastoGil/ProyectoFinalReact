# ElectroLibre

Aplicación e-commerce en React para catálogo de productos de tecnología, detalle de producto, carrito y generación de órdenes en Firebase.

## Stack

- React 18 + React Router
- React Bootstrap
- Firebase Firestore
- SweetAlert2

## Requisitos

- Node.js 18+
- npm 9+

## Configuración

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Crear archivo `.env` con las credenciales de Firebase:
   ```env
   REACT_APP_FIREBASE_API_KEY=
   REACT_APP_FIREBASE_AUTH_DOMAIN=
   REACT_APP_FIREBASE_PROJECT_ID=
   REACT_APP_FIREBASE_STORAGE_BUCKET=
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
   REACT_APP_FIREBASE_APP_ID=
   ```

## Scripts

- `npm start`: inicia la app en desarrollo.
- `npm test -- --watchAll=false`: corre tests una vez.
- `npm run build`: genera build de producción.

## Flujo principal

1. Listado de productos con filtro por categoría.
2. Vista de detalle con selección de cantidad.
3. Carrito con resumen de subtotales y total.
4. Checkout con datos del comprador y creación de orden en Firestore.
