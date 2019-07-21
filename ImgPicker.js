import React, { Component } from 'react';
import { Platform, TouchableOpacity, Image, View, Text, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Modal from "react-native-modal";

const options = {
  title: 'my pic app',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'choose photo from library'
}
export default class Empty extends Component {

  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  toggle = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


  constructor(props) {
    super(props);
    this.state = { avatarSource: null};
  }
  
  myfunc = () => {
    //alert('Clicked');
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      }
      else {
        let source = response;
        this.setState({ avatarSource: source, });
      }
    });
  }

  

  render() {
    return (
      <View>
        <Text> addpost </Text>
         <Image source={this.state.avatarSource} /*ser.org/installer | sudo php -- --install-dir=/usr/local/bin --file */
          style={{ width: 200, height: 200, margin: 10 }} />
        <TouchableOpacity style={{ backgroundColor: 'green', margin: 10, padding: 10 }}
          onPress={this.myfunc}>

          <Text style={{ color: '#fff' }}>Select Image</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'green', margin: 10, padding: 10 }}
          onPress={this.toggleModal}>

          <Text style={{ color: '#fff' }}>Add Coin Specification</Text>
          <View style={{ flex: 1 }}>
            <Modal isVisible={this.state.isModalVisible} style={{ backgroundColor: '#fff' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: 'bold', marginLeft:100 }}>NEW POST</Text>
                <TextInput style={{ borderBottomWidth: 2, margin: 10 }} placeholder='Base Price'></TextInput>
                <TextInput style={{ borderBottomWidth: 2, margin: 10 }} placeholder='Selling Price'></TextInput>
                <TextInput style={{ borderBottomWidth: 2, margin: 10 }} placeholder='Increased Slap Rate'></TextInput>
                <TextInput style={{ borderBottomWidth: 2, margin: 10 }} placeholder='Metal Type'></TextInput>
                <TextInput style={{ borderBottomWidth: 2, margin: 10 }} placeholder='Quantity'></TextInput>
    
                <TouchableOpacity style={{ backgroundColor: 'green', margin: 10, padding: 10 }} onPress={this.toggle}>
                  <Text style={{ color: '#fff' }}>Save Record</Text>
                </TouchableOpacity>
    
              </View>
    
            </Modal>
          </View>
          

        </TouchableOpacity>

      </View>
    );
  }
}