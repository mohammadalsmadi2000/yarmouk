import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>

                  <View style={{ flex: 1, width: null, height: null, resizeMode: 'cover' ,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={this.props.nav}>

                    <Feather name={this.props.imageUri}  size={50} color='black' />
                  </TouchableOpacity>

                  </View>

                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <TouchableOpacity onPress={this.props.nav}>

                    <Text style={{alignSelf:'center',fontWeight:'500'}}>{this.props.name}</Text>
                  </TouchableOpacity>

                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
