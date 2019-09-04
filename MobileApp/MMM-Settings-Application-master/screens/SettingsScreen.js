'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native';
import axios from 'axios';
import SettingsList from 'react-native-settings-list';


 class SettingsListExample extends Component {
   constructor (props){
     super(props);
      this.onValueChange = this.onValueChange.bind(this);
      this.state = {switchValue: true};
      // axios.get("https://mm-remote-server.herokuapp.com/modules/clock").then(function(response) {
      //   this.setState({ clockValue: response.data });
      // }.bind(this));
      axios.get("https://mm-remote-server.herokuapp.com/modules/currentweather").then(response => {
        this.setState({ currentWeatherValue: response.data.hidden });
      });
      axios.get("https://mm-remote-server.herokuapp.com/modules/weatherforecast").then(response => {
        this.setState({ weatherForecastValue: response.data.hidden });
      });
      axios.get("https://mm-remote-server.herokuapp.com/modules/clock").then(response => {
        this.setState({ clockValue: response.data.hidden });
      });
      axios.get("https://mm-remote-server.herokuapp.com/modules/alert").then(response => {
        this.setState({ alertValue: response.data.hidden });
      });
      axios.get("https://mm-remote-server.herokuapp.com/modules/calendar").then(response => {
        this.setState({ calendarValue: response.data.hidden });
      });
      axios.get("https://mm-remote-server.herokuapp.com/modules/compliments").then(response => {
        this.setState({ complimentValue: response.data.hidden });
      });
      axios.get("https://mm-remote-server.herokuapp.com/modules/newsfeed").then(response => {
        this.setState({ newsValue: response.data.hidden });
      });
   }

   currentWeatherSwitch = (value) => {
        this.setState({currentWeatherValue: !value}, () => {
       axios.put("https://mm-remote-server.herokuapp.com/modules/currentweather", {
          _id: "currentweather",
          hidden: !value
       })
       .then(response => {
          // this is just for the sake of testing, don't actually need to do anything with response
          console.log(response.data);
          this.setState({putRequestResponse: JSON.stringify(response.data)});
       })
       .catch(function(error) {
          console.log(error);
       })
    });
   }
   weatherForecastSwitch = (value) => {
      this.setState({weatherForecastValue: !value}, () => {
         axios.put("https://mm-remote-server.herokuapp.com/modules/weatherforecast", {
            _id: "weatherforecast",
            hidden: !value
         })
         .then(response => {
            // this is just for the sake of testing, don't actually need to do anything with response
            console.log(response.data);
            this.setState({putRequestResponse: JSON.stringify(response.data)});
         })
         .catch(function(error) {
            console.log(error);
         })
      });
   }
   clockSwitch = (value) => {
    this.setState({clockValue: !value}, () => {
      axios.put("https://mm-remote-server.herokuapp.com/modules/clock", {
        _id: "clock",
        hidden: !value
      })
      .then(response => {
      // this is just for the sake of testing, don't actually need to do anything with response
      console.log(response.data);
      this.setState({putRequestResponse: JSON.stringify(response.data)});
      })
      .catch(function(error) {
        console.log(error);
      })
    });
   }
   alertSwitch = (value) => {
    this.setState({alertValue: !value}, () => {
         axios.put("https://mm-remote-server.herokuapp.com/modules/alert", {
            _id: "alert",
            hidden: !value
         })
         .then(response => {
            // this is just for the sake of testing, don't actually need to do anything with response
            console.log(response.data);
            this.setState({putRequestResponse: JSON.stringify(response.data)});
         })
         .catch(function(error) {
            console.log(error);
         })
      });
   }
   calendarSwitch = (value) => {
            this.setState({calendarValue: !value}, () => {
         axios.put("https://mm-remote-server.herokuapp.com/modules/calendar", {
            _id: "calendar",
            hidden: !value
         })
         .then(response => {
            // this is just for the sake of testing, don't actually need to do anything with response
            console.log(response.data);
            this.setState({putRequestResponse: JSON.stringify(response.data)});
         })
         .catch(function(error) {
            console.log(error);
         })
      });
   }
   complimentSwitch = (value) => {
            this.setState({complimentValue: !value}, () => {
         axios.put("https://mm-remote-server.herokuapp.com/modules/compliments", {
            _id: "compliments",
            hidden: !value
         })
         .then(response => {
            // this is just for the sake of testing, don't actually need to do anything with response
            console.log(response.data);
            this.setState({putRequestResponse: JSON.stringify(response.data)});
         })
         .catch(function(error) {
            console.log(error);
         })
      });
   }
   newsSwitch = (value) => {
            this.setState({newsValue: !value}, () => {
         axios.put("https://mm-remote-server.herokuapp.com/modules/newsfeed", {
            _id: "newsfeed",
            hidden: !value
         })
         .then(response => {
            // this is just for the sake of testing, don't actually need to do anything with response
            console.log(response.data);
            this.setState({putRequestResponse: JSON.stringify(response.data)});
         })
         .catch(function(error) {
            console.log(error);
         })
      });
   }

   render() {
     var bgColor = '#DCE3F4';
     return (
       <View style={{backgroundColor:'#EFEFF4',flex:1}}>
         <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
           <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>
         </View>
         <View style={{backgroundColor:'#EFEFF4',flex:1}}>
           <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
             <SettingsList.Header headerStyle={{marginTop:15}}/>
             <SettingsList.Item
               icon={
                   <Image style={styles.imageStyle} source={require('./images/compliment.png')}/>
               }
               hasSwitch={true}
               switchState={!this.state.complimentValue}
               switchOnValueChange={this.complimentSwitch}
               hasNavArrow={false}
               title='Compliments'
             />
             <SettingsList.Header headerStyle={{marginTop:15}}/>
             <SettingsList.Item
               icon={
                   <Image style={styles.imageStyle} source={require('./images/weather.png')}/>
               }
               hasSwitch={true}
               switchState={!this.state.currentWeatherValue}
               switchOnValueChange={this.currentWeatherSwitch}
               hasNavArrow={false}
               title='Current Weather'
             />
             <SettingsList.Item
               icon={
                   <Image style={styles.imageStyle} source={require('./images/weather.png')}/>
               }
               hasSwitch={true}
               switchState={!this.state.weatherForecastValue}
               switchOnValueChange={this.weatherForecastSwitch}
               hasNavArrow={false}
               title='Weather Forecast'
             />
             <SettingsList.Header headerStyle={{marginTop:15}}/>
             <SettingsList.Item
               icon={
                   <Image style={styles.imageStyle} source={require('./images/clock.png')}/>
               }
               hasSwitch={true}
               switchState={!this.state.clockValue}
               switchOnValueChange={this.clockSwitch}
               hasNavArrow={false}
               title='Clock'
             />
             <SettingsList.Item
               icon={
                   <Image style={styles.imageStyle} source={require('./images/notifications.png')}/>
               }
               hasSwitch={true}
               switchState={!this.state.alertValue}
               switchOnValueChange={this.alertSwitch}
               hasNavArrow={false}
               title='Alerts'
             />
             <SettingsList.Item
               icon={
                   <Image style={styles.imageStyle} source={require('./images/calendar.png')}/>
               }
               hasSwitch={true}
               switchState={!this.state.calendarValue}
               switchOnValueChange={this.calendarSwitch}
               hasNavArrow={false}
               title='Calendar'
             />
             <SettingsList.Item
               icon={
                   <Image style={styles.imageStyle} source={require('./images/news.png')}/>
               }
               hasSwitch={true}
               switchState={!this.state.newsValue}
               switchOnValueChange={this.newsSwitch}
               hasNavArrow={false}
               title='News Feed'
             />
           </SettingsList>
         </View>
       </View>
     );
   }
   toggleAuthView() {
     this.setState({toggleAuthView: !this.state.toggleAuthView});
   }
   onValueChange(value){
     this.setState({switchValue: value});
   }
 }

const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    alignSelf:'center',
    height:30,
    width:30
  },
  titleInfoStyle:{
    fontSize:16,
    color: '#8e8e93'
  }
});

module.exports = SettingsListExample;

