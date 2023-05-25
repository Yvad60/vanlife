import { doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import { vansCollectionRef } from "./firebaseConfig";

export const getVans = async () => {
  const querySnapshot = await getDocs(vansCollectionRef);
  const vans = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
};

export const getHostVans = async () => {
  const vansQuery = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(vansQuery);
  const vans = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
};

export const getSingleVan = async (id) => {
  const docRef = doc(vansCollectionRef, id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
};
