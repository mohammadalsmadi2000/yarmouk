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
Keyboard,  TouchableWithoutFeedback ,
Modal,

    TouchableOpacity,
    Dimensions,
    Animated
} from "react-native";
import { Container, Header, Content, List, ListItem, Picker, Left, Body, Right, Button ,Card, CardItem,Fab , Thumbnail,
  Col,
  Row,
  Grid,

  Spinner,

Icon,
  Footer,
  Input,
  } from 'native-base';
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
import { FontAwesome } from '@expo/vector-icons';

import * as Expo from "expo";

import Category from '../components/Explore/Category'
import Tag from '../components/Explore/Tag'
import Home from '../components/Explore/Home'
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import { Feather } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window')
class Help extends Component {
  state = {
    selected: '',
    modalVisible: false,
     modalVisible1: false,
      selected2: undefined
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  showActionSheet = () => {
     this.ActionSheet.show()
   }
   onValueChange2(value: string) {
this.setState({
  selected2: value
});
}
setModalVisible1(visible) {
  this.setState({modalVisible1: visible});
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
                  <Modal
         animationType="slide"
         transparent={false}
         style={styles.modal}
         visible={this.state.modalVisible1}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
         }}>

         <View
           style={{
             alignSelf: "flex-start",
             alignItems: "center",
             flexDirection: "row",
             padding: 5,
             paddingRight: 10,
             paddingTop:10,
           }}
         >
           <Button style={{marginTop:10}} transparent onPress={() => {
                  this.setModalVisible1(!this.state.modalVisible1);
                }} >
             <FontAwesome name="close" style={{ color: "black", fontSize: 32 }} />
           </Button>
           <View style={{ flex: 1 }} />

           <Button
             rounded
             style={{ color: "#4286f4", height: 40, width: 94,alignItems:'center',justifyContent:'center',marginTop:10 }}

           >
             <Text style={{ color: "white" ,alignSelf:'center'}}>Post</Text>
           </Button>
         </View>

         <View
           style={{
             flex: 1,
             justifyContent: "flex-start",
             alignItems: "flex-start",
             width: "100%"
           }}
         >

           <Input
             style={{
               flex: 1,
               width: "100%",
               fontSize: 24,
               alignContent: "flex-start",
               justifyContent: "flex-start",
               textAlignVertical: "top",
               margin: 5
             }}
             multiline

             placeholder="What is your Answer?"

             onChangeText={tweet => this.setState({ newTweetContent: tweet })}
           />

         </View>



       </Modal>
                  <Modal
         animationType="slide"
         transparent={false}
         style={styles.modal}
         visible={this.state.modalVisible}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
         }}>

         <View
           style={{
             alignSelf: "flex-start",
             alignItems: "center",
             flexDirection: "row",
             padding: 5,
             paddingRight: 10,
             paddingTop:10,
           }}
         >
           <Button style={{marginTop:10}} transparent onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} >
             <FontAwesome name="close" style={{ color: "black", fontSize: 32 }} />
           </Button>
           <View style={{ flex: 1 }} />

           <Button
             rounded
             style={{ color: "#4286f4", height: 40, width: 94,alignItems:'center',justifyContent:'center',marginTop:10 }}

           >
             <Text style={{ color: "white" ,alignSelf:'center'}}>Ask</Text>
           </Button>
         </View>

         <View
           style={{
             flex: 1,
             justifyContent: "flex-start",
             alignItems: "flex-start",
             width: "100%"
           }}
         >

           <Input
             style={{
               flex: 1,
               width: "100%",
               fontSize: 24,
               alignContent: "flex-start",
               justifyContent: "flex-start",
               textAlignVertical: "top",
               margin: 5
             }}
             multiline

             placeholder="What's your question?"

             onChangeText={tweet => this.setState({ newTweetContent: tweet })}
           />

         </View>



       </Modal>
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
                            <Text style={{color:'silver'}}>Search for questions..</Text></TouchableOpacity>
                          </View>

                      </View>


                  </View>

                    <ScrollView
                        scrollEventThrottle={16}

                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Do you Need any help?
                            </Text>

