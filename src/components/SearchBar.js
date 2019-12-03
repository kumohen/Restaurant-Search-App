import React from 'react';
import {View,TextInput,StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons"

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
            value={term}
            onChangeText={(newTerm)=> onTermChange(newTerm)}
            autoCapitalize="none" autoCorrect={false}
            onEndEditing={()=> onTermSubmit()}
            style={styles.inputStyle} placeholder="search" />
        </View>
    );
};

const styles = StyleSheet.create({
  background:{
      backgroundColor:"#F0EEEE",
      height:50,
      borderRadius:5,
      marginHorizontal:15,
      flexDirection:"row",
      marginBottom:10
  },
  inputStyle:{
      fontSize:18,
      flex:1
  },
  iconStyle:{
      fontSize:35,
      alignSelf:'center',
      marginHorizontal:15  
  }
})

export default SearchBar;