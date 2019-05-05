import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image
} from "react-native";
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button,Icon } from 'native-base';
const { height, width } = Dimensions.get('window')

class Card extends Component {
    render() {
      let cat;
      if(this.props.cat == 'Past Paper')
        cat=  <Button primary style={{justifyContent:'center'}}><Text style={{textAlign:'center',color:'white'}}> {this.props.cat} </Text></Button>

        else if (this.props.cat == 'Questions') {
        cat=   <Button danger style={{justifyContent:'center'}}><Text style={{textAlign:'center',color:'white'}}> {this.props.cat} </Text></Button>


        }
        else
        cat=   <Button danger style={{justifyContent:'center'}}><Text style={{textAlign:'center',color:'white'}}> Others </Text></Button>

        return (

            <View  style={{ width: width, borderBottomWidth:0.5,borderRadius:19,  borderColor: '#ededed'
}}>
<View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
{cat}

   <Button transparent style={{justifyContent:'center'}}><Icon type="FontAwesome" name="share" /></Button>

</View>
<View style={{flexDirection:'row',justifyContent:'flex-start',padding:10}}>
  <Text style={{fontSize:20,fontWeight:'700',paddingHorizontal:20}}>{this.props.name}</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'center',padding:10}}>
  <Text style={{fontSize:15,}} numberOfLines={10}>{this.props.text}</Text>

</View>

            </View>
        );
    }
}
export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
