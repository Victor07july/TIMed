//Permite navegar para a tela de cada remédio
import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from '../context/RemedyContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const remedyPost = state.find((remedyPost) => remedyPost.id === navigation.getParam('id'));

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome do remédio: {remedyPost.title}</Text>
            <Text style={styles.text}>Quantidade: {remedyPost.content}</Text>
            <Text style={styles.text}>Data de vencimento: {remedyPost.date}</Text>
            <Text style={styles.text}>Intervalo: {remedyPost.interval}</Text>
            <Text style={styles.text}>Informações adicionais: {remedyPost.addInfo}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    //Customiza o cabeçalho da tela
    return {
        headerRight: (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <EvilIcons name="pencil" size={35}/>
        </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 18,
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 5
    }
});

export default ShowScreen;