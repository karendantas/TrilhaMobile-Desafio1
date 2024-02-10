import {View, Text, Image, Pressable, PressableProps} from "react-native"
import clsx from "clsx"

type ButtonProps = PressableProps & {
    title: string,
    isSelected?: boolean
} 

export function CategoryButtons({title, isSelected, ...rest}: ButtonProps){
    return (
        <View>
            <Pressable className={clsx("h-10 px-4 bg-lime-400 items-center justify-center rounded-md",
                            isSelected && "border-slate-900")} {...rest}>
                <Text className="text-slate-50" >{title}</Text>
            </Pressable>
        </View>
    )
}