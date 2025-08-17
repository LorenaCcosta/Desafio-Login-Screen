import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function AcessarScreen( {navigation} ){
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={styles.setaVoltar} source={require('../../assets/SetaVoltar.png')} />
            </TouchableOpacity>

            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subTitle}>Com E-mail e senha</Text>

            <Text style={styles.textEmail}>E-mail</Text>
            <TextInput style={styles.inputEmail}keyboardType="email-adress"  placeholder="Digite seu e-mail" onChangeText={setEmail}/>

            <Text style={styles.textSenha}>Senha</Text>

            <TextInput style={styles.inputSenha} placeholder="Digite sua senha" secureTextEntry={!mostrarSenha} onChangeText={setSenha}/>

            <TouchableOpacity style={styles.iconEye} onPress={() => setMostrarSenha(!mostrarSenha)}>
                <Icon name={mostrarSenha ? 'visibility': 'visibility-off'} size={24}/>

            </TouchableOpacity>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.checkbox} onPress={() => setCheckbox(!checkbox)}>
                <Icon name={checkbox ? 'check-box': 'check-box-outline-blank'} size={26} color={'#14C871'} />

            </TouchableOpacity>
                <Text style={styles.textLembrarSenha}>Lembrar senha</Text>

                <Text style={styles.textEsqueciSenha}>Esqueci minha senha</Text>
            </View>

            <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn_green} onPress={() => navigation.navigate('')}>
                <Text style={styles.text_btn1}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn_white} onPress={() => navigation.navigate('')}>
                <Text style={styles.text_btn2}>Cadastrar</Text>
            </TouchableOpacity>
            </View>

                <Text style={styles.textContinue}>Ou continue com</Text>

            <View style={styles.container_logos}>
                <Image style={styles.google_logo} source={require('../../assets/Google.png')}/>

                <Image style={styles.facebook_logo} source={require('../../assets/Facebook.png')}/>
            </View>
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 26,
    },

    container2: {
        flexDirection: 'row',
        marginBottom: 24,
    },

    checkbox:{
        top: '-10%'
    },

    container_Input: {
        flexDirection: 'row', 
    },

    title: {
        color: "#31404D",
        fontSize: 42,
        fontWeight: 600,
    },

    setaVoltar: {
        height: 24,
        width: 24,
        marginBottom: 14,
    },

    subTitle: {
        fontWeight: 500,
        color: "#31404D",
        marginBottom: 26,
    },
    textEmail: {
        fontWeight: 500,
        fontSize: 12,
    },

    inputEmail: {
        height: 62,
        backgroundColor: '#E3E7F3',
        borderRadius: 4,
        marginBottom: 16,
        paddingLeft: 10,
        
    },

    inputSenha: {
        height: 62,
        backgroundColor: '#E3E7F3',
        borderRadius: 4,
        marginBottom: 16,
        paddingLeft: 10,
        marginBottom: 26,
        paddingHorizontal: 60,
    },

    textSenha: {
        fontWeight: 500,
        fontSize: 12,
    },

    iconEye: {
        position: "absolute",
        top: '35%',
        right: 18,
    },

    textLembrarSenha: {
        marginLeft: 5,
        color: "#31404D",
        fontWeight: 500,
    },
    textEsqueciSenha: {
        marginLeft: '23%',
        color: "#31404D",
        fontWeight: 500,
    },

    btn_green: {
        backgroundColor: '#14C871',
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width:"48%",
    },

    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginBottom: 68,

    },

    btn_white: {
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: '#14C871',
        borderWidth: 1,
        width:"48%",
        backgroundColor: '#ffff',
        
    },

    text_btn2: {
        fontWeight: 500,
        color: "#31404D",
    },

    text_btn1: {
        color: "#ffff",
        fontWeight: 500,
    },

    textContinue: {
        textAlign: 'center',
        fontWeight: 500,
        color: '#31404D',
        marginBottom: 28,
    },

    container_logos: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 34,
    },
})
