import {View, Text, Image} from "react-native"
import Header from "../components/header"


export default function Home(){
    return (
        <View className = "flex-1 pt-8"> 
           <Header title={"Faça suas compras aqui!"} quantityCart={2}></Header>
        </View>
    )
}