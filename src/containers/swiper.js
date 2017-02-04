import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native';
import {WordView} from './wordView';
import Swiper from 'react-native-swiper';
import {realm} from '../services/Word';

export default class swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            loading: true
        };
    }
    componentDidMount() {
        let words = realm.objects('Word').sorted('word').filtered('word BEGINSWITH "a"');
        this.setState({
            words
        });
    }
    render() {
        return (
            <Swiper style={styles.wrapper} loop={false} showsPagination	={false} >
                {this.state.words.map((word,i) => {
                    return (
                        <WordView key={i} word={word.word} meaning={word.meaning} sentence={word.sentence} url={`http://secure-gorge-72882.herokuapp.com/public/images/${word.word}.jpg`} />
                    )
                })}
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