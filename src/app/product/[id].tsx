import { PRODUCTS } from "@/utils/data/products"
import {useLocalSearchParams, useNavigation, Redirect} from "expo-router"

import {View, Text, Image} from "react-native"

import { formatCurrency } from "@/utils/functions/format-currency"

import { Button } from "@/components/button"
import { LinkButton } from "@/components/link-button"

import { useCartStore } from "@/stores/store-cart"

import { Feather } from "@expo/vector-icons"


export default function ProductsDetails(){
    const cartStore = useCartStore()
    const navigation = useNavigation()
    
    //capturando o id passando no renderItem da sectionList
    const {id} = useLocalSearchParams()
    const product = PRODUCTS.find((item) => item.id === id)

    function handleAddToCart(){
        if (product){
            cartStore.add(product)
            navigation.goBack()
        }
    }

    if (!product){
        return <Redirect href="/"/>
    }

    return (
        <View className="flex-1">
            <Image source={product.thumbnail} 
                className="w-full h-52"
                resizeMode="cover"
            />
            <Text className="text-slate-50"> {product.title} </Text>
            <Text className="text-slate-50"> {formatCurrency(product.price)} </Text>
            <Text className="text-slate-50"> {product.description}</Text>


            <View>
                <Button onPress={handleAddToCart}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20}/> 
                    </Button.Icon>
                    
                    <Button.Text> Adicionar ao carrinho </Button.Text>
                </Button>

                <LinkButton title={"Voltar ao cardápio"} href="/"/>
            </View>
        </View>
    )
}