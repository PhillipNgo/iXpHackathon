import { StyleSheet } from 'react-native';
import background1 from './../imgs/background1.jpg';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    fontSize:40
  },
  'centerBlock': {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  'headingOne': {
    fontSize: 40
  },
  'statusBar': {
    backgroundColor: '#2379BF',
    width:'100%',
    height:'7%'
  },
  'tabBar': {
    backgroundColor: '#2379BF',
    width:'100%',
    height:'28%'
  },
  'loginBlock': {
    marginTop: 'auto'
  },
  'loginInput': {
    textAlign:'center',
    borderWidth:1,
    borderColor: 'gray',
    height: 40,
    width: '50%',
    borderRadius: 8,
    marginBottom: 10
  },
  backdrop: {
    marginTop: .1,
  },
  backdropView: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    height:266,
    width:400
  },
  backdropHome: {
    backgroundColor: 'rgba(235, 235, 235, 0.53)',
    height:'100%',
    width:400
  },
  headline: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width:1, height:1},
    textShadowRadius: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  container: {
    paddingTop:18
  }
});

export default styles;
