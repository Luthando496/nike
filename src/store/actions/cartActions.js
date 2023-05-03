import {cartActions} from '../cartSlice'


export const addToCart = (item) => (dispatch) => {
        console.log(item)
        dispatch(cartActions.addToCart(item))
}

export const clearCartAction = () => (dispatch) => {
    dispatch(cartActions.clearCart())


}

export const RemoveItem = (id) => (dispatch) => {
    dispatch(cartActions.RemoveItem(id))
}