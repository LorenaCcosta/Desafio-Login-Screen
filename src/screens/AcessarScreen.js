import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function AcessarScreen( {navigation} ){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={styles.SetaVoltar} source={require('../../assets/SetaVoltar.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subTitle}>Com E-mail e senha</Text>

            <Text style={styles.textEmail}>E-mail</Text>
            <TextInput style={styles.InputEmail} placeholder="Digite seu E-mail" />

            <Text style={styles.textSenha}>Senha</Text>
            <View style={styles.container_Input}>
                <TextInput style={styles.InputSenha} placeholder="Digite sua senha"/>
                <Ionicons name="eye-outline" size={20} />
            </View>

            <TouchableOpacity style={styles.btn_checkbox}>
            </TouchableOpacity>

            <Text style={styles.textLembrarSenha}>Lembrar senha</Text>

            <Text style={styles.textEsqueciSenha}>Esqueci minha senha</Text>

            <TouchableOpacity style={styles.btn_green} onPress={() => navigation.navigate('')}>
                <Text style={styles.text_btn1}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn_white} onPress={() => navigation.navigate('')}>
                <Text style={styles.text_btn2}>Cadastrar</Text>
            </TouchableOpacity>

            <Text style={styles.textContinue}>Ou continue com</Text>

            <Image style={styles.google_logo} source={require('../../assets/Google.png')}/>

            <Image style={styles.facebook_logo} source={require('../../assets/Facebook.png')}/>
            










            {/* <Image style={styles.casual_dog} source={require('../../assets/casual_dog.png')}/>

            <Text style={styles.text1}>Ótimo dia!</Text>

            <Text style={styles.text2}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.button_green} onPress={() => navigation.navigate('')}>
                <Image style={styles.google_logo} source={require('../../assets/Google.png')}/>
                <Text style={styles.text_button1}>Como deseja acessar?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_white} onPress={() => navigation.navigate('')}>
                <Text style={styles.text_button2}>Outras opções</Text>
            </TouchableOpacity> */}
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

    container_Input: {
        flexDirection: 'row', 
    },

    title: {
        color: "#31404D",
        fontSize: 40,
        fontWeight: 600,
    },

    SetaVoltar: {
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

    InputEmail: {
        height: 68,
        backgroundColor: '#E3E7F3',
        borderRadius: 4,
        marginBottom: 16,
        paddingLeft: 10,
        
    },

    InputSenha: {
        height: 68,
        backgroundColor: '#E3E7F3',
        borderRadius: 4,
        marginBottom: 16,
        paddingLeft: 10,
        
    },

    textSenha: {
        fontWeight: 500,
        fontSize: 12,
    },
})