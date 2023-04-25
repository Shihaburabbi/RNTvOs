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
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Autocomplete from 'react-native-autocomplete-input';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FirstStep = (props) => {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <View style={styles.row}>
          <View style={{width: '70%', elevation: 5, backgroundColor: '#FFF'}}>
            <Text style={styles.title}>Let's set up your new TV!</Text>
            <View style={styles.dot_view}>
              <View style={[styles.dot, {backgroundColor: 'green'}]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>

            <Image
              source={require('../../asstes/newdevice1.png')}
              style={{
                height: 60,
                width: 200,
                marginVertical: 20,
                alignSelf: 'center',
              }}
            />
            <Text style={styles.text}>
              Connect your Device to TV & Configure Network Settings
            </Text>
          </View>
          <View style={{width: '25%'}}>
            <Image
              source={require('../../asstes/fabric.png')}
              style={{height: 25, width: 100}}
            />
            <Image
              source={require('../../asstes/device.png')}
              style={{height: 25, width: 100, marginTop: 10}}
            />
          </View>
        </View>
        <View style={[styles.row, {width: wp('70%')}]}>
          <TouchableOpacity style={{padding: 5, backgroundColor: '#D3D3D3'}}>
            <Text>START OVER</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SecondStep')}
              style={{padding: 5, backgroundColor: '#87CEEB', marginLeft: 5}}>
              <Text>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default FirstStep;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: hp('2.5%'),
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: hp('0.9%'),
    color: '#000',
    textAlign: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: '#90ee90',
    marginHorizontal: 2,
  },
  dot_view: {
    alignSelf: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
