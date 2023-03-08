import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Materail from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState('7 Ngày Trước');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F5F8FB',
      }}>
      <Image
        source={require('./assests/userBackground.png')}
        resizeMethod="auto"
        style={{
          justifyContent: 'flex-start',
          width: 400,
          height: 240,
          bottom: 15,
          marginTop: 10,
        }}
      />
      {/* <View style={{position: 'absolute'}}> */}
      <View style={{flexDirection: 'row', position: 'absolute'}}>
        <Image
          source={require('./assests/hyperlogy.png')}
          resizeMethod="auto"
          style={styles.circle}
        />
        <Text style={{fontSize: 12, color: '#ffffff', top: 30, right: 20}}>
          {' '}
          Xin chào !{' '}
        </Text>
        <Text style={styles.text}> Adminn Hyperlogy</Text>
        {/* <View style ={{backgroundColor:'#ffffff' }}> */}
        <Fontisto name="bell" size={30} style={styles.icon} />
        {/* </View> */}
      </View>

      {/* Thống kê máy */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          alignItems: 'stretch',
        }}>
        <TouchableOpacity
          style={[styles.container, styles.container2]}
          onPress={() => navigation.navigate('Management')}>
          <Text style={{fontSize: 11, color: 'black'}}> Tổng Máy </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'blue'}}>
            {' '}
            4{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.container, styles.container2]}>
          <Text style={{fontSize: 11, color: 'black'}}> Hoạt Động </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'green'}}>
            {' '}
            2{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.container, styles.container3]}>
          <Text style={{fontSize: 11, color: 'black'}}> Đã Dừng </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>
            {' '}
            2{' '}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Drop-down list */}
      <View style={styles.dropdown}>
        <Picker
          selectedValue={date}
          onValueChange={(value, index) => setDate(value)}
          // filter data
          // selectedValue={selectedCity}
          // onValueChange={(value, index) => setSelectedCity(value)}
          mode="dropdown" // Android only
          dropdownIconColor="#000000"
          style={styles.picker}>
          {/* <EvilIcons name="calender" size={20}/> */}
          <Picker.Item label="7 Ngày Trước" value="7 Ngày Trước" />
          <Picker.Item label="1 Tuần Trước" value="1 Tuần Trước" />
          <Picker.Item label="1 Tháng Trước" value="1 Tháng Trước" />
        </Picker>
      </View>

      <View style={{flex: 1}}>
        <ScrollView
          // contentContainerStyle={{flexGrow: 1}}
          // nestedScrollEnabled={true}
          // persistentScrollbar={true}
          >
          
          {/* Tổng doanh thu */}
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#FFFFFFF',
              borderWidth: 2,
              borderColor: '#FFFFFF',
              borderRadius: 4,
              width: 350,
              height: 200,
              left: 10,
              top: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#000000',
                padding: 30,
              }}>
              {' '}
              Tổng Doanh Thu{' '}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'green',
                  bottom: 10,
                }}>
                {' '}
                1.072.000 VND{' '}
              </Text>
              <Materail
                name="arrow-up-thin"
                size={20}
                color="#33CC5E"
                style={{}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  color: '#33CC5E',
                  right: 5,
                  bottom: 5,
                }}>
                {' '}
                4.4%{' '}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#000000',
                  padding: 10,
                }}>
                {' '}
                Thành phố Hà Nội{' '}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#000000',
                  padding: 10,
                }}>
                {' '}
                1.072.000 VND{' '}
              </Text>
              <Materail
                name="arrow-up-thin"
                size={20}
                color="#33CC5E"
                style={{padding: 10}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  color: '#33CC5E',
                  padding: 10,
                  right: 25,
                  bottom: 5,
                }}>
                {' '}
                4.4%{' '}
              </Text>
            </View>
          </View>
          {/* </ScrollView> */}
          <View style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
            {/* Thống Kê Doanh Thu Bán Hàng */}
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#FFFFFFF',
                borderWidth: 1,
                borderColor: '#FFFFFF',
                borderRadius: 4,
                width: 370,
                height: 200,
                top: 10,
              }}>
              <Text style={{color: 'black'}}>
                {' '}
                The most complete library for Bar, Line, Area, Pie, Donut and
                Stacked Bar charts in React Native. Allows 2D, 3D, gradient,
                animations and live data updates. Yet another chart library?
                Why? To bring Life to your data Plenty of features with minimal
                code Apply animations to your charts on load and on value
                change, just by adding a prop Smooth animations implemented
                using LayoutAnimation Clickable and scrollable Three-D and
                gradient effects Fully customizable (see the props) Detailed
                documentation with examples Support for combined Bar and Line
                charts{' '}
              </Text>
              {/* </View> */}
            </View>
          </View>

          <View style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
            {/* Thống Kê Doanh Thu Bán Hàng */}
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#FFFFFFF',
                borderWidth: 1,
                borderColor: '#FFFFFF',
                borderRadius: 4,
                width: 370,
                height: 200,
                top: 10,
              }}>
              <Text style={{color: 'black'}}>
                {' '}
                The most complete library for Bar, Line, Area, Pie, Donut and
                Stacked Bar charts in React Native. Allows 2D, 3D, gradient,
                animations and live data updates. Yet another chart library?
                Why? To bring Life to your data Plenty of features with minimal
                code Apply animations to your charts on load and on value
                change, just by adding a prop Smooth animations implemented
                using LayoutAnimation Clickable and scrollable Three-D and
                gradient effects Fully customizable (see the props) Detailed
                documentation with examples Support for combined Bar and Line
                charts{' '}
              </Text>
              {/* </View> */}
            </View>
          </View>

          
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    top: 140,
    right: 50,
    left: 10,
    height: 80,
    width: 110,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
  },
  container2: {
    marginRight: 20,
  },
  container3: {
    marginRight: 20,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'red',
    shadowColor: 'green',
    resizeMode: 'center',
    top: 30,
    right: 40,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    right: 95,
    top: 60,
    // bottom: 10
  },
  icon: {
    top: 60,
  },
  dropdown: {
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    borderColor: '#000000',
    margin: 10,
    marginLeft: 180,
  },
  picker: {
    color: '#000000',
    width: 200,
  },
});

export default HomeScreen;
