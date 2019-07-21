import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, TextInput, Picker, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            ddlValue: '', nme: '', usernme: '', pass: '', gen: ''
        }
    }
    f1 = (value) => {
        this.setState({ ddlValue: value })
    }
    ClickMe = () => {
    if (!this.state.nme || !this.state.usernme || !this.state.pass || !this.state.gen) {
      alert('Please enter required field')
    }
    else {
        alert('Registered Successfully')
    }
    }


    render() {
        return (

            <View style={MyStyle.container} >

                <ImageBackground style={MyStyle.backroundImage} source={require('./images/x.jpeg')}>
                    <View style={MyStyle.content}>
                        <Text style={MyStyle.logo}> - REGISTER -</Text>
                        <View style={MyStyle.inputContainer}>
                            <TextInput underlineColorAndroid='transparent' style={MyStyle.input}
                                placeholder='Name'  onChangeText={nme => this.setState({ nme })}></TextInput>

                            <TextInput underlineColorAndroid='transparent' style={MyStyle.input}
                                placeholder='Username'  onChangeText={usernme => this.setState({ usernme })}></TextInput>


                            <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={MyStyle.input}
                                placeholder='Password'  onChangeText={pass => this.setState({ pass })}></TextInput>
                                
                                {/* <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={MyStyle.input}
                                placeholder='DOB' ></TextInput>  */}
                                

                            <Picker onValueChange={this.f1} selectedValue={this.state.ddlValue} style={MyStyle.input}   >
                                <Picker.Item label="Gender" value="0"  style={{ borderRadius: 5}}></Picker.Item>
                                <Picker.Item label="Female" value="1" ></Picker.Item>
                                <Picker.Item label="Male" value="2"></Picker.Item>
                                <Picker.Item label="Others" value="3"></Picker.Item>
                            </Picker>

                            <TouchableOpacity onPress={this.register} style={MyStyle.buttonContainer}>
                                <Text style={MyStyle.buttonText} onPress={this.ClickMe}>REGISTER</Text>

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
        marginBottom: 2
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
    },
  /*  box: {
         borderWidth: 2,
        borderRadius: 5,
        height: 60,
        padding: 20,
        marginBottom: 10,
        color: 'black',
        borderColor: 'grey',
        fontSize: 15,
        backgroundColor: 'rgba(255,255,255,1)'

    } */

})