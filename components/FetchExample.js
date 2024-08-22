import { useEffect, useState } from "react";
import { documentStyles } from "../util/style";
import LittleLemonHeader from "./LittleLemonHeader";
import { FlatList, View, Text } from "react-native";


export default function FetchExample(){

    const url = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json';
    const [data, setData] = useState([]);
    const Separator = () => <View style={documentStyles.separator} />

    async function fetchMenu(){
        try{
            const response = await fetch(url);
            const json = await response.json();
            setData(json.menu);
        }
        catch(error){
           console.log(error);
        }
    }

    useEffect(()=>{
        fetchMenu();
    },[]);

    function renderItem({item}) {
        return <>
        <View style={documentStyles.viewMenuItem}>
            <Text style={documentStyles.menuItem}>{item.title}</Text>
            <Text style={documentStyles.menuItem}>${item.price}</Text>
        </View>
        </>
    }

    return <View style={documentStyles.container}>
        <LittleLemonHeader/>
        <Text style={documentStyles.headerTitle}>Little Lemon Menu</Text>
        <FlatList
        data = {data}
        renderItem = {renderItem}
        keyExtractor={ item => item.id}
        itemSeparatorComponent={Separator}
        />
    </View>;
}