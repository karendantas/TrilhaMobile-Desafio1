import {View, Text, Image, ImageProps, TouchableOpacity, TouchableOpacityProps} from "react-native"
import { forwardRef } from "react"

type ProductDataProps = {
    title: string,
    description: string,
    thumbnail: ImageProps
}

type ProductsProps = TouchableOpacityProps & {
    data: ProductDataProps
}


export const Products = forwardRef<TouchableOpacity, ProductsProps> (
    
    ({data, ...rest}, ref) => {
    return (

        <TouchableOpacity className="flex-row items-center pb-4 ml-3"{...rest}>
            <Image className="rounded-md h-20 w-20" source={data.thumbnail}></Image>

            <View className="flex-1 ml-3 justify-center">
                <Text className="text-base font-bold"> {data.title} </Text>
                <Text className="leading-5 mt-0.5 text-xs">{data.description}</Text>
            </View>
        </TouchableOpacity>
    )   
})