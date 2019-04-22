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
    Dimensions,
    Animated
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category'
import Tag from '../components/Explore/Tag'
import Home from '../components/Explore/Home'

import { Card, ListItem, Button } from 'react-native-elements'
const { height, width } = Dimensions.get('window')
class Nearby extends Component {

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

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
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
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Calculus exams.."
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>

                    </Animated.View>
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
                                What can we help you find?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >

                                    <Category
                                        imageUri={'users'}
                                        name="Representatives Sections"
                                    />
                                    <Category
                                      imageUri={'user'}

                                        name="Doctors"
                                    />
                                    <Category
                                      imageUri={'book'}
                                        name="Subjects"
                                    />
                                    <Category

                                      imageUri={'archive'}
                                        name="Missing Page"
                                    />
                                    <Category
                                      imageUri={'calendar'}
                                        name="Events Page"
                                    />

                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Yarmouk Gallery
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    Explore Yarmouk Pictures

                                </Text>
                                <ScrollView horizontal={true} pageEnabled={true}>
                                <View style={{ width: width - 40, height: 200, marginTop: 20,marginRight:10 }}>

                                  <Image
                                                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                                                        source={{uri:'http://langcenter.yu.edu.jo/sites/default/files/slider_images/yu%20%281%29.jpg'}}
                                                                    />
                                </View>
                                <View style={{ width: width - 40, height: 200, marginTop: 20,marginRight:10  }}>

                                  <Image
                                                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                                                        source={{uri:'https://cdnimgen.royanews.tv/imageserv/Size728Q40/news/20190414/17298.JPG'}}
                                                                    />
                                </View>
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

                              <Home imageUri={{uri:'http://hijjawi.yu.edu.jo/sites/default/files/slider_images/slider2.jpg'}}
                               name="Hijjawi Faculty of Engineering Technology"
                            />
                            <Home imageUri={{uri:'http://yumn.yu.edu.jo/images/13.jpg'}}
                             name="Faculty of Science"
                          />
                          <Home imageUri={{uri:'https://khaberni-6zrocpuaymq7.stackpathdns.com/uploads/news_model/images/171443_27_1470580354.JPG'}}
                           name="Al Hussein Bin Talal Library"
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
export default Nearby;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
