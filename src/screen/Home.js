import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  PixelRatio,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.header_left_view}>
            <Text style={{color: '#FFF'}}>Logo</Text>
          </View>
          <View style={styles.header_right_view}>
            <Text style={{color: '#FFF'}}>Dashboard</Text>
            <TouchableOpacity>
              <Text style={{color: '#FFF'}}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.left_container}>
            <View style={{marginBottom: 5}}>
              <Image
                source={require('../asstes/person.png')}
                style={{height: 40, width: 40}}
              />
              <Text style={{fontSize: hp('2%'), fontWeight: '700'}}>Edge</Text>
              <Text style={{fontSize: hp('0.9%'), fontWeight: '400'}}>
                EDGE COUNTY SCHOOLS - ONLINE - TEST
              </Text>
            </View>
            <View style={styles.line} />
            <TouchableOpacity style={styles.left_button}>
              <Text style={[styles.left_button_text, {color: 'blue'}]}>
                Dashboard
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.left_button}>
              <Text style={styles.left_button_text}>Link New Device</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.left_button}>
              <Text style={styles.left_button_text}>Sync Devices</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.left_button}>
              <Text style={styles.left_button_text}>Menu Item Lists</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.left_button}>
              <Text style={styles.left_button_text}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.left_button}>
              <Text style={styles.left_button_text}>FAQs</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              style={[
                styles.left_button,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                },
              ]}>
              <Image
                source={require('../asstes/w.png')}
                style={{height: 20, width: 20}}
              />
              <Text style={styles.blue}>What's New (v0.0.99)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.right_container}>
            <View style={styles.frist_right_container}>
              <View style={styles.row}>
                <TouchableOpacity style={styles.main_btn}>
                  <Text style={[styles.main_btn_text, {color: 'green'}]}>
                    1
                  </Text>
                  <Text style={[styles.main_btn_text, {fontSize: hp('0.9%')}]}>
                    ONLINE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.main_btn}>
                  <Text style={[styles.main_btn_text, {color: 'red'}]}>6</Text>
                  <Text style={[styles.main_btn_text, {fontSize: hp('0.9%')}]}>
                    OFFLINE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.main_btn}>
                  <Text style={[styles.main_btn_text]}>7</Text>
                  <Text style={[styles.main_btn_text, {fontSize: hp('0.9%')}]}>
                    TOTAL
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.main_btn}>
                  <Text style={[styles.main_btn_text, {color: 'gray'}]}>+</Text>
                  <Text style={[styles.main_btn_text, {fontSize: hp('0.9%')}]}>
                    NEW DEVICE
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#FFF',
                  elevation: 5,
                  marginTop: 10,
                  paddingHorizontal: 5,
                }}>
                <Text style={styles.left_button_text}>1960 ELEMENTARY</Text>
                <View style={[styles.row, {marginBottom: 5, width: '100%'}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{height: 30, width: 3, backgroundColor: 'green'}}
                    />
                    <View style={{marginLeft: 2}}>
                      <Text style={styles.left_button_text}>AJ Mac</Text>
                      <Text style={styles.text}>Now playing Lunch</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={[styles.edit, {backgroundColor: 'blue'}]}>
                      <Image
                        source={require('../asstes/edit.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.edit, {marginLeft: 3}]}>
                      <Image
                        source={require('../asstes/camera.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/mobile.png')}
                        style={{height: 12, width: 8}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/delete.png')}
                        style={{height: 12, width: 9}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={[styles.row, {marginBottom: 5, width: '100%'}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{height: 35, width: 3, backgroundColor: 'red'}}
                    />
                    <View style={{marginLeft: 2}}>
                      <Text style={styles.left_button_text}>Breakroom Tv</Text>
                      <Text style={styles.text}>Offline</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={[styles.edit, {backgroundColor: 'blue'}]}>
                      <Image
                        source={require('../asstes/edit.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.edit, {marginLeft: 3}]}>
                      <Image
                        source={require('../asstes/camera.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/mobile.png')}
                        style={{height: 12, width: 8}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/delete.png')}
                        style={{height: 12, width: 9}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={[styles.row, {marginBottom: 5, width: '100%'}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{height: 30, width: 3, backgroundColor: 'red'}}
                    />
                    <View style={{marginLeft: 2}}>
                      <Text style={styles.left_button_text}>Mystery</Text>
                      <Text style={styles.text}>Offline</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={[styles.edit, {backgroundColor: 'blue'}]}>
                      <Image
                        source={require('../asstes/edit.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.edit, {marginLeft: 3}]}>
                      <Image
                        source={require('../asstes/camera.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/mobile.png')}
                        style={{height: 12, width: 8}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/delete.png')}
                        style={{height: 12, width: 9}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#FFF',
                  elevation: 5,
                  marginTop: 10,
                  paddingHorizontal: 5,
                }}>
                <Text style={styles.left_button_text}>2921 ELEMENTARY</Text>

                <View style={[styles.row, {marginBottom: 5, width: '100%'}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{height: 35, width: 3, backgroundColor: 'red'}}
                    />
                    <View style={{marginLeft: 2}}>
                      <Text style={styles.left_button_text}>Chromebox</Text>
                      <Text style={styles.text}>Offline</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={[styles.edit, {backgroundColor: 'blue'}]}>
                      <Image
                        source={require('../asstes/edit.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.edit, {marginLeft: 3}]}>
                      <Image
                        source={require('../asstes/camera.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/mobile.png')}
                        style={{height: 12, width: 8}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/delete.png')}
                        style={{height: 12, width: 9}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={[styles.row, {marginBottom: 5, width: '100%'}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{height: 30, width: 3, backgroundColor: 'red'}}
                    />
                    <View style={{marginLeft: 2}}>
                      <Text style={styles.left_button_text}>Cyber</Text>
                      <Text style={styles.text}>Offline</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={[styles.edit, {backgroundColor: 'blue'}]}>
                      <Image
                        source={require('../asstes/edit.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.edit, {marginLeft: 3}]}>
                      <Image
                        source={require('../asstes/camera.png')}
                        style={{height: 9, width: 9}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/mobile.png')}
                        style={{height: 12, width: 8}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image
                        source={require('../asstes/delete.png')}
                        style={{height: 12, width: 9}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.second_right_container}>

            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_left_view: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#FFF',
    height: 50,
  },
  header_right_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '80%',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
  left_container: {
    width: '25%',
    padding: 10,
  },
  left_button: {
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
  },
  left_button_text: {
    fontSize: hp('1.5%'),
    fontWeight: '700',
    color: '#000',
  },
  right_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '75%',
  },
  blue: {
    color: 'blue',
    fontSize: hp('1%'),
  },
  line: {width: '100%', height: 1, backgroundColor: 'lightgray'},
  frist_right_container: {
    width: '60%',
  },
  second_right_container: {
    width: '20%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '100%',
    marginTop: 10,
  },
  main_btn: {
    height: windowHeight / 22,
    width: windowWidth / 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    elevation: 5,
    borderRadius: 5,
  },
  main_btn_text: {
    fontSize: hp('1.5%'),
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  text: {fontSize: hp('0.9%'), fontWeight: '400', color: '#000'},
  edit: {
    height: windowHeight / 50,
    width: windowWidth / 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    elevation: 5,
    borderRadius: 10,
  },
});
