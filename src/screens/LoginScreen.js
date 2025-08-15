import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen( {navigation} ){
    return(
        <View style={styles.container}>
            <Image style={styles.casual_dog} source={require('../../assets/casual_dog.png')}/>

            <Text style={styles.title}>Ótimo dia!</Text>

            <Text style={styles.subTitle}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.btn_green} onPress={() => navigation.navigate('Acessar')}>
                <Image style={styles.google_logo} source={require('../../assets/Google.png')}/>
                <Text style={styles.text_btn1}>Como deseja acessar?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn_white} onPress={() => navigation.navigate('Acessar')}>
                <Text style={styles.text_btn2}>Outras opções</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    casual_dog: {
        width: 380,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 38,
    },

    btn_green: {
        width: windowWidth * 0.9,
        flexDirection: 'row',
        backgroundColor: '#14C871',
        alignItems: 'center',
        borderRadius: 8,
        height: 60,
        paddingHorizontal: 14,
        marginBottom: 14,
    },

    btn_white: {
        borderColor: '#14C871',
        borderWidth: 1,
        borderRadius: 8,
        width: windowWidth * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    },

    google_logo: {
        backgroundColor: '#fff',
        height: 32,
        width: 32,
        borderRadius: 4,
    },

    title: {
        color: '#31404D',
        fontSize: 40,
        fontWeight: 600,
        marginBottom: 8,
    },
    subTitle: {
        color: '#31404D',
        fontSize: 14,
        fontWeight: 800,
        marginBottom: 46,
    },

    text_btn1: {
        fontWeight: 500,
        color: '#fff',
        fontSize: 14,
        flex: 1,              
        textAlign: 'center',
        marginLeft: -28,
        
    },

    text_btn2: {
        color: '#31404D',
        fontWeight: 500,
        fontSize: 14,
    },

})