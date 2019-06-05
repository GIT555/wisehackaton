import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView , AppRegistry, FlatList, Button, Alert, ActivityIndicator, TextInput, WebView } from 'react-native';
import Constants from 'expo-constants';
import {Animated} from 'react-native';
import { TabNavigator, createAppContainer,createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
// const Forum = require('./Forum.js');



class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-home" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <ScrollView>
      
      <View style={styles.container}>
        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('Portal');
          }}>
          Go to Financial Literacy Certification Portal
        </Text>

        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('Forum');
          }}>
          Go to Forum
        </Text>

        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}>
          Toggle Drawer
        </Text>
      </View>
          <Image
          style={{width: 375, height: 100, alignItems:"center"}}
            source={{uri:'https://wjccschools.org/jhs/wp-content/uploads/sites/2/2017/09/wise.jpg'}}
          />
          <Text style={styles.paragraph}>
            Home page:
            This is the login page for the student accounts
          </Text>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Please login to your Account!</Text>
        </View>
        
            <TextInput 
              style={{height: 50, justifyContent: "center", alignItems: "center"}}
              placeholder='User Name'
              onChangeText={(text)=> this.setState({text})}
            />

            <TextInput 
              style={{height: 50, justifyContent: "center", alignItems: "center"}}
              placeholder='Password'
              onChangeText={(text)=> this.setState({text})}
            />
            

            <Button
              onPress={() => {Alert.alert('This should log you into your account');}}
              title="Log In"
            />


      </ScrollView>
    );
  }
}

class Portal extends React.Component {
  static navigationOptions = {
    title: 'Financial Literacy Certification Portal',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <View style={{flex:1}}>
        <WebView
          // ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          source={{uri: 'https://www.programworkshop.com/PW2/Core/2.0/Login/Login/Home?SK=98'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
        />
      </View>

      
    );
  }
}

class Game extends React.Component {
  static navigationOptions = {
    title: 'Game',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.paragraph}>
        This is page will hold the multiple choice Game
        </Text>
        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          Go back home
        </Text>
      </View>
    );
  }
}

class Forum extends React.Component {
  static navigationOptions = {
    title: 'Forum',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.paragraph}>
        This is the forum page
        </Text>
        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          Go back home
        </Text>
      </View>
    );
  }
}




const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <Image
        style={styles.image}
        source={{
          uri: 'https://appjs.co/wp-content/uploads/2015/09/brent3-458x458.png',
        }}
      />
    </SafeAreaView>
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Home,
    Game,
    Portal,
    Forum,
  },
  {
    drawerType: 'back',
    drawerPosition: 'right',
    drawerWidth: 200,
    // drawerBackgroundColor: 'orange',
    contentComponent: CustomDrawerContentComponent
  }
);


class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}


export {AppContainer as default};


const AppContainer = createAppContainer(navigator);

const styles2 = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
