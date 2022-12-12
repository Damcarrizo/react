// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,
        collection, 
        getDocs, 
        doc, 
        getDoc,
        query,
        where,
        addDoc,
    } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD74Hn8HSfunGY_1uVlMsbJtKPVLbBBkmk",
  authDomain: "fornituras-5749f.firebaseapp.com",
  projectId: "fornituras-5749f",
  storageBucket: "fornituras-5749f.appspot.com",
  messagingSenderId: "728869268438",
  appId: "1:728869268438:web:3364a71dedca6308395277",
  measurementId: "G-J13KMVTMDC"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

export default async function getItems(){
    const colectionProductsRef = collection (DB, "productos")

    const documentSnapShot = await getDocs (colectionProductsRef);

    const documentsData = documentSnapShot.docs.map(doc=> {
        let docDataId = doc.data()
        docDataId.id = doc.id;
    return docDataId})

    return documentsData
}

export async function getSingleItem(idParam) {
    const docRef = doc(DB, "productos", idParam);
  
    const docSnapshot = await getDoc(docRef);
  
    const itemData = docSnapshot.data();
    itemData.id = docSnapshot.id;
  
    return itemData;
  }

  export async function getItemsByCategory(categoryParams){
    const collectionRef = collection(DB, "productos")
    const queryCat = query(collectionRef, where("categoria", "==",categoryParams))

    const documentSnapShot = await getDocs (queryCat);

    const documentsData = documentSnapShot.docs.map(doc=> {
        let docDataId = doc.data()
        docDataId.id = doc.id;
    return docDataId})

    return documentsData
}

export async function createOrder(order) {
    const collectionRef = collection(DB, "orders");
  
    const docOrder = await addDoc(collectionRef, order);
  
    return (docOrder.id);
  }