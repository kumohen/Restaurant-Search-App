import React from 'react';
import {View,Text,StyleSheet,Image} from "react-native";

const ResultDetails = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri:result.image_url }} />
            <Text style={styles.textStyle}>{result.name}</Text>
            <Text>{result.rating} Stars,{result.review_count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
   image:{
       width:200,
       height:120,
       borderRadius:4,
       marginBottom:4
   },
   textStyle:{
       fontWeight:"bold",
      
   }
})

export default ResultDetails;