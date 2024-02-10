import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../store-cart";

export function add ( products: ProductCartProps[], newProduct: ProductProps){

    // Encontrando produtos iguais
    const SameProduct = products.find(({id})=> newProduct.id === id )


    //Se um produto igual é encontrado, verifica no array de produtos qual é o item e adiciona +1 na sua quantidade
    if (SameProduct){
        return products.map( (product)=> product.id === SameProduct.id 
        ? ( {...product, quantity: product.quantity + 1} )
        : product
        )
    }

    return [...products, {...newProduct, quantity: 1}]
}

export function remove (products: ProductCartProps[], productRemoveId: string){
    const updatedProducts = products.map((product) =>
        product.id === productRemoveId ?{
            ...product, 
            quantity: product.quantity > 1 ? product.quantity -1:0 
        } : product
    )
    
    //Retornando so os produtos que tem a quantidade acima de 0
    return updatedProducts.filter((product) => product.quantity>0)
}