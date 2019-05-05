import React, { Component } from 'react';
import {
  StyleSheet,
KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Fab } from 'native-base';
import { Feather } from '@expo/vector-icons';

export default class Reply extends Component {
  state = {
    active: false,
  }
  render() {
    return (
      <Container>
        <Content>
          <List>
                 <ListItem avatar>
                   <Left>
                     <Thumbnail source={{ uri: 'https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/89/88345/vlrg.jpg' }} />
                   </Left>
                   <Body>
                     <Text>Kumar Pratik</Text>
                     <Text note>Doing what you like will always keep you happy . .</Text>
                   </Body>
                   <Right>
                     <Text note>3:43 pm</Text>
                   </Right>
                 </ListItem>
               </List>
        </Content>
        <Fab
                   active={this.state.active}
                   direction="up"
                   containerStyle={{ }}
                   style={{ backgroundColor: '#4a90e2' }}
                   position="bottomRight"
                   onPress={() => this.setState({ active: !this.state.active })}>
                   <Feather name="edit" size={30} color="#ffffff"  />
                      </Fab>

      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{

    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:10,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  form: {
  flex: 1,

},
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
});
