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
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category'
import Tag from '../components/Explore/Tag'
import Home from '../components/Explore/Home'
import { SearchBar } from 'react-native-elements';

const { height, width } = Dimensions.get('window')
class Representatives extends Component {
  constructor (props) {
         super(props);
           this.offset = 0;
         this.state = {

  search: '',

         };
     }
     updateSearch = search => {
        this.setState({ search });
      };
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
                  <SearchBar
                    containerStyle={{width:'100%',backgroundColor:'white',borderColor:'white',borderWidth:0,borderBottomColor:'white'}}
                   platform="default"
                   lightTheme={true}
                   inputStyle={{backgroundColor:'#ededed'}}
                   inputContainerStyle={{backgroundColor:'#ffffff',borderColor:'white',}}
               placeholder="Search for Representative..."
               onChangeText={this.updateSearch}
               value={this.state.search}
               />
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
                                Explore Representatives Sections
                            </Text>


                                <ScrollView

                                >

                                  <List>
             <ListItem onPress={()=>{this.props.navigation.navigate('Reppro')}} thumbnail>
               <Left>
                 <Thumbnail square source={{ uri: 'https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/89/88345/vlrg.jpg' }} />
               </Left>
               <Body>
                 <Text style={{fontWeight:'700'}}>Mohammad mazen</Text>
                 <Text note numberOfLines={1}>Its time to build a difference . .</Text>
               </Body>
               <Right>
                 <Button transparent>
                   <Text>View</Text>
                 </Button>
               </Right>
             </ListItem>
             <ListItem thumbnail>
               <Left>
                 <Thumbnail square source={{ uri: 'https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/89/88345/vlrg.jpg' }} />
               </Left>
               <Body>
                 <Text style={{fontWeight:'700'}}>Sankhadeep</Text>
                 <Text note numberOfLines={1}>Its time to build a difference . .</Text>
               </Body>
               <Right>
                 <Button transparent>
                   <Text>View</Text>
                 </Button>
               </Right>
             </ListItem>
             <ListItem thumbnail>
               <Left>
                 <Thumbnail square source={{ uri: 'https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/89/88345/vlrg.jpg' }} />
               </Left>
               <Body>
                 <Text style={{fontWeight:'700'}}>Sankhadeep</Text>
                 <Text note numberOfLines={1}>Its time to build a difference . .</Text>
               </Body>
               <Right>
                 <Button transparent>
                   <Text>View</Text>
                 </Button>
               </Right>
             </ListItem>
             <ListItem thumbnail>
               <Left>
                 <Thumbnail square source={{ uri: 'https://s3-eu-west-1.amazonaws.com/tutors.firsttutors.com/89/88345/vlrg.jpg' }} />
               </Left>
               <Body>
                 <Text style={{fontWeight:'700'}}>Sankhadeep</Text>
                 <Text note numberOfLines={1}>Its time to build a difference . .</Text>
               </Body>
               <Right>
                 <Button transparent>
                   <Text>View</Text>
                 </Button>
               </Right>
             </ListItem>
           </List>
                                </ScrollView>
                            </View>




                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Representatives;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
