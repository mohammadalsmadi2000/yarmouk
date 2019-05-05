import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputField from '../components/Input';

import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import Notification from '../components/Notification';

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

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
     headerRight: <NavBarButton
       handleButtonPress={() => navigation.navigate('ForgotPassword')}
       location="right"
       color={colors.lightBlack}
       text="Forgot Password"
     />,
     headerLeft: <NavBarButton
       handleButtonPress={() => navigation.goBack()}
       location="left"
       icon={<Icon name="angle-left" color={colors.lightBlack} size={30} />}
     />,
     headerStyle: transparentHeaderStyle,
     headerTransparent: true,
     headerTintColor: colors.lightBlack,
   });

   constructor(props) {
     super(props);
     this.state = {
       formValid: true,
       validEmail: false,
       emailAddress: '',
       password: '',
       validPassword: false,
       loadingVisible: false,
     };

     this.handleCloseNotification = this.handleCloseNotification.bind(this);
     this.handleEmailChange = this.handleEmailChange.bind(this);
     this.handleNextButton = this.handleNextButton.bind(this);
     this.handlePasswordChange = this.handlePasswordChange.bind(this);
     this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
   }

   handleNextButton() {

     const { logIn, navigation } = this.props;
     const { navigate } = navigation;
if(this.state.emailAddress == 0)
this.setState({ loadingVisible: true,formValid: false });
else {
  this.setState({ loadingVisible: true,formValid: true });
  this.props.navigation.navigate('profile')
}
if(this.state.password == 0)
this.setState({ loadingVisible: true,formValid: false });
else {
  this.setState({ loadingVisible: true,formValid: true });
}
   }

   handleCloseNotification() {
     this.setState({ formValid: true });
   }

   handleEmailChange(email) {
     // eslint-disable-next-line
     const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     const { validEmail } = this.state;
     this.setState({ emailAddress: email });

     if (!validEmail) {
       if (emailCheckRegex.test(email)) {
         this.setState({ validEmail: true });
       }
     } else if (!emailCheckRegex.test(email)) {
       this.setState({ validEmail: false });
     }
   }

   handlePasswordChange(password) {
     const { validPassword } = this.state;

     this.setState({ password });

     if (!validPassword) {
       if (password.length > 4) {
         // Password has to be at least 4 characters long
         this.setState({ validPassword: true });
       }
     } else if (password <= 4) {
       this.setState({ validPassword: false });
     }
   }

   toggleNextButtonState() {
     const { validEmail, validPassword } = this.state;
     if (validEmail && validPassword) {
       return false;
     }
     return true;
   }
  render() {
    const { disabled, handleNextButton } = this.props;
  const opacityStyle = disabled ? 0.2 : 0.6;
    const {
    formValid, loadingVisible, validEmail, validPassword,
  } = this.state;
  const showNotification = !formValid;
  const background = formValid ? colors.white : colors.darkOrange;
  const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
       style={[{ backgroundColor: background }, styles.wrapper]}
       behavior="padding"
     >
       <View style={styles.scrollViewWrapper}>
         <ScrollView style={styles.scrollView}>
           <Text style={styles.loginHeader}>
Log In
           </Text>
           <InputField
             labelText="EMAIL ADDRESS"
             labelTextSize={14}
             labelColor={colors.lightBlack}
             textColor={colors.lightBlack}
             borderBottomColor={colors.lightBlack}
             inputType="email"
             customStyle={{ marginBottom: 30 }}
             onChangeText={this.handleEmailChange}
             showCheckmark={validEmail}
             autoFocus
           />
           <InputField
             labelText="PASSWORD"
             labelTextSize={14}
             labelColor={colors.lightBlack}
             textColor={colors.lightBlack}
             borderBottomColor={colors.lightBlack}
             inputType="password"
             customStyle={{ marginBottom: 30 }}
             onChangeText={this.handlePasswordChange}
             showCheckmark={validPassword}
           />
         </ScrollView>
         <View style={styles.buttonWrapper}>
      <TouchableHighlight
        style={[{ opacity: opacityStyle }, styles.button]}
        onPress={this.handleNextButton}
        disabled={disabled}
      >
        <Icon
          name="angle-right"
          color={colors.blue}
          size={32}
          style={styles.icon}
        />
      </TouchableHighlight>
    </View>
       </View>

       <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
         <Notification
           showNotification={showNotification}
           handleCloseNotification={this.handleCloseNotification}
           type="Error"
           firstLine="Those credentials don't look right. Please try again."

         />
       </View>
     </KeyboardAvoidingView>
    );
  }
}
let termsTextSize = 13;
let headingTextSize = 30;


const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    padding: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: headingTextSize,
    color: colors.black,
    fontWeight: '300',
    marginBottom: 40,
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonWrapper: {
   alignItems: 'flex-end',
   right: 20,
   bottom: 20,
   paddingTop: buttonWrapperPadding,
 },
 button: {
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 50,
   width: buttonSize,
   height: buttonSize,
   backgroundColor: colors.lightGray,
 },
 icon: {
   marginRight: -2,
   marginTop: -2,
 },
});
