import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView , AppRegistry, FlatList, Button, Alert, ActivityIndicator, TextInput} from 'react-native';
import Constants from 'expo-constants';
import {Animated} from 'react-native';
import { TabNavigator, createAppContainer,createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';

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
