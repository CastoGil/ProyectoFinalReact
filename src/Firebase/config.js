import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = (categoryId) => {
  const queryCollection = collection(db, 'Electro');
  const queryFilter = categoryId ? query(queryCollection, where('category', '==', categoryId)) : queryCollection;

  return getDocs(queryFilter)
    .then(resp => resp.docs.map(product => ({ id: product.id, ...product.data() })));
};

export const getProductById = (productId) => {
  const queryDoc = doc(db, 'Electro', productId);

  return getDoc(queryDoc)
    .then(res => ({ id: res.id, ...res.data() }));
};

export const createOrder = (order) => {
  const ordersCollection = collection(db, 'orders');
  return addDoc(ordersCollection, order);
};
