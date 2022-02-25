import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-elements'
import { Context } from "../context/RemedyContext";
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = ({ navigation }) => {
    //Quando chamamos useContext, ele nos da qualquer dado adicionado na proriedade value em RemedyPost
    const { state, deleteRemedyPost } = useContext(Context);
    

    return (
        <View>
            <Text style={styles.welcome}>Seja bem vindo ao TI Med+</Text>
            <FlatList 
                data={state} //data == blogpost
                keyExtractor={(remedyPost) => remedyPost.title} //Identificador dos remedios onde title é o ID unico
                renderItem={({ item }) => { //item == blogpost/data
                    return ( //{item.id} depois do item.title
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text> 
                                <TouchableOpacity onPress={() => console.log(deleteRemedyPost(item.id))}>
                                <Feather name="trash" style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }} 
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    welcome: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        fontSize: 24
    }
});

export default IndexScreen;