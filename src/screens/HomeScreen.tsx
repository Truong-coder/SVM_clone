/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Materail from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import CalendarPicker from 'react-native-calendar-picker';
import {LineChart} from 'react-native-gifted-charts';
import {BarChart} from 'react-native-gifted-charts';
import {PieChart} from 'react-native-gifted-charts';
import axios from 'axios';

const Items = [
  {
    id: 1,
    name: 'Bánh gạo nướng vị tự nhiên',
    total: 30,
    value: 60000,
    uri: 'https://orion.vn/media/rlentw30/cp12p_sakura-film.png',
  },
  {
    id: 2,
    name: 'Bánh chocopie',
    total: 19,
    value: 95000,
    uri: 'https://orion.vn/media/rlentw30/cp12p_sakura-film.png',
  },
  {
    id: 3,
    name: 'Bánh Nabati socola',
    total: 17,
    value: 190800,
    uri: 'https://orion.vn/media/rlentw30/cp12p_sakura-film.png',
  },
  {
    id: 4,
    name: 'Bánh cốm Custas',
    total: 12,
    value: 60000,
    uri: 'https://orion.vn/media/rlentw30/cp12p_sakura-film.png',
  },
  {
    id: 5,
    name: 'Bánh trứng Custas',
    total: 8,
    value: 40000,
    uri: 'https://orion.vn/media/rlentw30/cp12p_sakura-film.png',
  },
];

const SVM = [
  {
    id: 1,
    name: 'Hyper SVM C22 sảnh VP',
    location: 'Thành phố Hà Nội',
    total: 148,
    value: 1258000,
  },
  {
    id: 2,
    name: 'Hyper SVM 55 inch',
    location: 'Thành phố Hà Nội',
    total: 17,
    value: 190800,
  },
];

// Line chart
const lineData = [
  {value: 0},
  {value: 10, label: '25/02'},
  {value: 8, label: '26/02'},
  {value: 58, label: '27/02'},
  {value: 56, label: '28/02'},
  {value: 78, label: '01/03'},
  {value: 74, label: '02/03'},
  {value: 10, label: '25/02'},
  {value: 8, label: '26/02'},
  {value: 58, label: '27/02'},
  {value: 56, label: '28/02'},
  {value: 78, label: '01/03'},
  {value: 74, label: '02/03'},
];
const barData = [
  {
    value: 5,
    label: '26/02',
    frontColor: '#87cefa',
    topLabelComponent: () => <Text style={styles.topLabel}>5</Text>,
  },
  {
    value: 35,
    label: '27/02',
    frontColor: '#87cefa',
    topLabelComponent: () => <Text style={styles.topLabel}>35</Text>,
  },
  {
    value: 14,
    label: '28/02',
    frontColor: '#87cefa',
    topLabelComponent: () => <Text style={styles.topLabel}>14</Text>,
  },
  {
    value: 18,
    label: '01/03',
    frontColor: '#87cefa',
    topLabelComponent: () => <Text style={styles.topLabel}>18</Text>,
  },
  {
    value: 25,
    label: '02/03',
    frontColor: '#87cefa',
    borderWidth: 3,
    borderColor: 'blue',
    topLabelComponent: () => <Text style={styles.topLabel}>25</Text>,
  },
  {
    value: 25,
    label: '02/03',
    frontColor: '#87cefa',
    borderWidth: 3,
    borderColor: 'blue',
    topLabelComponent: () => <Text style={styles.topLabel}>25</Text>,
  },
  {
    value: 25,
    label: '02/03',
    frontColor: '#87cefa',
    borderWidth: 3,
    borderColor: 'blue',
    topLabelComponent: () => <Text style={styles.topLabel}>25</Text>,
  },
  {
    value: 25,
    label: '02/03',
    frontColor: '#87cefa',
    borderWidth: 3,
    borderColor: 'blue',
    topLabelComponent: () => <Text style={styles.topLabel}>25</Text>,
  },
];
const pieData1 = [
  {value: 54, color: '#ADFF9B'},
  {value: 72, color: '#00ffff'},
];
const pieData2 = [{value: 100, color: '#ADFF9B'}];
const pieData3 = [
  {value: 116, color: '#ADFF9B'},
  {value: 16, color: '#00ffff'},
];
const pieData4 = [
  {value: 57, color: '#ADFF9B'},
  {value: 29, color: '#4A90E2'},
  {value: 1, color: '#FF4C54'},
  {value: 13, color: '#F5A623'},
];


