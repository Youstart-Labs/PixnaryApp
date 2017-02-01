import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class swiper extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Swiper style={styles.wrapper} loop={false} showsPagination	={false} >
                <View style={styles.slide1}>
                    <Text style={styles.text}>Word1</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Word2</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>Word3</Text>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})