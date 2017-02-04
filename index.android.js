import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import Swiper from './src/containers/swiper';
import {Parse} from 'parse/react-native';
import {realm} from './src/services/Word';


export default class PixnaryApp extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      result: []
    }
  }
  componentDidMount() {
    if(realm.objects('Word').length < 1) {
      Parse.initialize("myAppId","pixnary");
      Parse.serverURL = 'https://secure-gorge-72882.herokuapp.com/parse';
      Parse.Cloud.run("getData", { number:0 }).then((result) => {
        result = (JSON.parse(result));
        this.setState({
          result
        });
        this.state.result.map((o) => {
          realm.write(() => {
            realm.create('Word', {
              word: o.word,
              meaning: o.pmeaning,
              sentence: o.sentence,
              imageUrl: o.imageUrl
            });
          });
        });
        this.setState({
          loading: false
        });
      }, function(error) {
        console.log(error);
      }); 
    } else {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return (
      this.state.loading ? <Text>Loading</Text> : <Swiper />
    );
  }
}



AppRegistry.registerComponent('PixnaryApp', () => PixnaryApp);
