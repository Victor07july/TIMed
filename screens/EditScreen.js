import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/RemedyContext';
import RemedyPostForm from '../components/RemedyPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editRemedyPost } = useContext(Context);
    
    const remedyPost = state.find( //Pega o ID da publicação
        remedyPost => remedyPost.id === id
    );
    

    return (
        <RemedyPostForm
            initialValues={{ 
                title: remedyPost.title, 
                content: remedyPost.content, 
                text: remedyPost.text, 
                interval: remedyPost.interval, 
                addInfo: remedyPost.addInfo 
            }}
            onSubmit={(title, content, text, interval, addInfo) => {
                editRemedyPost(id, title, content, text, interval, addInfo, () => navigation.pop());
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;