import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class Log extends Component {


    render() {
        return (

            <View style={MyStyle.container} >

                <ImageBackground style={MyStyle.backroundImage} source={require('./images/x.jpeg')}>
                    <View style={MyStyle.content}>
                        <Text style={MyStyle.logo}> -LOGIN -</Text>
                        <View style={MyStyle.inputContainer}>
                            <TextInput underlineColorAndroid='transparent' style={MyStyle.input}
                                placeholder='username'></TextInput>

                            <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={MyStyle.input}
                                placeholder='password'></TextInput>

                            <TouchableOpacity onPress={this.login} style={MyStyle.buttonContainer}>
                                <Text style={MyStyle.buttonText}>LOGIN</Text>

                            </TouchableOpacity>
                        </View>


                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const MyStyle = StyleSheet.create({
    container: { flex: 1 },
    backroundImage: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        justifyContent: "center"

    },
    content: {
        alignItems: 'center'
    },
    logo: {
        color: 'white',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 15,
        marginBottom: 20
    },
    inputContainer: {
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        height: 60,
        padding: 20,
        marginBottom: 10,
        color: 'black',
        borderColor: 'grey',
        fontSize: 15,
        backgroundColor: 'rgba(255,255,255,1)'
    },
    buttonContainer: {
        margin: 20,
        padding: 20,
        backgroundColor: '#e9e9e9',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 5,

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }

})