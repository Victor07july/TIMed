//Tela para adicionar remédios
import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Context } from '../context/RemedyContext';
import RemedyPostForm from "../components/RemedyPostForm";

const CreateScreen = ({ navigation }) => {
    const { addRemedyPost } = useContext(Context);

    return (
        <RemedyPostForm 
            onSubmit={(title, content, text, interval, addInfo) => {
                addRemedyPost(title, content, text, interval, addInfo, navigation.navigate('Index'));
            }}
        />
    );
};

const styles = StyleSheet.create({
   
});

export default CreateScreen;
