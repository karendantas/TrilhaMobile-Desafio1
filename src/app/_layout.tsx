import { SafeAreaView } from "react-native"
import{ Slot} from "expo-router"

export default function layout (){

    return (
        <SafeAreaView className ="flex-1">
            <Slot/>
        </SafeAreaView>
    )
} 