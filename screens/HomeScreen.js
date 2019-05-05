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
    TouchableOpacity,
    Dimensions,
    Animated
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category'
import Tag from '../components/Explore/Tag'
import Home from '../components/Explore/Home'
import Swiper from 'react-native-swiper'
import Slider from '../components/Slider'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { LinearGradient } from 'expo';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#ffffff',
    background2: '#ffffff'
};


import { Card, ListItem, Button } from 'react-native-elements'
const { height, width } = Dimensions.get('window')
class HomeScreen extends Component {
  constructor(props){
      super(props)

      this.state = {
         width: '99%',
          imagesSlider: [

            { uri:'http://langcenter.yu.edu.jo/sites/default/files/slider_images/yu%20%281%29.jpg' },
                { uri:'https://i.pinimg.com/564x/23/b1/da/23b1da664ec94a9f7ab0854cd5d5adb1.jpg' },
                { uri:'https://i.pinimg.com/564x/60/2e/50/602e50a07a27b77439f7bb005a44236f.jpg' },

{ uri:'https://www.wired.com/images_blogs/wiredscience/2009/10/nikon2003_1st_wittmann.jpg' },
          ]
      }
  }
  get gradient () {
      return (
          <LinearGradient
            colors={[colors.background1, colors.background2]}
            startPoint={{ x: 1, y: 0 }}
            endPoint={{ x: 0, y: 1 }}
            style={styles.gradient}
          />
      );
  }
    componentWillMount() {
      setTimeout(() => {
          this.setState({
              width: '100%'
          });
      });
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
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
 { this.gradient }
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >

                      <View style={{  backgroundColor: 'white',  borderBottomColor: '#dddddd' }}>
  <Slider/>
                          <View style={{
                              flexDirection: 'row', padding: 10,
                              backgroundColor: 'white', marginHorizontal: 20,
                              shadowOffset: { width: 0, height: 0 },
                              shadowColor: 'black',
                              borderBottomWidth:0.2,

                              shadowOpacity: 0.2,
                              borderBottomColor:'#dddddd',
                              elevation: 1,
                              marginTop: Platform.OS == 'android' ? 30 : null
                          }}>
                              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                              <View

                                  style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' ,justifyContent:'center'}}
                              >
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Search')}}>
                                <Text style={{color:'silver'}}>Calculus exams..</Text></TouchableOpacity>
                              </View>
                          </View>
</View>

                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                          <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('subject')}}>
                          <LinearGradient
                            colors={['#00B4DB', '#0083B0']}
                            style={{ padding: 25, alignItems: 'center', borderRadius: 5,flexDirection:'row' }}>
                            <Feather name="book"  size={24} color='white' />

                            <Text
                              style={{
                                backgroundColor: 'transparent',
                                fontSize: 15,
                                color: '#fff',
                              }}>
                              Subjects
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                          <LinearGradient
                            colors={['#8A2387', '#E94057','#F27121']}
                            style={{ padding: 25, alignItems: 'center', borderRadius: 5 ,flexDirection:'row'}}>
                            <FontAwesome name="sticky-note"  size={24} color='white' />

                            <Text
                              style={{
                                backgroundColor: 'transparent',
                                fontSize: 15,
                                color: '#fff',
                              }}>
                              Past Paper
                            </Text>
                          </LinearGradient>
</View>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What can we help you find?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >

                                    <Category
                                      navigation={this.props.navigation}
                                      nav={()=>{this.props.navigation.navigate('repre')}}
                                        imageUri={'users'}
                                        name="Representatives Sections"
                                    />
                                    <Category
                                      imageUri={'user'}
                                      navigation={this.props.navigation}
                                      nav={()=>{this.props.navigation.navigate('doctor')}}
                                        name="Doctors"
                                    />

                                    <Category
                                      navigation={this.props.navigation}
                                      nav={()=>{this.props.navigation.navigate('miss')}}
                                      imageUri={'archive'}
                                        name="Missing Page"
                                    />
                                    <Category
                                      navigation={this.props.navigation}
                                      nav={()=>{this.props.navigation.navigate('event')}}
                                      imageUri={'calendar'}
                                        name="Events Page"
                                    />

                                </ScrollView>
                            </View>

                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Do you need any help?
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                              <Card
                                title='Yarmouk Help'
                              >
                                <Text style={{marginBottom: 10}}>
                                  Ask any question or Answer people who need help.
                                </Text>
                                <Button
                                  backgroundColor='#03A9F4'
                                  onPress={()=>{this.props.navigation.navigate('help')}}
                                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                  title='EXPLORE NOW' />
                              </Card>


                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Buildings
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
<ScrollView horizontal={true}>

                              <Home imageUri={{uri:'https://photos.wikimapia.org/p/00/04/19/28/73_big.jpg'}}
                               name="Hijjawi Faculty of Engineering Technology"
                                 nav={()=>{this.props.navigation.navigate('hij')}}
                            />
                            <Home imageUri={{uri:'http://yumn.yu.edu.jo/images/13.jpg'}}
                             name="Faculty of Science"
                               nav={()=>{this.props.navigation.navigate('sci')}}
                          />
                          <Home imageUri={{uri:'https://khaberni-6zrocpuaymq7.stackpathdns.com/uploads/news_model/images/171443_27_1470580354.JPG'}}
                           name="Al Hussein Bin Talal Library"
                             nav={()=>{this.props.navigation.navigate('lib')}}
                        />
                        <Home imageUri={{uri:'http://tourism.yu.edu.jo/sites/default/files/slider_images/20786344_1963875153828630_946497052_n.jpg'}}
                         name="Faculty of Tourism & Hotel Management"
                      />
</ScrollView>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default HomeScreen;

const styles =  StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    recentlyPlayedTitleBar: {
  paddingHorizontal: 16,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
},



 markerWrap: {
   alignItems: "center",
   justifyContent: "center",
 },
 card: {
   flex: 1,
 },
 title: {
   fontSize: 20,
   fontWeight: '800',
   padding: 5,
   color: '#444',
 },
 postImage: {
   backgroundColor: '#eee',
 },
 postInfo: {
   padding: 3,
   alignItems: 'center',
 },
 postButtons: {
   padding: 5,
   flexDirection: 'row',
   flex: 1,
   alignItems: 'center',
 },
 button: {
   flex: 3,
   padding: 5,
   margin: 6,
   borderRadius: 2,
   borderWidth: 1,
   borderColor: '#999',
   alignItems: 'center',
   backgroundColor: '#4285f4',
 },
 info: {
   fontSize: 15,
   color:'black',
   margin:10
 },
 bold: {
   fontWeight: 'bold',
   color:'#2196f3'
 },
 boldd: {
   fontWeight: 'bold',
   fontSize:20

 },
 marker: {
   width: 10,
   height: 10,
   borderRadius: 4,
   backgroundColor: "rgba(130,4,150, 0.9)",
 },
 ring: {
   width: 24,
   height: 24,
   borderRadius: 12,
   backgroundColor: "transparent",
   position: "absolute",
   borderWidth: 1,
   borderColor: "rgba(130,4,150, 0.5)",
 },
TextInputStyleClass:{

textAlign: 'center',
height: 40,
borderWidth: 1,
borderColor: 'grey',
borderRadius: 20 ,
backgroundColor : "#fff"

},
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',

    },
    title1: {
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        color: 'black',
        margin:10,
        fontSize: 25,
        fontWeight: 'bold',

    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'grey',
        fontSize: 13,
        fontStyle: 'italic',
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
});
