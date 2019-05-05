import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
ImageBackground,
    TouchableOpacity,
    Dimensions,
    Animated
} from "react-native";
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button ,Card, CardItem,Fab} from 'native-base';
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
const options = [
  'Cancel',
  'Apple',
  <Text style={{color: 'yellow'}}>Banana</Text>,
  'Watermelon',
  <Text style={{color: 'red'}}>Durian</Text>
]
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category'
import Tag from '../components/Explore/Tag'
import Home from '../components/Explore/Home'
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import { Feather } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window')
class Event extends Component {
  state = {
    selected: '',
  }
  showActionSheet = () => {
     this.ActionSheet.show()
   }
    componentWillMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 120
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })


    }
    handlePress = (buttonIndex) => {
       this.setState({ selected: buttonIndex })
     }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                  <View style={{ height:70, backgroundColor: 'white', borderBottomColor: '#dddddd' }}>
                      <View style={{
                          flexDirection: 'row', padding: 10,
                          backgroundColor: 'white', marginHorizontal: 20,
                          shadowOffset: { width: 0, height: 0 },
                          shadowColor: 'black',
                          shadowOpacity: 0.2,
                          elevation: 1,
                          marginTop: Platform.OS == 'android' ? 30 : null
                      }}>
                          <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                          <View

                              style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' ,justifyContent:'center'}}
                          >
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Search')}}>
                            <Text style={{color:'silver'}}>event near me..</Text></TouchableOpacity>
                          </View>

                      </View>


                  </View>

                    <ScrollView
                        scrollEventThrottle={16}

                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Explore Events in Yarmouk
                            </Text>

</View>
<View style={{ paddingTop: 20 }}>
                                <ScrollView
                                >
                                  <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>

                                      <CardItem cardBody>
                                        <Image source={{uri: 'https://www.zuaneducation.com/blog/wp-content/uploads/2017/12/Learn-Android-App-Development-from-Industry-Experts-2.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                                      </CardItem>
                                      <CardItem>
                                        <Left>
                                            <Text style={{paddingLeft:10,paddingRight:10,fontSize:20,color:'red'}}>SAT,MAY 25 AT 6 PM</Text>
                                        </Left>


                                      </CardItem>
                                      <CardItem>
                                        <Left>
                                            <Text style={{paddingLeft:10,paddingRight:10,fontSize:20,color:'black',fontWeight:'700'}}>Zain Zinc Event</Text>
                                        </Left>


                                      </CardItem>
                                      <CardItem>
                                        <Left>
                                            <Text style={{paddingLeft:10,paddingRight:10,fontSize:15,color:'black',fontWeight:'500'}}>Hussein Building</Text>
                                        </Left>


                                      </CardItem>
                                      <CardItem>
                                        <Body>
                                          <Button bordered  >
                                            <Text style={{paddingLeft:10,paddingRight:10,fontSize:15}}>Interested</Text>
                                          </Button>
                                        </Body>


                                      </CardItem>
                                    </Card>
                                    <Card style={{flex: 0,margin:10,paddingHorizontal:10}}>

                                        <CardItem cardBody>
                                          <Image source={{uri: 'https://www.zuaneducation.com/blog/wp-content/uploads/2017/12/Learn-Android-App-Development-from-Industry-Experts-2.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                                        </CardItem>
                                        <CardItem>
                                          <Left>
                                              <Text style={{paddingLeft:10,paddingRight:10,fontSize:20,color:'red'}}>SAT,MAY 25 AT 6 PM</Text>
                                          </Left>


                                        </CardItem>
                                        <CardItem>
                                          <Left>
                                              <Text style={{paddingLeft:10,paddingRight:10,fontSize:20,color:'black',fontWeight:'700'}}>Zain Zinc Event</Text>
                                          </Left>


                                        </CardItem>
                                        <CardItem>
                                          <Left>
                                              <Text style={{paddingLeft:10,paddingRight:10,fontSize:15,color:'black',fontWeight:'500'}}>Hussein Building</Text>
                                          </Left>


                                        </CardItem>
                                        <CardItem>
                                          <Body>
                                            <Button bordered  >
                                              <Text style={{paddingLeft:10,paddingRight:10,fontSize:15}}>Interested</Text>
                                            </Button>
                                          </Body>


                                        </CardItem>
                                      </Card>
                                </ScrollView>
                            </View>

</View>


                    </ScrollView>
                
                </View>
            </SafeAreaView>
        );
    }
}
export default Event;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
