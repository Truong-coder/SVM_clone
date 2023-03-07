import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ManagementScreen from './ManagementScreen';
import UserScreen from './UserScreen';
import WorkScreen from './WorkScreen';
import HistoryScreen from './HistoryScreen';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

import Home from './assests/icons/home.svg';
// import Svg, {Circle} from 'react-native-svg'; // import shape
import {SvgUri} from 'react-native-svg';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// Nesting navigator
const ManagementScreen1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Management"
        component={ManagementScreen}
        options={{
          title: 'Quản Lý Máy',
          headerStyle: {
            backgroundColor: '#00BAB5',

          },
          headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerTitleAlign: 'center', 
        }}
      />
    </Stack.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#00BAB5"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#ffffff', height: 90}}
        screenOptions={{
          headerShown: true,
        }}>
        <Tab.Screen
          name="Trang Chủ"
          component={HomeScreen}
          options={{
            labeled: false,
            tabBarOptions: {
              activeTintColor: 'red',
              inactiveTintColor: 'black',
            },
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Icon
                  name="pie-chart"
                  color={focused ? '#00BAB5' : '#808999'}
                  size={25}
                  style={{transform: [{rotateY: '180deg'}]}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="QL Máy"
          component={ManagementScreen1}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Icon
                  name="calculator"
                  color={focused ? '#00BAB5' : '#808999'}
                  size={25}
                  style={{transform: [{rotateX: '180deg'}], marginBottom: 0}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Công Việc"
          component={WorkScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Icon1
                  name="md-list-outline"
                  color={focused ? '#00BAB5' : '#808999'}
                  size={25}
                  style={{marginBottom: 0}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Lịch Sử"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Icon2
                  name="history"
                  color={focused ? '#00BAB5' : '#808999'}
                  size={25}
                  style={{marginBottom: 0}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Tài Khoản"
          component={UserScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.container}>
                <Icon3
                  name="user-circle"
                  color={focused ? '#00BAB5' : '#808999'}
                  size={25}
                  style={{marginBottom: 0}}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Navigation;
