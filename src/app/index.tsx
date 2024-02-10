import {View, Text, Image, FlatList, SectionList} from "react-native"
import { useRef, useState } from "react"

import Header from "../components/header"
import { CategoryButtons } from "@/components/category-button"


import { SECTIONS, STORE } from "@/utils/data/products"
import {Products} from "@/components/products"



export default function Home(){
    const [category, setCategory] = useState(SECTIONS[0])

    const sectionListRef = useRef<SectionList>(null)

    function handleCategorySelected(categoryItem:string){
        setCategory(categoryItem)

        const sectionIndex = SECTIONS.findIndex(
            (category)=> category === categoryItem
        ) 

        if (sectionListRef.current){
            sectionListRef.current.scrollToLocation({
                animated: true,
                sectionIndex,
                itemIndex: 0,
            })
        }
    }

    return (
        <View className = "flex-1 pt-10"> 
           <Header quantityCart={2}/>
           
           {/* Buttons de categorias */}
           <FlatList 
           data={SECTIONS}
           keyExtractor={(item)=>item}
           renderItem={({item})=><CategoryButtons title={item} isSelected={item === category} onPress={ ()=>handleCategorySelected(item)}/>}
           horizontal
           contentContainerStyle={{gap:12, paddingHorizontal:20}}
           className="max-h-10 mt-5"
           />

           {/* Listagem de produtos  */}
            <SectionList
                ref = {sectionListRef}
                sections={STORE}
                keyExtractor={(items)=>items.id}
                renderItem={({item}) =>(
                    <Products data={item}/>
                )}    
                renderSectionHeader={({section:{title}}) =>(
                    <Text className="text-2xl font-bold pb-3 ml-3">{title}</Text>
                )}  
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:100}}
                className="flex-1 pt-5"            
            />

          
        </View>
        )
}