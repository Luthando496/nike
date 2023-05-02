import {productAction} from '../store'
import { db } from '../../firebase'
import { doc, getDoc,collection ,getDocs} from "firebase/firestore";





export const getProducts = () =>
    async dispatch =>{
        try{

            dispatch(productAction.allProductsRequest())
            
            
                  const citiesCol = collection(db, 'collection');
                  const citySnapshot = await getDocs(citiesCol);
            
                  console.log(citySnapshot.docs.map(doc => doc.data()))


            dispatch(productAction.ProductsSuccess(citySnapshot.docs.map(doc => doc.data())))



        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(productAction.ProductsFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }
}


export const getDetails = (id) =>
    async dispatch =>{
        try{

            dispatch(productAction.allProductsRequest())

            
                const docRef =  doc(db, "collection", `${id}`);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                dispatch(productAction.SingleFetch(docSnap.data()))
                } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
                }

            // console.log(citySnapshot.docs.map(doc => doc.data()))




        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(productAction.SingleFetchFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }
}