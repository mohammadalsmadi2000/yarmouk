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
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
const options = [
  'Cancel',
  'Calculus',
'Chemistry',
  'Physics',
    'C++',

]
import RoundedButton from './buttons/RoundedButton';
import NavBarButton from './buttons/NavBarButton';
import Notification from './Notification';

export const transparentHeaderStyle = {
  borderBottomWidth: 0,
  elevation: 0,
};
export const colors= {
  black: '#000000',
  lightBlack: '#484848',
  white: '#ffffff',
  green01: '#008388',
  green02: '#02656b',
  darkOrange: '#d93900',
  lightGray: '#d8d8d8',
  pink: '#fc4c54',
  gray01: '#f3f3f3',
  gray02: '#919191',
  gray03: '#b3b3b3',
  gray04: '#484848',
  gray05: '#dadada',
  gray06: '#ebebeb',
  gray07: '#f2f2f2',
  brown01: '#ad8763',
  brown02: '#7d4918',
  blue: '#4995cd',
};
const buttonSize = 60;
const buttonWrapperPadding = 0;

const options1 = [
  'Cancel',
  'عربي 101',
'English 101',
  'وطنية',
    'ثقافة اعلامية',
    'مهارات تواصل فعال',
'لياقة',
]
import Icon from 'react-native-vector-icons/FontAwesome';
import Category from '../components/Explore/Category'
import Tag from '../components/Explore/Tag'
import Home from '../components/Explore/Home'
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'

const { height, width } = Dimensions.get('window')
class Subject extends Component {
  static navigationOptions = ({ navigation }) => ({

     headerLeft: <NavBarButton
       handleButtonPress={() => navigation.goBack()}
       location="left"
       icon={<Icon name="angle-left" color={colors.lightBlack} size={30} />}
     />,
     headerStyle: transparentHeaderStyle,
     headerTransparent: true,
     headerTintColor: colors.lightBlack,
   });

  state = {
    selected: ''
  }
  showActionSheet = () => {
     this.ActionSheet.show()
   }
   showActionSheet2 = () => {
      this.ActionSheets.show()
    }
    componentWillMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
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

       if(buttonIndex === 1){
           this.props.navigation.navigate('subpage', {sub: 'Arabic 101'}) ;
     }

        else if(buttonIndex === 2)
           this.props.navigation.navigate('subpage', {sub: 'English 101'})
          else if(buttonIndex === 3)
             this.props.navigation.navigate('subpage', {sub: 'وطنية'})
            else if(buttonIndex === 4)
               this.props.navigation.navigate('subpage', {sub: 'ثقافة اعلامية'})
               else if(buttonIndex === 5 )
                  this.props.navigation.navigate('subpage', {sub: 'مهارات تواصل'})
                  else if(buttonIndex === 6)
                     this.props.navigation.navigate('subpage', {sub: 'لياقة'})
               else
               return null
     }
     handlePress1 = (buttonIndex) => {
        this.setState({ selected: buttonIndex })
        if(buttonIndex === 1){
            this.props.navigation.navigate('subpage', {sub: 'Calculus'}) ;
        this.setState({ selecteds: buttonIndex })
      }

         else if(buttonIndex === 2)
            this.props.navigation.navigate('subpage', {sub: 'Chemistry'})
           else if(buttonIndex === 3)
              this.props.navigation.navigate('subpage', {sub: 'Physics'})
             else if(buttonIndex === 4)
                this.props.navigation.navigate('subpage', {sub: 'C++'})
                else
                return null
      }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 ,marginTop: 30,}}>

                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Subjects
                            </Text>

<View style={{justifyContent:'center',alignItems:'center', paddingTop: 20 }}>
                                <ScrollView
                                >
                                  <ActionSheet
            ref={o => this.ActionSheet = o}
            title={<Text style={{color: '#000', fontSize: 18}}>Which one do you like?</Text>}
            options={options}
            cancelButtonIndex={0}
            destructiveButtonIndex={4}
           onPress={this.handlePress1}
          />
          <ActionSheet
ref={o => this.ActionSheets = o}
title={<Text style={{color: '#000', fontSize: 18}}>Which one do you like?</Text>}
options={options1}
cancelButtonIndex={0}
destructiveButtonIndex={5}
onPress={this.handlePress}
/>
<TouchableOpacity onPress={this.showActionSheet} >
                                  <ImageBackground
                                    source={{uri:'http://yumn.yu.edu.jo/images/13.jpg'}}
                                    borderRadius={20}  style={{ width:width-20,height:150, resizeMode: 'cover',marginBottom:10}}           >
                                    <View
                                      style={{width:width-20,height:150,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.4)',borderRadius:20}} >
                                      <Text style={{fontSize:26,color:'white',fontWeight:'bold'}}>
                                    Science
                                        </Text>
                                      </View>
                                  </ImageBackground>
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={this.showActionSheet2} >

                                  <ImageBackground
                                    source={require('../assets/free.jpg')}
                                    borderRadius={20}  style={{ width:width-20,height:150, resizeMode: 'cover' ,marginBottom:10}}           >
                                    <View
                                      style={{width:width-20,height:150,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.4)',borderRadius:20}} >
                                      <Text style={{fontSize:26,color:'white',fontWeight:'bold'}}>
                                    Free Subjects
                                        </Text>
                                      </View>
                                  </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('subpage', {sub: 'Other Subjects'})}} >

                                  <ImageBackground
                                    source={require('../assets/free.jpg')}
                                    borderRadius={20}  style={{ width:width-20,height:150, resizeMode: 'cover' }}           >
                                    <View
                                      style={{width:width-20,height:150,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.4)',borderRadius:20}} >
                                      <Text style={{fontSize:26,color:'white',fontWeight:'bold'}}>
                                    Other Subjects
                                        </Text>
                                      </View>
                                  </ImageBackground>
                                </TouchableOpacity>
                                </ScrollView>
                            </View>

</View>


                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Subject;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
