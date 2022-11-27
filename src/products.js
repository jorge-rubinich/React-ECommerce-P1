 
import { doc, getDocs, getDoc, query, where } from 'firebase/firestore';
import { collectionProd, collectionCat, collectionOrders } from './services/firebaseConfig';

/* Leer DB productos*/
export const getProducts = async (catName) =>{
    let productosFiltrados = [];
    try {
      const res = await getDocs(collectionProd);
      const productos = res.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      if (catName) {
                productosFiltrados=productos.filter(producto =>
                           producto.categoria === catName);
            } else {  
                productosFiltrados=productos;  
            }
      return productosFiltrados
    } catch (error) {
      alert('Error al cargar los productos. Error: ' + error)
    }
  }  

  /* Leer DB categorias */
  export const getCategories = async () =>{
    let categories = [];
    try {
      const res = await getDocs(collectionCat)
      const categories = res.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      return categories
    } catch (error) {
      alert('Error al cargar las categorías. Error: ' + error)
    }
  }  

  /* Leer un producto de DB productos por id */
  export const getProduct = async (prodId) =>{
    try {
      const docref= doc(collectionProd, prodId);
      const res = await getDoc(docref);
      const producto = { id:res.id,...res.data()}

      return producto
    } catch (error) {
      alert('Error al cargar el producto id# '+prodId+'. Error: ' + error)
    }
  }  

  /* traer una orden de DB orders por orderId */
  export const getOrder = async (orderId) =>{
    try {
      const docref= doc(collectionOrders, orderId);
      const res = await getDoc(docref);
      const order = { id:res.id,...res.data()}

      return order
    } catch (error) {
      alert('Error al cargar la orden id# '+orderId+'. Error: ' + error)

    }
  }  

  