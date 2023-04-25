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
import SearchableDropdown from 'react-native-searchable-dropdown';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const items = [
  // name key is must. It is to show the text in front
  {id: 1, name: 'angellist'},
  {id: 2, name: 'codepen'},
  {id: 3, name: 'envelope'},
  {id: 4, name: 'etsy'},
  {id: 5, name: 'facebook'},
  {id: 6, name: 'foursquare'},
  {id: 7, name: 'github-alt'},
  {id: 8, name: 'github'},
  {id: 9, name: 'gitlab'},
  {id: 10, name: 'instagram'},
];

const ThirdStep = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <View style={styles.row}>
          <View style={{width: '70%', elevation: 5, backgroundColor: '#FFF'}}>
            <Text style={styles.title}>Enter Activation Code</Text>
            <View style={styles.dot_view}>
              <View style={[styles.dot, {backgroundColor: 'green'}]} />
              <View style={[styles.dot, {backgroundColor: 'green'}]} />
              <View style={[styles.dot, {backgroundColor: 'green'}]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <View style={{alignSelf: 'center',width:'70%'}}>
              <SearchableDropdown
                onTextChange={text => console.log(text)}
                onItemSelect={item => alert(JSON.stringify(item))}
                containerStyle={{padding: 5}}
                textInputStyle={{
                  // Inserted text style
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  backgroundColor: '#FAF7F6',
                }}
                itemStyle={{
                  // Single dropdown item style
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: '#FAF9F8',
                  borderColor: '#bbb',
                  borderWidth: 1,
                }}
                itemTextStyle={{
                  // Text style of a single dropdown item
                  color: '#222',
                }}
                itemsContainerStyle={{
                  // Items container style you can pass maxHeight
                  // To restrict the items dropdown hieght
                  maxHeight: '60%',
                }}
                items={items}
                // Mapping of item array
                defaultIndex={2}
                // Default selected item index
                placeholder="placeholder"
                // place holder for the search input
                resPtValue={false}
                // Reset textInput Value with true and false state
                underlineColorAndroid="transparent"
                // To remove the underline from the android input
              />
            </View>
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
              style={{padding: 5, backgroundColor: '#D3D3D3', marginLeft: 5}}>
              <Text>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ThirdStep;

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
    fontSize: hp('0.8%'),
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
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
