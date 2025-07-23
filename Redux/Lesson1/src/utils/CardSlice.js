import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddToCart: ((state, action) => {
            const item = action.payload
            const exist = state.items.find(id => id.id == item.id)
            console.log(exist);
            if (exist) {
                exist.quantity += 1
            } else {
                state.items.push({ ...item, quantity: 1 })
            }
        }),
        RemoveToCart: ((state, action) => {
            const removeItem = action.payload
            const removeExist = state.items.find(id => id.id == removeItem.id)
            if (removeExist) {
                if (removeExist.quantity > 1) {
                    removeExist.quantity -= 1
                } else {
                    state.items = state.items.filter(id => id.id !== removeItem.id)
                }
            }
        })
    }
})


export const { AddToCart } = cartSlice.actions
export const { RemoveToCart } = cartSlice.actions


export default cartSlice.reducer