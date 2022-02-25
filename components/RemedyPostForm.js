//Como EditScreen e CreateScreen vao possuir o mesmo conteudo
//O codigo do formulário do remédio ficara aqui para ser usado..
//Por essas 2 telas, evitando código repetido
import React, { useState, useContext } from 'react'
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer';

const RemedyPostForm = ({ onSubmit, initialValues }) => {
    //Começa aqui o código para gerenciar o "DateTimePicker"
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState(initialValues.text);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        //setText(fDate + '\n' + fTime)
        setText(fDate)
        
        console.log(fDate + ' (' + fTime + ')')
        //console.log(`Testando a data ${text}`)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    };
    //Termina aqui o código para gerenciar o DateTimePicker

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    const [interval, setInterval] = useState(initialValues.interval);
    const [addInfo, setAddInfo] = useState(initialValues.addInfo);

    return (
        <ScrollView>
            <View>
                <Text style={styles.label}>Nome do remédio</Text>
                <Input
                    style={styles.input}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
                <Text style={styles.label}>Quantidade</Text>
                <Input
                    style={styles.input}
                    value={content}
                    onChangeText={(text) => setContent(text)}
                />
                <Text style={styles.label}>Intervalo</Text>
                <Input
                    placeholder="Dias, horas..."
                    style={styles.input}
                    value={interval}
                    onChangeText={(text) => setInterval(text)}
                />
                <Text style={styles.label}>Informações adicionais</Text>
                <Input
                    style={styles.input}
                    value={addInfo}
                    onChangeText={(text) => setAddInfo(text)}
                    //placeholder="Composição etc"
                />
            
                <View style={{ margin:20 }}>
                    <Button
                        title="Data de vencimento"
                        onPress={() => showMode('date')}>
                    </Button>
                </View>
                    <Input
                        style={styles.dateLabel}
                        placeholder='Insira a data de vencimento'
                        value={text}
                    />
                {show && (<DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour='default'
                    display='default'
                    onChange={onChange}
                />)}
            
                <Spacer>
                    <Button
                        title="Salvar remédio"
                        onPress={
                            () => onSubmit(title, content, text, interval, addInfo)
                        }
                    />
                </Spacer>
            
            </View>
        </ScrollView>
    );
};
//Propriedade para dar valores padrão as propriedades, caso não haja valor
RemedyPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
        text: '',
        interval: '',
        addInfo: ''
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5,
    },
    dateLabel: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5,
        borderWidth: 1,
        padding: 5,
        borderColor: 'black'
    }
});

export default RemedyPostForm;
