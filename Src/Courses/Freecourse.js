import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {windowWidth} from '../constant/extra';
import {FlatList} from 'react-native-gesture-handler';
import {Image} from 'react-native-animatable';

const Freecourse = ({navigation}) => {
  const [item, setitem] = useState([]);

  useEffect(() => {
    getitem();
  }, []);

  const getitem = () => {
    firestore()
      .collection('Courses')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        let tempdata = [];

        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );

          tempdata.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
        });
        setitem(tempdata);
      });
  };

  console.log('====================================');
  console.log(item);
  console.log('====================================');

  const freeProducts = item.filter(item => item.data.Prc === 0);
  console.log('+++++++++++++++++++++++++++++++++');
  console.log(freeProducts);

  return (
    <View style={styles.screen}>
      <FlatList
        data={freeProducts}
        keyExtractor={key => item.keys}
        renderItem={({item}) => {
          console.log(item.data.img);
          return (
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => {
                navigation.navigate('freecoursepage', {fcourse: item});
              }}>
              <View style={styles.box} key={item.id}>
                <Image style={styles.img} source={{uri: item.data.img}} />

                <View
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    width: (windowWidth * 60) / 100,
                    justifyContent: 'space-around',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Roboto-Bold',
                      color: 'black',
                    }}>
                    {item.data.name}
                  </Text>

                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 16,
                      fontFamily: 'Roboto-Medium',
                      color: '#274971',
                    }}>
                    {item.data.desc}
                  </Text>

                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 11,
                      fontFamily: 'Roboto-Medium',
                      color: '#274971',
                    }}>
                    {item.data.det}
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Roboto-Medium',
                      color: 'grey',
                      alignSelf: 'flex-end',
                    }}>
                    {item.data.tm}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  box: {
    width: (windowWidth * 90) / 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    alignSelf: 'centers',
    elevation: 5,
  },
  img: {
    width: 100,
    height: 140,
    alignSelf: 'center',
    marginLeft: 10,
    borderRadius: 10,
  },
});

export default Freecourse;
