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
  StatusBar,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Materail from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import CalendarPicker from 'react-native-calendar-picker';
import {LineChart} from 'react-native-gifted-charts';
import {BarChart} from 'react-native-gifted-charts';
import {PieChart} from 'react-native-gifted-charts';

const HomeScreen = ({navigation}, {focused}) => {
  const [date, setDate] = useState('7 Ngày Trước');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

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
  const pieData = [
    {value: 54, color: '#177AD5'},
    {value: 72, color: 'lightgray'},
  ];
  const pieData1 = [
    {value: 54, color: 'forestgreen'},
    {value: 72, color: '#00ffff'},
  ];
  const pieData2 = [{value: 100, color: '#7fff00'}];
  const pieData3 = [
    {value: 116, color: '#7fff00'},
    {value: 16, color: '#00ffff'},
  ];
  const pieData4 = [
    {value: 57, color: '#03BD5B'},
    {value: 29, color: '#4A90E2'},
    {value: 1, color: '#FF4C54'},
    {value: 13, color: '#F5A623'},
  ];

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

  const renderLegend = (text, color) => {
    return (
      <View>
        <Text>v</Text>
      </View>
    );
  };

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
          // resizeMethod="auto"
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
                endOpacity={0.3}
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

          <View style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
            {/* Tổng Số Sản Phẩm Bán Ra */}
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
                      {renderDot('#7fff00')}
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 10,
                          fontWeight: 'bold',
                        }}>
                        Nước giải khát:{' '}
                      </Text>
                      <Text
                        style={{
                          color: 'forestgreen',
                          fontSize: 12,
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
                        fontWeight: 'bold',
                      }}>
                      Đồ ăn:{' '}
                    </Text>
                    <Text
                      style={{color: '#00ffff', fontSize: 12, marginLeft: 150}}>
                      {' '}
                      72 (57%){' '}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
            {/* Doanh Thu Theo Khu Vực */}
            <View style={styles.chart}>
              <Text style={styles.textChart}> Doanh Thu Theo Khu Vực </Text>
              <View style={{left: 20}}>
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
                  marginRight: 50,
                }}>
                {renderDot('forestgreen')}
                <Text
                  style={{color: 'black', fontSize: 10, fontWeight: 'bold'}}>
                  Thành phố Hà Nội:{' '}
                </Text>
                <Text
                  style={{color: 'forestgreen', fontSize: 10, marginLeft: 40}}>
                  {' '}
                  732.000VND (100%){' '}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                    <Text style={{color:"black", fontSize:12}}> Tiền Mặt </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:"black", fontSize:12}}> MoMo </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:"black", fontSize:12}}> Thẻ Ngân Hàng </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:"black", fontSize:12}}> VietQR </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
            {/* Tỉ Lệ Giao Dịch */}
            <View style={styles.chart}>
              <Text style={styles.textChart}> Tỉ Lệ Giao Dịch </Text>
              <View style={{top: 30, left: 40}}>
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

                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    marginTop: 20,
                  }}>
                  {renderLegend('Giao Dịch Thành Công: ', 'lightgreen')}
                  {renderLegend('Giao Dịch Thất Bại: ', 'orange')}
                </View>
              </View>
            </View>
          </View>

          <View style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
            {/* Thống Kê Thanh Toán */}
            <View style={styles.chart}>
              <Text style={styles.textChart}> Thống Kê Thanh Toán </Text>
              <View style={{top: 30, left: 10}}>
                <PieChart
                  radius={150}
                  showTextBackground
                  textBackgroundRadius={26}
                  data={pieData4}
                />
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    marginTop: 20,
                  }}>
                  {renderLegend('Tiền mặt:', '#03BD5B')}
                  {renderLegend('MoMo:', '#4A90E2')}
                  {renderLegend('VietQR:', '#FF4C54')}
                  {renderLegend('Thẻ Ngân Hàng:', 'F5A623')}
                </View>
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
    marginLeft: 160,
  },
  picker: {
    color: '#000000',
    width: 200,
  },
  chart: {
    flex: 1,
    padding: 20,
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
    padding: 10,
    right: 30,
    bottom: 20,
  },
  topLabel: {
    color: 'blue',
    fontSize: 10,
    marginBottom: 6,
    marginLeft: 5,
  },
});

export default HomeScreen;
