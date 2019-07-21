import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

export default class Splash extends Component {
    render() {
        

        return (

            <View style={MyStyle.container}>

                <ImageBackground
                    source={require('./images/bgsplash.jpeg')}
                    style={MyStyle.backgroundImage}>
                       { <View>
                        <Text style={{ marginLeft: 200, marginTop: 30, fontWeight: 'bold', fontSize: 17 }} >Login</Text>
                        <Text style={{ marginLeft: 167, marginTop: 30, fontWeight: 'bold', fontSize: 17 }}>Registration</Text>
                    </View> } 
                    <Image source={require('./images/logo.jpeg')}
                        style={MyStyle.logoImage} ></Image>

                    <Text style={MyStyle.tagline}>CoinWheel</Text>
                    <Text style={MyStyle.test}>Lets get Started !!</Text>


                </ImageBackground>

            </View>
        );
    }
}

const MyStyle = StyleSheet.create({

    container: {
        justifyContent: 'center',
        flex: 1
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    logoImage: {
        width: 100,
        height: 100,
        marginTop: 150,
        marginLeft: 140
    },
    tagline: {
        fontSize: 40,
        marginLeft: 75,

        fontStyle: 'italic'
    },
    test: {
        fontSize: 20,
        marginLeft: 100,
        marginTop: 90,
        fontStyle: 'italic'
    }


})