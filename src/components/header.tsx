import { Feather } from "@expo/vector-icons"
import {View, Text, Image, TouchableOpacity, FlatList} from "react-native"
import { CategoryButtons } from "./category-button"
import { SECTIONS } from "@/utils/data/products"
import { useState } from "react"


interface HeaderProps{
    title: string
    quantityCart:number
}

export default function Header ({title, quantityCart}: HeaderProps){
    const [category, setCategory] = useState('')

    function handleCategory(categoryItem:string){
        setCategory(categoryItem)
    }


    return (

        <View className="flex-1 ">
            <View className="flex-row justify-between items-center mx-5 pb-5">
                <Text className="text-lime-500 text-2xl font-bold"> Dorgival Mercadin </Text>

                <TouchableOpacity className="relative">

                    {quantityCart >0 && ( 
                    <View className="justify-center items-center bg-lime-500 h-4 w-4 rounded-full absolute left-3 -top-2">
                        <Text className="text-xs">{quantityCart}</Text>
                    </View> )
                    }
                <Feather name="shopping-cart" size={20}></Feather>
                </TouchableOpacity>

            </View>

            <Image source= {require("@/assets/header_image.jpg")} className=" h-40 w-full"/>

            <Text className="text-xl font-light pt-2">{title}</Text>


            {/* Category Buttons */}
            <FlatList 
                data={SECTIONS}
                keyExtractor={(item)=>item}
                renderItem={({item})=><CategoryButtons title={item} isSelected={item === category} onPress={ ()=>handleCategory(item)}/>}
                horizontal
                contentContainerStyle={{gap:12, paddingHorizontal:20}}
                className="max-h-10 mt-5"
            />

       
        </View>
    )
}