import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { SvgUri, LocalSvg } from 'react-native-svg';

// import TempIcon from './icons/Icons';
import Thermometer_adobe_express from './icons/thermometer_adobe_express.svg';
import Dollar_symbol_adobe_express from './icons/dollar_symbol_adobe_express.svg';
import Milk_bottle_adobe_express from './icons/milk_bottle_adobe_express.svg';

const data = [
  {
    id: 1,
    color: '#7fffd4',
    codeName: '#SVM007',
    name: 'Hyper SVM C22 Sảnh VP',
    temp: '13℃',
    price: 5000,
    items: 68,
    totaItem: 145,
    district: 'Quận Cầu Giấy',
    city: 'Thành phố Hà Nội',
  },
  {
    id: 2,
    color: '#ff4500',
    codeName: '#SVM004',
    name: 'Hyper SVM C22 ',
    temp: '8℃',
    price: 0,
    items: 0,
    totaItem: 0,
    district: 'Quận Cầu Giấy',
    city: 'Thành phố Hà Nội',
  },
  {
    id: 3,
    color: '#ff4500',
    codeName: '#SVM005',
    name: 'Hyper SVM 11 inch',
    temp: null,
    price: 0,
    items: 0,
    totaItem: 0,
    district: 'Quận Phú Nhuận',
    city: 'Thành phố Hồ Chí Minh',
  },
  {
    id: 4,
    color: '#7fffd4',
    codeName: '#SVM001',
    name: 'Hyper SVM 55 inch',
    temp: '16℃',
    price: 0,
    items: 217,
    totaItem: 217,
    district: 'Quận Cầu Giấy',
    city: 'Thành phố Hà Nội',
  },
];

const MangagementScreen = () => {
  const [searchText, setSearchText] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // define state variable for selected value
  const [selectedCity, setSelectedCity] = useState('Tất cả');
  // filter cities based on selected value

  const filteredData = data.filter(
    item =>
      (selectedCity === 'Tất cả' || item.city === selectedCity) &&
      (searchText === '' ||
        item.name.toLowerCase().includes(searchText.toLowerCase())),
  );
  /*
   * the 'filteredData' variable holds the filtered data based on both the selected city and the search text.
   * The renderItem function just displays the name and city properties of each item.
   * The TextInput component allows searching by name, and the selectedCity state variable
   * and Picker component allows filtering by city.
   */
  
  // HANDLE SEARCH
  // const handleSearch = text => {
  //   setSearchText(text);

  //   const results = data.filter(item =>
  //     item.name.toLowerCase().includes(text.toLowerCase()),
  //   );
  //   // const filteredData = selectedValue === 'all' ? data : data.filter(item => item.city === selectedValue);

  //   setSearchResults(results);
  // };

  // FILTER BY CITY USING PICKER
  // const filteredCities =
  //   selectedValue === 'Tất cả'
  //     ? data
  //     : data.filter(city => city.city === selectedValue);

  const renderItem = ({item}) => {
    return (
      <View style={styles.flatList}>
        <View style={styles.svmIcon}>
          <Entypo
            name="calculator"
            color={item.color}
            size={40}
            style={{transform: [{rotateX: '180deg'}], marginLeft: 10}}
          />
        </View>

        <View style={{margin: 10, marginLeft: 30}}>
          <Text style={{fontSize: 12, color: '#00BAB5'}}>{item.codeName}</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
            {item.name}
          </Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            {/* <SvgUri uri={TempIcon} /> */}
            {/* Add icon.svg using react-native-svg-transfomer */}
            {/* <Thermometer_adobe_express width={60} height={20} fill={"#F5F8FB"}  />  */}
            <FontAwesome5 name="temperature-high" size={24} color="#000000" />
            <Text
              style={{fontSize: 11, color: 'black', width: 30, marginTop: 5}}>
              {item.temp}
            </Text>
            <Dollar_symbol_adobe_express
              width={60}
              height={20}
              fill={'#F5F8FB'}
              style={{marginTop: 5}}
            />
            <Text
              style={{fontSize: 11, color: 'black', width: 70, marginTop: 5}}>
              {item.price} VND
            </Text>
            {/* <Milk_bottle_adobe_express width={60} height={20} fill={"#F5F8FB"} /> */}
            <MaterialCommunityIcons
              name="bottle-soda-classic-outline"
              size={24}
              color="#000000"
            />
            <Text style={{fontSize: 11, color: 'black', marginTop: 5}}>
              {item.items}/{item.totaItem}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 10, color: 'black'}}>Địa chỉ:</Text>
            <Text style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
              {' '}
              {item.district}, {item.city}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.screen}>
        <View style={styles.container}>
          <Picker
            // selectedValue={city}
            // onValueChange={(value, index) => setCity(value)}
            // filter data
            selectedValue={selectedCity}
            onValueChange={(value, index) => setSelectedCity(value)}
            mode="dropdown" // Android only
            dropdownIconColor="#000000"
            style={styles.picker}>
            <Picker.Item label="Tất cả" value="Tất cả" />
            <Picker.Item label="Thành phố Hà Nội" value="Thành phố Hà Nội" />
            <Picker.Item
              label="Thành phố Hồ Chí Minh"
              value="Thành phố Hồ Chí Minh"
            />
          </Picker>
        </View>

        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={25}
            color="#000000"
          />
          <TextInput
            placeholder="Tìm kiếm..."
            placeholderTextColor="#000000"
            style={styles.input}
            // onChangeText={handleSearch}
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
      </View>
      <View style={{backgroundColor: '#F5F8FB'}}>
        {/* {searchResults.length > 0 && ( */}
        <FlatList
          // data={searchResults.length > 0 ? searchResults : data}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        {/* )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#F5F8FB',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  container: {
    borderWidth: 2,
    borderRadius: 10,
    width: 170,
    borderColor: '#000000',
    margin: 10,
  },
  picker: {
    color: '#000000',
    width: 170,
  },
  searchSection: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    width: 180,
    borderColor: '#000000',
    margin: 10,
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 15,
  },
  input: {
    backgroundColor: '#ffffff',
    color: '#000000',
    width: 100,
  },
  svmIcon: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: 60,
    height: 60,
    left: 16,
    top: 12,
    marginTop: 20,
    borderRadius: 8,
  },
  flatList: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#ffffff',
    justifyContent: 'flex-start',
  },
});

export default MangagementScreen;
