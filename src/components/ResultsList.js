import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import { withNavigation } from 'react-navigation';
import ResultDetails from "./ResultDetail";

const ResultsList = ({title,results,navigation}) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.constainer}>
            <Text style={styles.title}>{title}</Text>
            <FlatList  horizontal showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=> result.id}
            renderItem={({item})=>{
               
                    return (
                    <TouchableOpacity onPress={()=> navigation.navigate("Result",{id:item.id})}>   
                    <ResultDetails result={item} />
                    </TouchableOpacity>
                    )
             
            }}
            />    
        </View>
    );
};

const styles = StyleSheet.create({
    constainer:{
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15
    }
})

export default withNavigation(ResultsList);