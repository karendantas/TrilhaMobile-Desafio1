import { ProductProps } from "@/utils/data/products";

import { create } from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as cartInMemory from "./helpers/cart_in_memory"

export type ProductCartProps = ProductProps & {
    quantity: number
}

type StateProps = {
    products: ProductCartProps[],
    add: (product: ProductProps) => void
    remove: (productID:string) => void

}

export const useCartStore = create (
    persist<StateProps> ( ( set) => ({
    products: [],
    add: ( product: ProductProps) => 
        set ((state) => ({
            products: cartInMemory.add(state.products, product)
        })),
    
    remove: (productId:string) =>
        set((state) => ({
            products: cartInMemory.remove(state.products, productId),
        }))
}), {
    name: "deafio1native:cart",
    storage: createJSONStorage(()=> AsyncStorage)
}))