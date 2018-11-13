import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ImageBackground, Image } from 'react-native';
import PieChart from 'react-native-pie-chart';

import { getFB } from "../firebase";

import { connect } from 'react-redux';
import { vote } from '../../actions';
import { LVoteTotal } from '../../actions';

class Insight extends React.Component {


  // cdoc = null;

  // constructor(props) {
  //   super(props)
  //   this.pollsRef = getFB().firestore().collection("polls")
  // }

  // state = {
  //   luser_id: [],
  //   ruser_id: []
  // };




  render() {
    // console.log(this.props.user.user.uid);
    const chart_wh = 250
    const series = [900, 321]
    const sliceColor = ['#e6826', '#76BFB8']

    LVoteTotal();

    return (
      <View style={styles.container}>

        <Text style={{
          zIndex: 99,
          position: "absolute",
          top: 25,
          fontSize: 45,
          color: "gray"
        }}>Insights</Text>

        <StatusBar
          hidden={true}
        />

        <Text style={styles.title}>{this.props.votes}</Text>
        <PieChart
          style={{ position: 'absolute', top: 150 }}
          chart_wh={chart_wh}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.75}
          coverFill={'#FFF'}
        />

        {/* <Text>{this.props.vote.num}</Text> */}
        <Text
          style={{
            fontSize: 60,
            margin: 10,
            color: '#E68267',
            position: 'absolute',
            top: 230
          }}>68%</Text>

        <Text
          style={{
            fontSize: 30,
            margin: 10,
            marginTop: 200,
            fontWeight: "700",
            color: 'gray'
          }}>Votes: 1000</Text>

        <TouchableOpacity style={styles.btn}>
          <Text
            style={styles.btnText}
            onPress={() => { this.props.navigation.navigate('Details') }}
          >View Dedails</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: "#F9E7A2",
    width: 160,
    height: 55,
    borderRadius: 15,
    marginTop: 45
  },
  btnText: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
    padding: 7,
    marginTop: 5,
  }

});

const mapStateToProps = ({ vote }) => {
  return { ...vote };
};

export default connect(mapStateToProps, { vote })(Insight);