</View>
<View style={{ paddingTop: 20 }}>
                                <ScrollView
                                >
                                  <Card>
                    <CardItem header>
                      <Left>
                        <Text style={{fontSize:24,fontWeight:'700'}}>Samer sukhni</Text>
                      </Left>

                    </CardItem>
                    <CardItem>
                      <Body>
                        <Image source={{uri: 'https://scontent.famm3-2.fna.fbcdn.net/v/t1.0-9/50570645_1119525101541408_7204695561868410880_n.jpg?_nc_cat=107&_nc_eui2=AeEv64Vpt1hF8dJIFK5dGu4F-E2v6I3qC7ATXeNHOvvkBEvec2UUmpLAbiynUL6nyKxFgz9XLvbxRb8zIMdv-onbYukusGQ7h2nfEoNPZaC0DQ&_nc_pt=1&_nc_ht=scontent.famm3-2.fna&oh=b6fff9fe1c0b8d4222bdb033adf890c8&oe=5D66188A'}} style={{height: 200, width: 200, flex: 1}}/>
                 <Text>
                   I need help with min max questions in Calculus 101 anyone can help?
                 </Text>
               </Body>
                    </CardItem>
                    <CardItem footer>
                      <TouchableOpacity  onPress={() => {
                             this.setModalVisible1(true);
                           }}>
                      <Text style={{fontWeight:'700',color:'#4a90e2'}}>Answer</Text>
                    </TouchableOpacity>
                    </CardItem>
                 </Card>
                 <Card>
   <CardItem header>
     <Left>
       <Text style={{fontSize:24,fontWeight:'700'}}>Mohammad smadi</Text>
     </Left>

   </CardItem>
   <CardItem>
     <Body>
       <Text>
        I found phone at library if anyone lost his phone answer
       </Text>
     </Body>
   </CardItem>
   <CardItem footer>
     <TouchableOpacity  onPress={() => {
            this.setModalVisible1(true);
          }}>
     <Text style={{fontWeight:'700',color:'#4a90e2'}}>Answer</Text>
   </TouchableOpacity>
   </CardItem>
</Card>
                                </ScrollView>
                            </View>

</View>


                    </ScrollView>
                    <Fab
                               active={this.state.active}
                               direction="up"
                               containerStyle={{ }}
                               style={{ backgroundColor: '#4a90e2' }}
                               position="bottomRight"
                               onPress={() => {
                                      this.setModalVisible(true);
                                    }}>
                               <Feather name="edit" size={30} color="#ffffff"  />
                                  </Fab>
                </View>
            </SafeAreaView>
        );
    }
}
export default Help;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topMargin: {
      marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
      backgroundColor: "white",
      zIndex: -1
    },
    content: {
      padding: 10,
      backgroundColor: "white"
    },
    heading: {
      fontSize: 32,
      fontWeight: "400",
      marginBottom: 30
    },
    tweet: {
      paddingTop: 20,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      borderBottomColor: "#bbb",
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: "column"
    },
    tweetText: {
      marginTop: 10,
      fontSize: 18,
      color: "#555"
    },
    tweetFooter: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 0
    },
    badgeCount: {
      fontSize: 12,
      paddingLeft: 5
    },
    footerIcons: {
      flexDirection: "row",
      alignItems: "center"
    },
    modalFooter: {
      backgroundColor: "white",
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 0.2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      height: 54,
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 5
    },
    modal: {
      justifyContent: "flex-start",
      alignItems: "center",
      position: "absolute",
      zIndex: 4,
      marginTop:10,
      elevation: 4,
      height: Dimensions.get("window").height - Expo.Constants.statusBarHeight,
      marginTop: Expo.Constants.statusBarHeight / 2
    }
});
