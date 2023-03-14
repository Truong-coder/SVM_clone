import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';

const UserScreen = () => {
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
        source={require('./assests/background.png')}
        resizeMethod="auto"
        style={{
          justifyContent: 'flex-start',
          width: 400,
          height: 200,
          bottom: 15,
          backgroundColor: 'transparent',
          // tintColor: focused ? 'green' : '#748c94',
        }}
      />
      {/* <View style={[styles.shadow]}> */}
      <Image
        source={require('./assests/hyperlogy.png')}
        resizeMethod="auto"
        style={[styles.image, styles.overlay, styles.circle]}
      />

      {/* </View> */}

      <View style={{top: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          {' '}
          Adminn Hyperlogy
        </Text>
        <Text style={{fontSize: 12, color: 'black'}}>
          {' '}
          hieult3105@gmail.com{' '}
        </Text>

        <View
          style={{
            alignItems: 'center',
            top: 50,
          }}>
          <TouchableOpacity style={styles.border}>
            {/* onPress={onPressLearnMore} */}
            <Icon
              name="edit"
              color="black"
              size={25}
            />
            <Text style={styles.text}> Chỉnh Sửa Thông Tin </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.border}>
            {/* onPress={onPressLearnMore} */}
            <Icon1
              name="earth"
              color="black"
              size={25}
            />
            <Text style={styles.text}> Ngôn Ngữ: Tiếng Việt </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.border}>
            {/* onPress={onPressLearnMore} */}
            <Icon2 name="log-out" color="black" size={25} style={{bottom: 0}} />
            <Text style={styles.text}> Đăng Xuất </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: 'red',
    shadowColor: 'green',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    // elevation: 5,
  },
  container: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    top: 50,
    // justifyContent: 's'
  },
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
  image: {
    resizeMode: 'center',
    width: 50,
    height: 50,
  },
  overlay: {
    position: 'absolute',
    top: 120,
    left: 140,
  },
  text: {
    color: 'black',
    fontSize: 14,
    left: 10,
  },
  border: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    margin: 5,
  },
});

export default UserScreen;
