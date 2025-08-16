import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function AcessarScreen( {navigation} ){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={styles.setaVoltar} source={require('../../assets/SetaVoltar.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subTitle}>Com E-mail e senha</Text>

            <Text style={styles.textEmail}>E-mail</Text>
            <TextInput style={styles.inputEmail} placeholder="Digite seu E-mail" />

            <Text style={styles.textSenha}>Senha</Text>

            <TextInput style={styles.inputSenha} placeholder="Digite sua senha"/>
            <TouchableOpacity style={styles.iconEye}>
                <Icon name={'visibility'} size={24}/>

            </TouchableOpacity>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.btn_checkbox}>

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

            <Image style={styles.google_logo} source={require('../../assets/Google.png')}/>

            <Image style={styles.facebook_logo} source={require('../../assets/Facebook.png')}/>
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 22,
        marginRight: 22,
        marginTop: 14,
    },

    container2: {
        flexDirection: 'row',
        marginBottom: 24,
    },

    btn_checkbox:{
        height: 22,
        width: 22,
        borderColor: '#14C871',
        borderWidth: 1, 
        borderRadius: 4,
    },

    container_Input: {
        flexDirection: 'row', 
    },

    title: {
        color: "#31404D",
        fontSize: 40,
        fontWeight: 600,
    },

    setaVoltar: {
        height: 24,
        width: 24,
        marginBottom: 12,
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
        height: 68,
        backgroundColor: '#E3E7F3',
        borderRadius: 4,
        marginBottom: 16,
        paddingLeft: 10,
        
    },

    inputSenha: {
        height: 68,
        backgroundColor: '#E3E7F3',
        borderRadius: 4,
        marginBottom: 16,
        paddingLeft: 10,
        marginBottom: 26,
    },

    textSenha: {
        fontWeight: 500,
        fontSize: 12,
    },

    iconEye: {
        position: "absolute",
        top: '36%',
        right: 18,
    },

    textLembrarSenha: {
        marginLeft: 8,
    },
    textEsqueciSenha: {
        marginLeft: '24%',
    },

    btn_green: {
        backgroundColor: '#14C871',
        height: 68,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },

    containerBtn: {
        flexDirection: 'row',
        gap: 18,

    },

    btn_white: {
        height: 68,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: '#14C871',
        borderWidth: 1,
        
    }
})
