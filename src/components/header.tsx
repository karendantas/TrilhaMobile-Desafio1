import { Feather } from "@expo/vector-icons"
import {View, Text, Image, TouchableOpacity} from "react-native"



interface HeaderProps{

    quantityCart:number
}

export default function Header ({ quantityCart}: HeaderProps){
 


    return (

        <View >
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

       
        </View>
    )
}