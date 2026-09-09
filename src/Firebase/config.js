import { getApp, getApps, initializeApp } from 'firebase/app';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

const requiredEnvVars = [
  'REACT_APP_FIREBASE_API_KEY',
  'REACT_APP_FIREBASE_AUTH_DOMAIN',
  'REACT_APP_FIREBASE_PROJECT_ID',
  'REACT_APP_FIREBASE_STORAGE_BUCKET',
  'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
  'REACT_APP_FIREBASE_APP_ID'
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
if (missingEnvVars.length > 0) {
  throw new Error(`Missing Firebase environment variables: ${missingEnvVars.join(', ')}`);
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const mapFirebaseError = (error, fallbackMessage) => {
  const code = error?.code || 'unknown';
  const message = error?.message || fallbackMessage;
  return new Error(`${fallbackMessage} (code: ${code}) ${message}`);
};

export const getProducts = async (categoryId) => {
  try {
    const productsRef = collection(db, 'Electro');
    const productsQuery = categoryId ? query(productsRef, where('category', '==', categoryId)) : productsRef;
    const response = await getDocs(productsQuery);
    return response.docs.map(product => ({ id: product.id, ...product.data() }));
  } catch (error) {
    throw mapFirebaseError(error, 'No se pudieron obtener los productos');
  }
};

export const getProductById = async (productId) => {
  try {
    const productRef = doc(db, 'Electro', productId);
    const response = await getDoc(productRef);
    if (!response.exists()) {
      throw new Error('Producto no encontrado');
    }
    return { id: response.id, ...response.data() };
  } catch (error) {
    throw mapFirebaseError(error, 'No se pudo obtener el producto');
  }
};

export const createOrder = async (order) => {
  try {
    const ordersCollection = collection(db, 'orders');
    return await addDoc(ordersCollection, { ...order, createdAt: new Date().toISOString() });
  } catch (error) {
    throw mapFirebaseError(error, 'No se pudo crear la orden');
  }
};
