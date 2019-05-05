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
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';

class Docsc extends Component {
    render() {
        return (
            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',paddingHorizontal:20}}>
              <Thumbnail large source={{ uri: 'https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/89/88345/vlrg.jpg' }} />
              <Text>{this.props.name}</Text>

            </View>
        );
    }
}
export default Docsc;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
