import {View, Text, Image, FlatList, SectionList} from "react-native"
import {Link} from "expo-router"
import { useRef, useState } from "react"

import Header from "../components/header"
import { CategoryButtons } from "@/components/category-button"


import { ProductProps, SECTIONS, STORE } from "@/utils/data/products"
import {Products} from "@/components/products"
import { useCartStore } from "@/stores/store-cart"



export default function Home(){
    const [category, setCategory] = useState(SECTIONS[0])
    const cartStore = useCartStore()

    const quantityCartItems = cartStore.products.reduce((total, product) => total + product.quantity, 0)

    const sectionListRef = useRef<SectionList<ProductProps>>(null)

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
           <Header quantityCart={quantityCartItems}/>
           
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
                    //Cada produto da lista esta evenlopado com um link para o arquivo [id].tsx
                    <Link href={`/product/${item.id}`} asChild>
                        <Products data={item}/>
                    </Link>
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