// const GetData = async () => {
//   axios
//     .request(options)
//     .then(function (response) {
//       setData(response.data);
//       // setMovieTitles(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

const HomeScreen = ({navigation}) => {
  const [date, setDate] = useState('7 Ngày Trước');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  // state for changing data list
  const [selectedItems, setSelectedItems] = useState(Items.slice(0, 5));
  const [activeButton, setActiveButton] = useState('Bán Chạy');
  const [activeButton2, setActiveButton2] = useState('Cash');
  const [activeButton3, setActiveButton3] = useState('SVM_best_seller');
  const [activeButton4, setActiveButton4] = useState('Revenue');
  // const [activeButton3, setActiveButton3] = useState('Bán Chạy');

  const handleButton1Press = () => {
    setActiveButton('Bán Chạy');
    setSelectedItems(Items.slice(0, 5));
  };

  const handleButton2Press = () => {
    setActiveButton('Bán Kém');
    setSelectedItems(Items.slice(4));
  };
  const handleButton3Press = () => {
    setActiveButton2('Cash');
    // setSelectedItems(Items.slice(0, 5));
  };

  const handleButton4Press = () => {
    setActiveButton2('MoMo');
    // setSelectedItems(Items.slice(4));
  };
  const handleButton5Press = () => {
    setActiveButton2('CreditCard');
    // setSelectedItems(Items.slice(4));
  };
  const handleButton6Press = () => {
    setActiveButton2('VietQR');
    // setSelectedItems(Items.slice(4));
  };
  const handleButton7Press = () => {
    setActiveButton3('SVM_best_seller');
    // setSelectedItems(Items.slice(4));
  };  
  const handleButton8Press = () => {
    setActiveButton3('SVM_bad_seller');
    // setSelectedItems(Items.slice(4));
  };
  const handleButton9Press = () => {
    setActiveButton('Revenue');
    // setSelectedItems(Items.slice(4));
  };
  const handleButton10Press = () => {
    setActiveButton('Items');
    // setSelectedItems(Items.slice(4));
  };

  const [selectedSVM, setSelectedSVM] = useState(SVM);
  // State for changing text color
  const [isFocused, setIsFocused] = useState(false);

  const originalText = 'Giao Dịch Thành Công';
  const truncatedText = originalText.substr(0, 18) + '...';

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  const renderDot = color => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  // Render items for FlatList Items
  const renderItems = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginRight: 30,
          justifyContent: 'space-between',
          width: 320,
        }}>
        <View>
          <Image
            style={styles.tinyLogo}
            resizeMethod="auto"
            source={{
              uri: item.uri,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 10,
            color: 'black',
            fontWeight: 'bold',
            width: 140,
          }}>
          {item.name}
        </Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 10, color: 'black'}}>SL Bán </Text>
          <Text style={{fontSize: 10, color: 'black', fontWeight: 'bold'}}>
            {item.total}
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 10, color: 'black'}}>Doanh Thu </Text>
          <Text style={{fontSize: 10, color: 'black', fontWeight: 'bold'}}>
            {item.value} VND
          </Text>
        </View>
      </View>
    );
  };

  const renderSVM = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginRight: 30,
          justifyContent: 'space-between',
          width: 320,
        }}>
        <Image
          style={styles.tinyLogo}
          resizeMethod="auto"
          source={require('./assests/SVM.png')}
        />

        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
                fontWeight: 'bold',
                width: 140,
              }}>
              {item.name}
            </Text>
            <Text style={{fontSize: 10, color: 'black'}}>{item.location}</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 10, color: 'black'}}>SL Bán </Text>
            <Text style={{fontSize: 10, color: 'black', fontWeight: 'bold'}}>
              {item.total}
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 10, color: 'black'}}>Doanh Thu </Text>
            <Text style={{fontSize: 10, color: 'black', fontWeight: 'bold'}}>
              {item.value} VND
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F5F8FB',
      }}>
      <Image
        source={require('./assests/userBackground.png')}
        resizeMethod="auto"
        style={styles.picture}
      />
      {/* <View style={{position: 'absolute'}}> */}
      <View style={{flexDirection: 'row', position: 'absolute'}}>
        <Image
          source={require('./assests/hyperlogy.png')}
          // resizeMethod="auto"
          style={styles.circle}
        />
        <Text style={{fontSize: 12, color: '#ffffff', top: 40, right: 20}}>
          {' '}
          Xin chào !{' '}
        </Text>
        <Text style={styles.text}> Adminn Hyperlogy</Text>
        <TouchableOpacity>
          <Fontisto name="bell" size={25} style={styles.icon} />
        </TouchableOpacity>
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
          <Picker.Item
            label="1 Ngày Trước"
            value="1 Ngày Trước"
            style={{fontSize: 13}}
          />
          <Picker.Item
            label="1 Tuần Trước"
            value="1 Tuần Trước"
            style={{fontSize: 13}}
          />
          <Picker.Item
            label="1 Tháng Trước"
            value="1 Tháng Trước"
            style={{fontSize: 13}}
          />
        </Picker>
      </View>

      <View style={{flex: 1}}>
        <ScrollView>
          {/* Tổng doanh thu */}
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              borderRadius: 20,
              width: 350,
              height: 200,
              top: 20,
              marginBottom: 20,
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
                  fontSize: 11,
                  fontWeight: 'bold',
                  color: '#000000',
                  padding: 10,
                  left: 10,
                }}>
                {' '}
                Thành phố Hà Nội{' '}
              </Text>
              <Text
                style={{
                  fontSize: 11,
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

          {/* Thống Kê Doanh Thu Bán Hàng */}
          <View style={styles.chart}>
            <Text style={styles.textChart}> Thống Kê Doanh Thu Bán Hàng</Text>
            <View style={{top: 30, right: 5}}>
              <LineChart
                areaChart
                data={lineData}
                height={220}
                width={300}
                spacing={70}
                initialSpacing={0}
                color="skyblue"
                textColor="black"
                hideYAxisText
                xAxisLabelTextStyle={{
                  color: '#000000',
                  fontSize: 10,
                  fontWeight: 'bold',
                  marginLeft: 20,
                }}
                showDataPoints
                dataPointsColor="#F5A623"
                startFillColor="#F5A623"
                startOpacity={0.8}
                endOpacity={1}
              />
            </View>
          </View>

          {/* Thống Kê Sản Phẩm Bán Được */}
          <View style={styles.chart}>
            <Text style={styles.textChart}> Thống Kê Sản Phẩm Bán Được </Text>
            <View style={{top: 30, left: 10}}>
              <BarChart
                data={barData}
                barStyle={{
                  borderWidth: 1,
                  borderColor: 'blue',
                  width: 40,
                }}
                width={300} //chart width
                height={220}
                showScrollIndicator
                disableScroll={false}
                initialSpacing={20}
                spacing={30}
                showYAxisText
                yAxisTextStyle={{
                  color: '#000000',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}
                xAxisLabelTextStyle={{
                  color: '#000000',
                  fontSize: 10,
                  fontWeight: 'bold',
                  left: 10,
                }}
                showDataPoints
                dataPointsColor="#F5A623"
                noOfSections={5}
                startOpacity={0.8}
                endOpacity={0.3}
              />
            </View>
          </View>

          {/* Tổng Số Sản Phẩm Bán Ra */}
          <View style={{flex: 1}}>
            <View style={styles.chart}>
              <Text style={styles.textChart}> Tổng Số Sản Phẩm Bán Ra </Text>
              <View style={{top: 10, left: 10}}>
                <PieChart
                  donut
                  innerRadius={80}
                  data={pieData1}
                  radius={130}
                  centerLabelComponent={() => {
                    return (
                      <>
                        <Text
                          style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#000000',
                          }}>
                          126
                        </Text>
                        <Text style={{fontSize: 15, color: '#000000'}}>
                          {' '}
                          Tổng
                        </Text>
                      </>
                    );
                  }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 250,
                        marginRight: 20,
                      }}>
                      {renderDot('#ADFF9B')}
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 10,
                        }}>
                        Nước giải khát:{' '}
                      </Text>
                      <Text
                        style={{
                          color: '#ADFF9B',
                          fontSize: 10,
                          fontWeight: 'bold',
                          marginLeft: 100,
                        }}>
                        {' '}
                        54 (43%){' '}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: 250,
                      marginBottom: 10,
                      marginRight: 20,
                    }}>
                    {renderDot('#00ffff')}
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 10,
                      }}>
                      Đồ ăn:{' '}
                    </Text>
                    <Text
                      style={{color: '#00ffff', fontSize: 10, marginLeft: 150}}>
                      {' '}
                      72 (57%){' '}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Doanh Thu Theo Khu Vực */}
          <View style={{flex: 1}}>
            <View style={styles.chart}>
              <Text style={styles.textChart}> Doanh Thu Theo Khu Vực </Text>
              <View style={{left: 10}}>
                <PieChart
                  radius={120}
                  showTextBackground
                  textBackgroundRadius={26}
                  data={pieData2}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: 250,
                  marginBottom: 10,
                  marginRight: 40,
                }}>
                {renderDot('#ADFF9B')}
                <Text style={{color: 'black', fontSize: 10}}>
                  Thành phố Hà Nội:{' '}
                </Text>
                <Text
                  style={{
                    color: '#ADFF9B',
                    fontSize: 10,
                    fontWeight: 'bold',
                    marginLeft: 40,
                  }}>
                  {' '}
                  732.000VND (100%){' '}
                </Text>
              </View>
              <View style={styles.touchable}>
                <TouchableOpacity onPress={handleButton3Press}>
                  <Text
                    style={{
                      fontWeight: activeButton2 === 'Cash' ? 'bold' : '100',
                      color: activeButton2 === 'Cash' ? 'red' : 'gray',
                      fontSize: 10,
                    }}>
                    Tiền Mặt
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButton4Press}>
                  <Text
                    style={{
                      fontWeight: activeButton2 === 'MoMo' ? 'bold' : '100',
                      color: activeButton2 === 'MoMo' ? 'red' : 'gray',
                      fontSize: 10,
                    }}>
                    MoMo
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButton5Press}>
                  <Text
                    style={{
                      fontWeight: activeButton2 === 'CreditCard' ? 'bold' : '100',
                      color: activeButton2 === 'CreditCard' ? 'red' : 'gray',
                      fontSize: 10,
                    }}>
                    Thẻ Ngân Hàng
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButton6Press}>
                  <Text
                    style={{
                      fontWeight: activeButton2 === 'VietQR' ? 'bold' : '100',
                      color: activeButton2 === 'VietQR' ? 'red' : 'gray',
                      fontSize: 10,
                    }}>
                    VietQR
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Tỉ Lệ Giao Dịch */}
          <View style={{flex: 1}}>
            <View style={styles.chart}>
              <Text style={[styles.textChart, {marginRight: 80}]}>
                {' '}
                Tỉ Lệ Giao Dịch{' '}
              </Text>
              <View style={{bottom: 10, left: 10}}>
                <PieChart
                  donut
                  innerRadius={80}
                  data={pieData3}
                  centerLabelComponent={() => {
                    return (
                      <View>
                        <Text
                          style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#000000',
                          }}>
                          132
                        </Text>
                        <Text style={{fontSize: 15, color: '#000000'}}>
                          {' '}
                          Tổng
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>

              <View style={{marginRight: 110}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: 170,
                      marginRight: 10,
                    }}>
                    {renderDot('#7fff00')}
                    <Text style={{fontSize: 10, color: 'black'}}>
                      {' '}
                      {truncatedText}{' '}
                    </Text>
                    <Text
                      style={{
                        color: '#7fff00',
                        fontSize: 10,
                        fontWeight: 'bold',
                        marginLeft: 10,
                      }}>
                      {' '}
                      116 (88%){' '}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 150,
                    justifyContent: 'space-between',
                    marginBottom: 10,
                    marginRight: 20,
                  }}>
                  {renderDot('#00ffff')}
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 10,
                      marginRight: 25,
                    }}>
                    {' '}
                    Giao Dịch Thất Bại:{' '}
                  </Text>
                  <Text style={{color: '#00ffff', fontSize: 10}}>
                    {' '}
                    16 (12%){' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Thống Kê Mặt Hàng */}
          <View style={styles.chart}>
            <Text style={styles.textChart}> Thống Kê Mặt Hàng </Text>
            <View style={{flex: 1, marginBottom: 20}}>
              <View
                style={[
                  styles.touchable,
                  {flexDirection: 'row', justifyContent: 'space-around'},
                ]}>
                <TouchableOpacity onPress={handleButton1Press}>
                  <Text
                    style={{
                      fontWeight: activeButton === 'Bán Chạy' ? 'bold' : '100',
                      color: activeButton === 'Bán Chạy' ? 'red' : 'gray',
                      fontSize: 12,
                    }}>
                    Bán Chạy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButton2Press}>
                  <Text
                    style={{
                      fontWeight: activeButton === 'Bán Kém' ? 'bold' : '100',
                      color: activeButton === 'Bán Kém' ? 'red' : 'gray',
                      fontSize: 12,
                    }}>
                    Bán Kém
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                // ListHeaderComponent={
                //   <>
                //     <Text>Take a look at the list of recipes below:</Text>
                //   </>}
                data={selectedItems}
                renderItem={renderItems}
                keyExtractor={item => item.id.toString()}
                // ListFooterComponent={
                //   <Text>Take a look at the list of recipes below:</Text>
                // }
              />
            </View>
          </View>

          {/* Thống Kê Máy Bán Hàng */}

          <View style={styles.chart}>
            <Text style={styles.textChart}> Thống Kê Máy Bán Hàng </Text>
            <View style={{flex: 1}}>
              <View
                style={[
                  styles.touchable,
                  {flexDirection: 'row', justifyContent: 'space-around'},
                ]}>
                <TouchableOpacity onPress={handleButton7Press}>
                  <Text
                    style={{
                      fontWeight: activeButton3 === 'SVM_best_seller' ? 'bold' : '100',
                      color: activeButton3 === 'SVM_best_seller' ? 'red' : 'gray',
                      fontSize: 12,
                    }}>
                    Bán Chạy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButton8Press}>
                  <Text
                    style={{
                      fontWeight: activeButton === 'SVM_bad_seller' ? 'bold' : '100',
                      color: activeButton === 'SVM_bad_seller' ? 'red' : 'gray',
                      fontSize: 12,
                    }}>
                    Bán Kém
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <FlatList
                  data={SVM}
                  renderItem={renderSVM}
                  keyExtractor={item => item.id.toString()}
                />
              </View>
            </View>
          </View>

          {/* Thống Kê Thanh Toán */}
          <View style={{flex: 1}}>
            <View style={styles.chart}>
              <Text style={styles.textChart}> Thống Kê Thanh Toán </Text>
              <View style={{ left: 10}}>
                <PieChart
                  radius={110}
                  showTextBackground
                  textBackgroundRadius={26}
                  data={pieData4}
                />
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  marginRight: 40,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 250,
                    marginRight: 10,
                  }}>
                  {renderDot('#ADFF9B')}
                  <Text style={{fontSize: 10, color: 'black'}}>
                    {' '}
                    Tiền Mặt :{' '}
                  </Text>
                  <Text
                    style={{
                      color: '#ADFF9B',
                      fontSize: 10,
                      fontWeight: 'bold',
                      marginLeft: 90,
                    }}>
                    {' '}
                    833.000 VND (57%){' '}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 250,
                    justifyContent: 'space-between',
                    marginRight: 20,
                  }}>
                  {renderDot('#4A90E2')}
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 10,
                      marginRight: 25,
                    }}>
                    {' '}
                    MOMO :{' '}
                  </Text>
                  <Text
                    style={{
                      color: '#4A90E2',
                      fontSize: 10,
                      fontWeight: 'bold',
                      marginLeft: 75,
                    }}>
                    {' '}
                    413.000 (28%){' '}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 250,
                    marginRight: 10,
                  }}>
                  {renderDot('#FF4C54')}
                  <Text style={{fontSize: 10, color: 'black'}}> VietQR : </Text>
                  <Text
                    style={{
                      color: '#FF4C54',
                      fontSize: 10,
                      fontWeight: 'bold',
                      marginLeft: 100,
                    }}>
                    {' '}
                    20.000 VND (1%){' '}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 250,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  {renderDot('#F5A623')}
                  <Text style={{fontSize: 10, color: 'black'}}>
                    {' '}
                    Thẻ Ngân Hàng :{' '}
                  </Text>
                  <Text
                    style={{
                      color: '#F5A623',
                      fontSize: 10,
                      fontWeight: 'bold',
                      marginLeft: 50,
                    }}>
                    {' '}
                    182.000 (13%){' '}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.touchable,
                  {flexDirection: 'row', justifyContent: 'space-around'},
                ]}>
                <TouchableOpacity onPress={handleButton9Press}>
                  <Text
                    style={{
                      fontWeight: activeButton4 === 'Revenue' ? 'bold' : '100',
                      color: activeButton4 === 'Revenue' ? 'red' : 'gray',
                      fontSize: 12,
                    }}>
                    Doanh Thu
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButton10Press}>
                  <Text
                    style={{
                      fontWeight: activeButton4 === 'Items' ? 'bold' : '100',
                      color: activeButton4 === 'Items' ? 'red' : 'gray',
                      fontSize: 12,
                    }}>
                    Sản Phẩm
                  </Text>
                </TouchableOpacity>
              </View>
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
    top: 120,
    right: 50,
    left: 10,
    height: 70,
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
    top: 50,
    left: 30,
  },
  dropdown: {
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    height: '7%',
    borderColor: '#000000',
    marginLeft: 150,
    marginTop: 0,
  },
  picker: {
    color: '#000000',
    width: 200,
  },
  chart: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: 350,
    height: 450,
    marginTop: 20,
    marginBottom: 0,
  },
  textChart: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1890FF',
    padding: 20,
    right: 50,
    // bottom: 20,
  },
  topLabel: {
    color: 'blue',
    fontSize: 10,
    marginBottom: 6,
    marginLeft: 5,
  },
  touchable: {
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'space-around',
    width: 320,
    backgroundColor: '#EBEFF0',
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 10,
  },
  focusedText: {
    color: 'red',
  },
  picture: {
    justifyContent: 'flex-start',
    width: 400,
    height: 200,
    bottom: 15,
    marginTop: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: "#EBEFF0",
    borderRadius: 10,
  },
});

export default HomeScreen;
