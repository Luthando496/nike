import {configureStore,createSlice} from '@reduxjs/toolkit';




const productSlice = createSlice({
    name:'product',
    initialState:{products:[],loading:false,error:null,product:null },
    reducers:{
        allProductsRequest(state, action){
            state.loading =true
        },
        ProductsSuccess(state, action){
            state.products = action.payload
            state.loading =false
        },
        ProductsFail(state, action){
            state.er =action.payload
            state.loading =false
        },
        SingleFetch(state, action){
            state.product = action.payload
            state.loading =false
        },
        SingleFetchFail(state, action){
            state.error = action.payload
            state.loading =false
        },

    }
})









export const productAction = productSlice.actions



const store = configureStore({
    reducer:{
        prod:productSlice.reducer,

    }
})


export default store