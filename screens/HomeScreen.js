import React from 'react';
import { StyleSheet, Text, View, ScrollView, Card } from 'react-native';

import Header from '../components/Header';
import RestuarantCard from '../components/RestuarantCard';

export default class HomeScreen extends React.Component {

    state = {
        restuarants : [{name: "Subway"},{name: "Arby's"},{name: 'Burger King'},{name: "McDonald's"},{name: "Wendy's"}]
    }

    static navigationOptions = {
        headerStyle: {
            height: 0
        },
    };

    //_componentWillMount(){
        //call to askfor user location permissions
    //}
  render() {

    return (
      <View style={styles.container}>
        <Header title="Lunchmate"/>
        <View style={styles.scroll}>
            <ScrollView>
                {this.state.restuarants.map((place, index) => (
                    <RestuarantCard key={index} title={place.name} navigation={this.props.navigation}/>
                ))}
                <RestuarantCard title="Placeholder 1" navigation={this.props.navigation}/>

            </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    scroll: {
        flex: 7,
    },
  container: {
    flex:1,
    //backgroundColor: '#757889',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
