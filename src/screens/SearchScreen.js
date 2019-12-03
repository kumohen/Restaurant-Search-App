import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp"
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList"

const SearchScreen = () => {
    const [term,setTerm] = useState("")
    const [searchApi,results,error] = useResults();

    const filterResult = price =>{
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View style={{flex:1}}>
            <SearchBar term={term} onTermChange={ setTerm } 
            onTermSubmit={()=>  searchApi(term)}
            />
            { error ?  <Text>{error} </Text> : null }
         
            <ScrollView>
            <ResultsList  results={filterResult('$')} title="cost effective"  />
            <ResultsList results={filterResult('$$')} title="Bit pricier"  />
            <ResultsList results={filterResult('$$$')} title="Big spender"  />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default SearchScreen;