import {View, Text, ScrollView, Alert} from "react-native"

import { Products } from "@/components/products"
import { LinkButton } from "@/components/link-button"

import { ProductCartProps, useCartStore } from "@/stores/store-cart"
import { formatCurrency } from "@/utils/functions/format-currency"


export default function Cart(){
    const cartStore = useCartStore()

    const total = formatCurrency(cartStore.products.reduce((total, product) => total +
        product.price * product.quantity, 0))


    function handleProductRemove(product:ProductCartProps){
        Alert.alert("Remover", `Deseja mesmo remover ${product.title} do carrinho?`,
        [
            {
                text: "Cancelar",
            },
            {
                text:"Remover",
                onPress: () => cartStore.remove(product.id)
            }
        ]
        
        )
        
    }
    return(

        <View className="flex-1 pt-8 mx-0">

            <Text> Seu carrinho </Text>

        <ScrollView>
            {cartStore.products.length >0 ? (
                <View className="flex-1 p-2">
                    {cartStore.products.map((product) => (
                        <Products 
                            key={product.id}  
                            data={product}
                            onPress={()=>handleProductRemove(product)}
                            />

                    ))}
                </View>
            ): (
                <Text> Seu carrinho esta vazio</Text>
            )}

            <View>
                <Text> Valor total: </Text>
                <Text>{total}</Text>
                <LinkButton href= "/" title={"Voltar"}></LinkButton>
            </View>
        </ScrollView>
       </View>
    )
}